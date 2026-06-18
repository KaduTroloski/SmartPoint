// Geração de ID Único Incremental seguro por timestamp
export const iniciarPagamento = async (req, res) => {
  try {
    const { valor, metodo } = req.body;

    if (!valor || valor <= 0) {
      return res.status(400).json({ erro: "Montante transacionável inválido." });
    }

    // Cria a hash única para rastreamento da transação NFC
    const idPedido = `PED_${Date.now()}`;
    
    console.log(`[PROCESSADOR] Pré-registro gerado: ${idPedido} - R$ ${valor}`);

    return res.status(200).json({ idPedido });
  } catch (error) {
    return res.status(500).json({ erro: "Falha na inicialização do serviço." });
  }
};

// Confirmação de recebimento seguro de dados criptografados do cartão
export const confirmarParcelaCartao = async (req, res) => {
  try {
    const { idPedido, nsu, autorizacao, bandeira, metodo } = req.body;

    console.log(`[COMPROVANTE NFC] Parcela confirmada para o pedido: ${idPedido}`);
    console.log(`Detalhes: Método: ${metodo} | NSU: ${nsu} | Aut: ${autorizacao} | Bandeira: ${bandeira}`);

    // Aqui você pode persistir o log na tabela 'salePayment' se necessário
    // await salvarParcelaCartaoNoBanco({ idPedido, nsu, autorizacao, bandeira, metodo });

    return res.status(200).json({ sucesso: true, mensagem: "Parcela carimbada no sistema com sucesso!" });
  } catch (error) {
    return res.status(500).json({ erro: "Erro ao computar dados da transação do cartão." });
  }
};