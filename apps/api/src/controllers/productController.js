// import {listarProdutos, criarProduto} from '../databaseFunctions/esm/index.esm.js'

import {listarProdutos, criarProduto} from '../dataconnect-admin-generated/esm/index.esm.js'

export const getProducts = async (req, res) => {
  try {
    const resultado = await listarProdutos();
    return res.status(200).json(resultado.data.products);
  } catch (erro) {
    return res.status(500).json({ erro: "Falha ao buscar produtos." });
  }
};

export const postProducts = async (req, res) => {
  try {
    const { nome, descricao, preco, codigoBarras } = req.body;

    if(!nome || !preco) {
      return res.status(400).json({ erro: "Nome e preço são obrigatórios." });
    }

    const resultado = await criarProduto({ 
      nome, 
      desc: descricao, 
      preco, 
      codigo: codigoBarras 
    });

    return res.status(201).json({ 
      mensagem: "Produto criado!", id: resultado.data.product_insert 
    });
  } catch (erro) {
    return res.status(500).json({ erro: erro.message });
  }
};