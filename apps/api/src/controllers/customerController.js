import {
  listarClientes,
  buscarClientePorId,
  criarCliente,
  atualizarCliente,
  deletarCliente
} from '../dataconnect-admin-generated/esm/index.esm.js';

export const postCustomer = async (req, res) => {
  try {
    const { nome, cpf, telefone, pref } = req.body;

    if (!nome) {
      return res.status(400).json({ erro: "O campo 'nome' é obrigatório." });
    }

    const resultado = await criarCliente({ nome, cpf, telefone, pref });
    const id = resultado.data?.customer_insert?.id;

    return res.status(201).json({
      mensagem: "Cliente cadastrado com sucesso!",
      id: id
    });
  } catch (erro) {
    return res.status(400).json({ erro: erro.message });
  }
};

export const getCustomers = async (req, res) => {
  try {
    const resultado = await listarClientes();
    return res.status(200).json(resultado.data?.customers || []);
  } catch (erro) {
    return res.status(500).json({ erro: erro.message });
  }
};

export const getCustomerById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ erro: "O ID do cliente é obrigatório." });
    }

    const resultado = await buscarClientePorId({ id });
    const cliente = resultado.data?.customer;

    if (!cliente) {
      return res.status(404).json({ erro: "Cliente não encontrado." });
    }

    return res.status(200).json(cliente);
  } catch (erro) {
    return res.status(500).json({ erro: erro.message });
  }
};

export const updateCustomer = async (req, res) => {
  try {
    const { id } = req.params;
    const { nome, telefone, pref } = req.body;

    if (!id) {
      return res.status(400).json({ erro: "O ID do cliente é obrigatório." });
    }
    if (!nome) {
      return res.status(400).json({ erro: "O campo 'nome' é obrigatório para atualização." });
    }

    const resultado = await atualizarCliente({ id, nome, telefone, pref });
    
    return res.status(200).json({
      mensagem: "Cliente atualizado com sucesso!",
      id: id
    });
  } catch (erro) {
    return res.status(400).json({ erro: erro.message });
  }
};

export const deleteCustomer = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ erro: "O ID do cliente é obrigatório." });
    }

    await deletarCliente({ id });

    return res.status(200).json({
      mensagem: "Cliente removido com sucesso!"
    });
  } catch (erro) {
    return res.status(400).json({ erro: erro.message });
  }
};
