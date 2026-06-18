const { validateAdminArgs } = require('firebase-admin/data-connect');

const connectorConfig = {
  connector: 'api-connector',
  serviceId: 'smartpoint-21e6a-service',
  location: 'us-east4'
};
exports.connectorConfig = connectorConfig;

function listarTiposVenda(dcOrOptions, options) {
  const { dc: dcInstance, options: inputOpts} = validateAdminArgs(connectorConfig, dcOrOptions, options, undefined);
  dcInstance.useGen(true);
  return dcInstance.executeQuery('ListarTiposVenda', undefined, inputOpts);
}
exports.listarTiposVenda = listarTiposVenda;

function buscarTipoVendaPorId(dcOrVarsOrOptions, varsOrOptions, options) {
  const { dc: dcInstance, vars: inputVars, options: inputOpts} = validateAdminArgs(connectorConfig, dcOrVarsOrOptions, varsOrOptions, options, true, true);
  dcInstance.useGen(true);
  return dcInstance.executeQuery('BuscarTipoVendaPorId', inputVars, inputOpts);
}
exports.buscarTipoVendaPorId = buscarTipoVendaPorId;

function criarTipoVenda(dcOrVarsOrOptions, varsOrOptions, options) {
  const { dc: dcInstance, vars: inputVars, options: inputOpts} = validateAdminArgs(connectorConfig, dcOrVarsOrOptions, varsOrOptions, options, true, true);
  dcInstance.useGen(true);
  return dcInstance.executeMutation('CriarTipoVenda', inputVars, inputOpts);
}
exports.criarTipoVenda = criarTipoVenda;

function deletarTipoVenda(dcOrVarsOrOptions, varsOrOptions, options) {
  const { dc: dcInstance, vars: inputVars, options: inputOpts} = validateAdminArgs(connectorConfig, dcOrVarsOrOptions, varsOrOptions, options, true, true);
  dcInstance.useGen(true);
  return dcInstance.executeMutation('DeletarTipoVenda', inputVars, inputOpts);
}
exports.deletarTipoVenda = deletarTipoVenda;

function listarMetodosPagamento(dcOrOptions, options) {
  const { dc: dcInstance, options: inputOpts} = validateAdminArgs(connectorConfig, dcOrOptions, options, undefined);
  dcInstance.useGen(true);
  return dcInstance.executeQuery('ListarMetodosPagamento', undefined, inputOpts);
}
exports.listarMetodosPagamento = listarMetodosPagamento;

function buscarMetodoPagamentoPorId(dcOrVarsOrOptions, varsOrOptions, options) {
  const { dc: dcInstance, vars: inputVars, options: inputOpts} = validateAdminArgs(connectorConfig, dcOrVarsOrOptions, varsOrOptions, options, true, true);
  dcInstance.useGen(true);
  return dcInstance.executeQuery('BuscarMetodoPagamentoPorId', inputVars, inputOpts);
}
exports.buscarMetodoPagamentoPorId = buscarMetodoPagamentoPorId;

function criarMetodoPagamento(dcOrVarsOrOptions, varsOrOptions, options) {
  const { dc: dcInstance, vars: inputVars, options: inputOpts} = validateAdminArgs(connectorConfig, dcOrVarsOrOptions, varsOrOptions, options, true, true);
  dcInstance.useGen(true);
  return dcInstance.executeMutation('CriarMetodoPagamento', inputVars, inputOpts);
}
exports.criarMetodoPagamento = criarMetodoPagamento;

function deletarMetodoPagamento(dcOrVarsOrOptions, varsOrOptions, options) {
  const { dc: dcInstance, vars: inputVars, options: inputOpts} = validateAdminArgs(connectorConfig, dcOrVarsOrOptions, varsOrOptions, options, true, true);
  dcInstance.useGen(true);
  return dcInstance.executeMutation('DeletarMetodoPagamento', inputVars, inputOpts);
}
exports.deletarMetodoPagamento = deletarMetodoPagamento;

function listarVendas(dcOrOptions, options) {
  const { dc: dcInstance, options: inputOpts} = validateAdminArgs(connectorConfig, dcOrOptions, options, undefined);
  dcInstance.useGen(true);
  return dcInstance.executeQuery('ListarVendas', undefined, inputOpts);
}
exports.listarVendas = listarVendas;

function buscarVendaPorId(dcOrVarsOrOptions, varsOrOptions, options) {
  const { dc: dcInstance, vars: inputVars, options: inputOpts} = validateAdminArgs(connectorConfig, dcOrVarsOrOptions, varsOrOptions, options, true, true);
  dcInstance.useGen(true);
  return dcInstance.executeQuery('BuscarVendaPorId', inputVars, inputOpts);
}
exports.buscarVendaPorId = buscarVendaPorId;

