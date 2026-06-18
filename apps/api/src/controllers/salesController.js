import { 
  buscarProdutoPorId, 
  criarVenda, 
  criarItemVenda, 
  criarPagamento, 
  listarVendas, 
  buscarVendaPorId 
} from '../dataconnect-admin-generated/esm/index.esm.js';

export const postSale = async (req, res) => {
  try {
    const { tipoId, clienteId, desconto, itens, pagamentos } = req.body;

    if (!tipoId) {
      return res.status(400).json({ erro: "O campo 'tipoId' é obrigatório." });
    }
    if (!itens || !Array.isArray(itens) || itens.length === 0) {
      return res.status(400).json({ erro: "O campo 'itens' deve ser um array não vazio." });
    }
    if (!pagamentos || !Array.isArray(pagamentos) || pagamentos.length === 0) {
      return res.status(400).json({ erro: "O campo 'pagamentos' deve ser um array não vazio." });
    }

    const vendedorId = req.usuarioId;
    if (!vendedorId) {
      return res.status(401).json({ erro: "Vendedor não autenticado." });
    }

    let totalAmount = 0;
    const itemsWithPrice = [];

    for (const item of itens) {
      if (!item.produtoId || item.quantidade === undefined || item.quantidade <= 0) {
        return res.status(400).json({ 
          erro: "Cada item deve conter um 'produtoId' válido e uma 'quantidade' maior que zero." 
        });
      }

      const resProduto = await buscarProdutoPorId({ id: item.produtoId });
      const produto = resProduto.data?.product;
      
      if (!produto) {
        return res.status(404).json({ erro: `Produto com ID ${item.produtoId} não encontrado.` });
      }

      const unitPrice = produto.price;
      totalAmount += unitPrice * item.quantidade;

      itemsWithPrice.push({
        produtoId: item.produtoId,
        quantidade: item.quantidade,
        unitPrice: unitPrice
      });
    }

    const discount = desconto || 0;
    const netAmount = totalAmount - discount;

    const totalPagamentos = pagamentos.reduce((acc, p) => {
      if (!p.metodoId || p.valor === undefined || p.valor <= 0) {
        throw new Error("Cada pagamento deve conter um 'metodoId' válido e um 'valor' maior que zero.");
      }
      return acc + p.valor;
    }, 0);

    if (Math.abs(totalPagamentos - netAmount) > 0.01) {
      return res.status(400).json({
        erro: `A soma dos pagamentos (R$ ${totalPagamentos.toFixed(2)}) não confere com o valor líquido da venda (R$ ${netAmount.toFixed(2)}).`
      });
    }

    const resVenda = await criarVenda({
      vendedorId: vendedorId,
      tipoId: tipoId,
      clienteId: clienteId || null,
      total: totalAmount,
      desconto: discount
    });

    const saleId = resVenda.data?.sale_insert?.id;
    if (!saleId) {
      return res.status(500).json({ erro: "Não foi possível gerar a venda." });
    }

    for (const item of itemsWithPrice) {
      await criarItemVenda({
        vendaId: saleId,
        produtoId: item.produtoId,
        qtd: item.quantidade,
        preco: item.unitPrice
      });
    }

    for (const pag of pagamentos) {
      await criarPagamento({
        vendaId: saleId,
        metodoId: pag.metodoId,
        valor: pag.valor
      });
    }

    return res.status(201).json({
      mensagem: "Venda registrada com sucesso!",
      vendaId: saleId,
      total: totalAmount,
      desconto: discount,
      totalLiquido: netAmount
    });

  } catch (erro) {
    return res.status(400).json({ erro: erro.message });
  }
};

export const getSales = async (req, res) => {
  try {
    const resultado = await listarVendas();
    return res.status(200).json(resultado.data?.sales || []);
  } catch (erro) {
    return res.status(500).json({ erro: erro.message });
  }
};

export const getSaleById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ erro: "O ID da venda é obrigatório." });
    }

    const resultado = await buscarVendaPorId({ id });
    const venda = resultado.data?.sale;
    
    if (!venda) {
      return res.status(404).json({ erro: "Venda não encontrada." });
    }

    return res.status(200).json(venda);
  } catch (erro) {
    return res.status(500).json({ erro: erro.message });
  }
};