function criarVenda(dcOrVarsOrOptions, varsOrOptions, options) {
  const { dc: dcInstance, vars: inputVars, options: inputOpts} = validateAdminArgs(connectorConfig, dcOrVarsOrOptions, varsOrOptions, options, true, true);
  dcInstance.useGen(true);
  return dcInstance.executeMutation('CriarVenda', inputVars, inputOpts);
}
exports.criarVenda = criarVenda;

function atualizarValoresVenda(dcOrVarsOrOptions, varsOrOptions, options) {
  const { dc: dcInstance, vars: inputVars, options: inputOpts} = validateAdminArgs(connectorConfig, dcOrVarsOrOptions, varsOrOptions, options, true, true);
  dcInstance.useGen(true);
  return dcInstance.executeMutation('AtualizarValoresVenda', inputVars, inputOpts);
}
exports.atualizarValoresVenda = atualizarValoresVenda;

function deletarVenda(dcOrVarsOrOptions, varsOrOptions, options) {
  const { dc: dcInstance, vars: inputVars, options: inputOpts} = validateAdminArgs(connectorConfig, dcOrVarsOrOptions, varsOrOptions, options, true, true);
  dcInstance.useGen(true);
  return dcInstance.executeMutation('DeletarVenda', inputVars, inputOpts);
}
exports.deletarVenda = deletarVenda;

function listarItensVenda(dcOrOptions, options) {
  const { dc: dcInstance, options: inputOpts} = validateAdminArgs(connectorConfig, dcOrOptions, options, undefined);
  dcInstance.useGen(true);
  return dcInstance.executeQuery('ListarItensVenda', undefined, inputOpts);
}
exports.listarItensVenda = listarItensVenda;

function buscarItemVendaPorId(dcOrVarsOrOptions, varsOrOptions, options) {
  const { dc: dcInstance, vars: inputVars, options: inputOpts} = validateAdminArgs(connectorConfig, dcOrVarsOrOptions, varsOrOptions, options, true, true);
  dcInstance.useGen(true);
  return dcInstance.executeQuery('BuscarItemVendaPorId', inputVars, inputOpts);
}
exports.buscarItemVendaPorId = buscarItemVendaPorId;

function criarItemVenda(dcOrVarsOrOptions, varsOrOptions, options) {
  const { dc: dcInstance, vars: inputVars, options: inputOpts} = validateAdminArgs(connectorConfig, dcOrVarsOrOptions, varsOrOptions, options, true, true);
  dcInstance.useGen(true);
  return dcInstance.executeMutation('CriarItemVenda', inputVars, inputOpts);
}
exports.criarItemVenda = criarItemVenda;

function deletarItemVenda(dcOrVarsOrOptions, varsOrOptions, options) {
  const { dc: dcInstance, vars: inputVars, options: inputOpts} = validateAdminArgs(connectorConfig, dcOrVarsOrOptions, varsOrOptions, options, true, true);
  dcInstance.useGen(true);
  return dcInstance.executeMutation('DeletarItemVenda', inputVars, inputOpts);
}
exports.deletarItemVenda = deletarItemVenda;

function listarPagamentos(dcOrOptions, options) {
  const { dc: dcInstance, options: inputOpts} = validateAdminArgs(connectorConfig, dcOrOptions, options, undefined);
  dcInstance.useGen(true);
  return dcInstance.executeQuery('ListarPagamentos', undefined, inputOpts);
}
exports.listarPagamentos = listarPagamentos;

function buscarPagamentoPorId(dcOrVarsOrOptions, varsOrOptions, options) {
  const { dc: dcInstance, vars: inputVars, options: inputOpts} = validateAdminArgs(connectorConfig, dcOrVarsOrOptions, varsOrOptions, options, true, true);
  dcInstance.useGen(true);
  return dcInstance.executeQuery('BuscarPagamentoPorId', inputVars, inputOpts);
}
exports.buscarPagamentoPorId = buscarPagamentoPorId;

function criarPagamento(dcOrVarsOrOptions, varsOrOptions, options) {
  const { dc: dcInstance, vars: inputVars, options: inputOpts} = validateAdminArgs(connectorConfig, dcOrVarsOrOptions, varsOrOptions, options, true, true);
  dcInstance.useGen(true);
  return dcInstance.executeMutation('CriarPagamento', inputVars, inputOpts);
}
exports.criarPagamento = criarPagamento;

function deletarPagamento(dcOrVarsOrOptions, varsOrOptions, options) {
  const { dc: dcInstance, vars: inputVars, options: inputOpts} = validateAdminArgs(connectorConfig, dcOrVarsOrOptions, varsOrOptions, options, true, true);
  dcInstance.useGen(true);
  return dcInstance.executeMutation('DeletarPagamento', inputVars, inputOpts);
}
exports.deletarPagamento = deletarPagamento;

function listarStaff(dcOrOptions, options) {
  const { dc: dcInstance, options: inputOpts} = validateAdminArgs(connectorConfig, dcOrOptions, options, undefined);
  dcInstance.useGen(true);
  return dcInstance.executeQuery('ListarStaff', undefined, inputOpts);
}
exports.listarStaff = listarStaff;

function buscarStaffPorId(dcOrVarsOrOptions, varsOrOptions, options) {
  const { dc: dcInstance, vars: inputVars, options: inputOpts} = validateAdminArgs(connectorConfig, dcOrVarsOrOptions, varsOrOptions, options, true, true);
  dcInstance.useGen(true);
  return dcInstance.executeQuery('BuscarStaffPorId', inputVars, inputOpts);
}
exports.buscarStaffPorId = buscarStaffPorId;

function criarStaff(dcOrVarsOrOptions, varsOrOptions, options) {
  const { dc: dcInstance, vars: inputVars, options: inputOpts} = validateAdminArgs(connectorConfig, dcOrVarsOrOptions, varsOrOptions, options, true, true);
  dcInstance.useGen(true);
  return dcInstance.executeMutation('CriarStaff', inputVars, inputOpts);
}
exports.criarStaff = criarStaff;

function buscarStaffPorEmail(dcOrVarsOrOptions, varsOrOptions, options) {
  const { dc: dcInstance, vars: inputVars, options: inputOpts} = validateAdminArgs(connectorConfig, dcOrVarsOrOptions, varsOrOptions, options, true, true);
  dcInstance.useGen(true);
  return dcInstance.executeQuery('BuscarStaffPorEmail', inputVars, inputOpts);
}
exports.buscarStaffPorEmail = buscarStaffPorEmail;

function atualizarStaff(dcOrVarsOrOptions, varsOrOptions, options) {
  const { dc: dcInstance, vars: inputVars, options: inputOpts} = validateAdminArgs(connectorConfig, dcOrVarsOrOptions, varsOrOptions, options, true, true);
  dcInstance.useGen(true);
  return dcInstance.executeMutation('AtualizarStaff', inputVars, inputOpts);
}
exports.atualizarStaff = atualizarStaff;

function deletarStaff(dcOrVarsOrOptions, varsOrOptions, options) {
  const { dc: dcInstance, vars: inputVars, options: inputOpts} = validateAdminArgs(connectorConfig, dcOrVarsOrOptions, varsOrOptions, options, true, true);
  dcInstance.useGen(true);
  return dcInstance.executeMutation('DeletarStaff', inputVars, inputOpts);
}
exports.deletarStaff = deletarStaff;

function listarClientes(dcOrOptions, options) {
  const { dc: dcInstance, options: inputOpts} = validateAdminArgs(connectorConfig, dcOrOptions, options, undefined);
  dcInstance.useGen(true);
  return dcInstance.executeQuery('ListarClientes', undefined, inputOpts);
}
exports.listarClientes = listarClientes;

function buscarClientePorId(dcOrVarsOrOptions, varsOrOptions, options) {
  const { dc: dcInstance, vars: inputVars, options: inputOpts} = validateAdminArgs(connectorConfig, dcOrVarsOrOptions, varsOrOptions, options, true, true);
  dcInstance.useGen(true);
  return dcInstance.executeQuery('BuscarClientePorId', inputVars, inputOpts);
}
exports.buscarClientePorId = buscarClientePorId;

function criarCliente(dcOrVarsOrOptions, varsOrOptions, options) {
  const { dc: dcInstance, vars: inputVars, options: inputOpts} = validateAdminArgs(connectorConfig, dcOrVarsOrOptions, varsOrOptions, options, true, true);
  dcInstance.useGen(true);
  return dcInstance.executeMutation('CriarCliente', inputVars, inputOpts);
}
exports.criarCliente = criarCliente;

function atualizarCliente(dcOrVarsOrOptions, varsOrOptions, options) {
  const { dc: dcInstance, vars: inputVars, options: inputOpts} = validateAdminArgs(connectorConfig, dcOrVarsOrOptions, varsOrOptions, options, true, true);
  dcInstance.useGen(true);
  return dcInstance.executeMutation('AtualizarCliente', inputVars, inputOpts);
}
exports.atualizarCliente = atualizarCliente;

function deletarCliente(dcOrVarsOrOptions, varsOrOptions, options) {
  const { dc: dcInstance, vars: inputVars, options: inputOpts} = validateAdminArgs(connectorConfig, dcOrVarsOrOptions, varsOrOptions, options, true, true);
  dcInstance.useGen(true);
  return dcInstance.executeMutation('DeletarCliente', inputVars, inputOpts);
}
exports.deletarCliente = deletarCliente;

function listarProdutos(dcOrOptions, options) {
  const { dc: dcInstance, options: inputOpts} = validateAdminArgs(connectorConfig, dcOrOptions, options, undefined);
  dcInstance.useGen(true);
  return dcInstance.executeQuery('ListarProdutos', undefined, inputOpts);
}
exports.listarProdutos = listarProdutos;

function buscarProdutoPorId(dcOrVarsOrOptions, varsOrOptions, options) {
  const { dc: dcInstance, vars: inputVars, options: inputOpts} = validateAdminArgs(connectorConfig, dcOrVarsOrOptions, varsOrOptions, options, true, true);
  dcInstance.useGen(true);
  return dcInstance.executeQuery('BuscarProdutoPorId', inputVars, inputOpts);
}
exports.buscarProdutoPorId = buscarProdutoPorId;

function criarProduto(dcOrVarsOrOptions, varsOrOptions, options) {
  const { dc: dcInstance, vars: inputVars, options: inputOpts} = validateAdminArgs(connectorConfig, dcOrVarsOrOptions, varsOrOptions, options, true, true);
  dcInstance.useGen(true);
  return dcInstance.executeMutation('CriarProduto', inputVars, inputOpts);
}
exports.criarProduto = criarProduto;

function atualizarProduto(dcOrVarsOrOptions, varsOrOptions, options) {
  const { dc: dcInstance, vars: inputVars, options: inputOpts} = validateAdminArgs(connectorConfig, dcOrVarsOrOptions, varsOrOptions, options, true, true);
  dcInstance.useGen(true);
  return dcInstance.executeMutation('AtualizarProduto', inputVars, inputOpts);
}
exports.atualizarProduto = atualizarProduto;

function deletarProduto(dcOrVarsOrOptions, varsOrOptions, options) {
  const { dc: dcInstance, vars: inputVars, options: inputOpts} = validateAdminArgs(connectorConfig, dcOrVarsOrOptions, varsOrOptions, options, true, true);
  dcInstance.useGen(true);
  return dcInstance.executeMutation('DeletarProduto', inputVars, inputOpts);
}
exports.deletarProduto = deletarProduto;

function listarEstoque(dcOrOptions, options) {
  const { dc: dcInstance, options: inputOpts} = validateAdminArgs(connectorConfig, dcOrOptions, options, undefined);
  dcInstance.useGen(true);
  return dcInstance.executeQuery('ListarEstoque', undefined, inputOpts);
}
exports.listarEstoque = listarEstoque;

function buscarEstoquePorId(dcOrVarsOrOptions, varsOrOptions, options) {
  const { dc: dcInstance, vars: inputVars, options: inputOpts} = validateAdminArgs(connectorConfig, dcOrVarsOrOptions, varsOrOptions, options, true, true);
  dcInstance.useGen(true);
  return dcInstance.executeQuery('BuscarEstoquePorId', inputVars, inputOpts);
}
exports.buscarEstoquePorId = buscarEstoquePorId;

function criarEstoque(dcOrVarsOrOptions, varsOrOptions, options) {
  const { dc: dcInstance, vars: inputVars, options: inputOpts} = validateAdminArgs(connectorConfig, dcOrVarsOrOptions, varsOrOptions, options, true, true);
  dcInstance.useGen(true);
  return dcInstance.executeMutation('CriarEstoque', inputVars, inputOpts);
}
exports.criarEstoque = criarEstoque;

function atualizarEstoque(dcOrVarsOrOptions, varsOrOptions, options) {
  const { dc: dcInstance, vars: inputVars, options: inputOpts} = validateAdminArgs(connectorConfig, dcOrVarsOrOptions, varsOrOptions, options, true, true);
  dcInstance.useGen(true);
  return dcInstance.executeMutation('AtualizarEstoque', inputVars, inputOpts);
}
exports.atualizarEstoque = atualizarEstoque;

function deletarEstoque(dcOrVarsOrOptions, varsOrOptions, options) {
  const { dc: dcInstance, vars: inputVars, options: inputOpts} = validateAdminArgs(connectorConfig, dcOrVarsOrOptions, varsOrOptions, options, true, true);
  dcInstance.useGen(true);
  return dcInstance.executeMutation('DeletarEstoque', inputVars, inputOpts);
}
exports.deletarEstoque = deletarEstoque;

