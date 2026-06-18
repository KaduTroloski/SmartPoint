import { ConnectorConfig, DataConnect, OperationOptions, ExecuteOperationResponse } from 'firebase-admin/data-connect';

export const connectorConfig: ConnectorConfig;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;


export interface AtualizarClienteData {
  customer_update?: customer_Key | null;
}

export interface AtualizarClienteVariables {
  id: UUIDString;
  nome: string;
  telefone?: string | null;
  pref?: string | null;
}

export interface AtualizarEstoqueData {
  productStock_update?: productStock_Key | null;
}

export interface AtualizarEstoqueVariables {
  id: UUIDString;
  qtd: number;
}

export interface AtualizarProdutoData {
  product_update?: product_Key | null;
}

export interface AtualizarProdutoVariables {
  id: UUIDString;
  nome: string;
  preco: number;
}

export interface AtualizarStaffData {
  staff_update?: staff_Key | null;
}

export interface AtualizarStaffVariables {
  id: UUIDString;
  nome: string;
  cargo: string;
}

export interface AtualizarValoresVendaData {
  sale_update?: sale_Key | null;
}

export interface AtualizarValoresVendaVariables {
  id: UUIDString;
  total: number;
  desconto: number;
}

export interface BuscarClientePorIdData {
  customer?: {
    id: UUIDString;
    name: string;
    cpf?: string | null;
    telephone?: string | null;
    preferences?: string | null;
  } & customer_Key;
}

export interface BuscarClientePorIdVariables {
  id: UUIDString;
}

export interface BuscarEstoquePorIdData {
  productStock?: {
    id: UUIDString;
    quantity: number;
    modifiedAt: TimestampString;
    productId: {
      id: UUIDString;
      name: string;
      price: number;
      barcode?: string | null;
    } & product_Key;
  } & productStock_Key;
}

export interface BuscarEstoquePorIdVariables {
  id: UUIDString;
}

export interface BuscarItemVendaPorIdData {
  saleItem?: {
    id: UUIDString;
    quantity: number;
    unitPrice: number;
    productId: {
      name: string;
      barcode?: string | null;
    };
  } & saleItem_Key;
}

export interface BuscarItemVendaPorIdVariables {
  id: UUIDString;
}

export interface BuscarMetodoPagamentoPorIdData {
  paymentMethod?: {
    id: UUIDString;
    methodName: string;
  } & paymentMethod_Key;
}

export interface BuscarMetodoPagamentoPorIdVariables {
  id: UUIDString;
}

export interface BuscarPagamentoPorIdData {
  salePayment?: {
    id: UUIDString;
    amountPaid: number;
    paymentMethodId: {
      methodName: string;
    };
  } & salePayment_Key;
}

export interface BuscarPagamentoPorIdVariables {
  id: UUIDString;
}

export interface BuscarProdutoPorIdData {
  product?: {
    id: UUIDString;
    name: string;
    description?: string | null;
    price: number;
    barcode?: string | null;
  } & product_Key;
}

export interface BuscarProdutoPorIdVariables {
  id: UUIDString;
}

export interface BuscarStaffPorEmailData {
  staffs: ({
    id: UUIDString;
    name: string;
    email: string;
    passwordHash: string;
    role: string;
  } & staff_Key)[];
}

export interface BuscarStaffPorEmailVariables {
  email: string;
}

export interface BuscarStaffPorIdData {
  staff?: {
    id: UUIDString;
    name: string;
    email: string;
    role: string;
    passwordHash: string;
  } & staff_Key;
}

export interface BuscarStaffPorIdVariables {
  id: UUIDString;
}

export interface BuscarTipoVendaPorIdData {
  saleType?: {
    id: UUIDString;
    typeName: string;
  } & saleType_Key;
}

export interface BuscarTipoVendaPorIdVariables {
  id: UUIDString;
}

export interface BuscarVendaPorIdData {
  sale?: {
    id: UUIDString;
    totalAmount: number;
    discountAmount: number;
    createdAt: TimestampString;
    staffId: {
      name: string;
      role: string;
    };
    customerId?: {
      name: string;
      cpf?: string | null;
    };
    saleTypeId: {
      typeName: string;
    };
  } & sale_Key;
}

export interface BuscarVendaPorIdVariables {
  id: UUIDString;
}

export interface CriarClienteData {
  customer_insert: customer_Key;
}

export interface CriarClienteVariables {
  nome: string;
  cpf?: string | null;
  telefone?: string | null;
  pref?: string | null;
}

export interface CriarEstoqueData {
  productStock_insert: productStock_Key;
}

export interface CriarEstoqueVariables {
  produtoId: UUIDString;
  qtd: number;
}

export interface CriarItemVendaData {
  saleItem_insert: saleItem_Key;
}

export interface CriarItemVendaVariables {
  vendaId: UUIDString;
  produtoId: UUIDString;
  qtd: number;
  preco: number;
}

export interface CriarMetodoPagamentoData {
  paymentMethod_insert: paymentMethod_Key;
}

export interface CriarMetodoPagamentoVariables {
  nome: string;
}

export interface CriarPagamentoData {
  salePayment_insert: salePayment_Key;
}

export interface CriarPagamentoVariables {
  vendaId: UUIDString;
  metodoId: UUIDString;
  valor: number;
}

export interface CriarProdutoData {
  product_insert: product_Key;
}

export interface CriarProdutoVariables {
  nome: string;
  desc?: string | null;
  preco: number;
  codigo?: string | null;
}

export interface CriarStaffData {
  staff_insert: staff_Key;
}

export interface CriarStaffVariables {
  nome: string;
  email: string;
  senha: string;
  cargo: string;
}

export interface CriarTipoVendaData {
  saleType_insert: saleType_Key;
}

export interface CriarTipoVendaVariables {
  nome: string;
}

export interface CriarVendaData {
  sale_insert: sale_Key;
}

export interface CriarVendaVariables {
  vendedorId: UUIDString;
  tipoId: UUIDString;
  clienteId?: UUIDString | null;
  total: number;
  desconto: number;
}

export interface DeletarClienteData {
  customer_delete?: customer_Key | null;
}

export interface DeletarClienteVariables {
  id: UUIDString;
}

export interface DeletarEstoqueData {
  productStock_delete?: productStock_Key | null;
}

export interface DeletarEstoqueVariables {
  id: UUIDString;
}

export interface DeletarItemVendaData {
  saleItem_delete?: saleItem_Key | null;
}

export interface DeletarItemVendaVariables {
  id: UUIDString;
}

export interface DeletarMetodoPagamentoData {
  paymentMethod_delete?: paymentMethod_Key | null;
}

export interface DeletarMetodoPagamentoVariables {
  id: UUIDString;
}

export interface DeletarPagamentoData {
  salePayment_delete?: salePayment_Key | null;
}

export interface DeletarPagamentoVariables {
  id: UUIDString;
}

export interface DeletarProdutoData {
  product_delete?: product_Key | null;
}

export interface DeletarProdutoVariables {
  id: UUIDString;
}

export interface DeletarStaffData {
  staff_delete?: staff_Key | null;
}

export interface DeletarStaffVariables {
  id: UUIDString;
}

export interface DeletarTipoVendaData {
  saleType_delete?: saleType_Key | null;
}

export interface DeletarTipoVendaVariables {
  id: UUIDString;
}

export interface DeletarVendaData {
  sale_delete?: sale_Key | null;
}

export interface DeletarVendaVariables {
  id: UUIDString;
}

export interface ListarClientesData {
  customers: ({
    id: UUIDString;
    name: string;
    cpf?: string | null;
    telephone?: string | null;
    preferences?: string | null;
  } & customer_Key)[];
}

export interface ListarEstoqueData {
  productStocks: ({
    id: UUIDString;
    quantity: number;
    modifiedAt: TimestampString;
    productId: {
      id: UUIDString;
      name: string;
      price: number;
      barcode?: string | null;
    } & product_Key;
  } & productStock_Key)[];
}

export interface ListarItensVendaData {
  saleItems: ({
    id: UUIDString;
    quantity: number;
    unitPrice: number;
    productId: {
      id: UUIDString;
      name: string;
      barcode?: string | null;
    } & product_Key;
    saleId: {
      id: UUIDString;
      createdAt: TimestampString;
    } & sale_Key;
  } & saleItem_Key)[];
}

export interface ListarMetodosPagamentoData {
  paymentMethods: ({
    id: UUIDString;
    methodName: string;
  } & paymentMethod_Key)[];
}

export interface ListarPagamentosData {
  salePayments: ({
    id: UUIDString;
    amountPaid: number;
    paymentMethodId: {
      id: UUIDString;
      methodName: string;
    } & paymentMethod_Key;
    saleId: {
      id: UUIDString;
      totalAmount: number;
    } & sale_Key;
  } & salePayment_Key)[];
}

export interface ListarProdutosData {
  products: ({
    id: UUIDString;
    name: string;
    description?: string | null;
    price: number;
    barcode?: string | null;
  } & product_Key)[];
}

export interface ListarStaffData {
  staffs: ({
    id: UUIDString;
    name: string;
    email: string;
    role: string;
    passwordHash: string;
  } & staff_Key)[];
}

export interface ListarTiposVendaData {
  saleTypes: ({
    id: UUIDString;
    typeName: string;
  } & saleType_Key)[];
}

export interface ListarVendasData {
  sales: ({
    id: UUIDString;
    totalAmount: number;
    discountAmount: number;
    createdAt: TimestampString;
    staffId: {
      id: UUIDString;
      name: string;
      role: string;
    } & staff_Key;
    customerId?: {
      id: UUIDString;
      name: string;
      cpf?: string | null;
    } & customer_Key;
    saleTypeId: {
      id: UUIDString;
      typeName: string;
    } & saleType_Key;
  } & sale_Key)[];
}

export interface customer_Key {
  id: UUIDString;
  __typename?: 'customer_Key';
}

export interface paymentMethod_Key {
  id: UUIDString;
  __typename?: 'paymentMethod_Key';
}

export interface productStock_Key {
  id: UUIDString;
  __typename?: 'productStock_Key';
}

export interface product_Key {
  id: UUIDString;
  __typename?: 'product_Key';
}

export interface saleItem_Key {
  id: UUIDString;
  __typename?: 'saleItem_Key';
}

export interface salePayment_Key {
  id: UUIDString;
  __typename?: 'salePayment_Key';
}

export interface saleType_Key {
  id: UUIDString;
  __typename?: 'saleType_Key';
}

export interface sale_Key {
  id: UUIDString;
  __typename?: 'sale_Key';
}

export interface staff_Key {
  id: UUIDString;
  __typename?: 'staff_Key';
}

/** Generated Node Admin SDK operation action function for the 'ListarStaff' Query. Allow users to execute without passing in DataConnect. */
export function listarStaff(dc: DataConnect, options?: OperationOptions): Promise<ExecuteOperationResponse<ListarStaffData>>;
/** Generated Node Admin SDK operation action function for the 'ListarStaff' Query. Allow users to pass in custom DataConnect instances. */
export function listarStaff(options?: OperationOptions): Promise<ExecuteOperationResponse<ListarStaffData>>;

/** Generated Node Admin SDK operation action function for the 'BuscarStaffPorId' Query. Allow users to execute without passing in DataConnect. */
export function buscarStaffPorId(dc: DataConnect, vars: BuscarStaffPorIdVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<BuscarStaffPorIdData>>;
/** Generated Node Admin SDK operation action function for the 'BuscarStaffPorId' Query. Allow users to pass in custom DataConnect instances. */
export function buscarStaffPorId(vars: BuscarStaffPorIdVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<BuscarStaffPorIdData>>;

/** Generated Node Admin SDK operation action function for the 'CriarStaff' Mutation. Allow users to execute without passing in DataConnect. */
export function criarStaff(dc: DataConnect, vars: CriarStaffVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<CriarStaffData>>;
/** Generated Node Admin SDK operation action function for the 'CriarStaff' Mutation. Allow users to pass in custom DataConnect instances. */
export function criarStaff(vars: CriarStaffVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<CriarStaffData>>;

/** Generated Node Admin SDK operation action function for the 'BuscarStaffPorEmail' Query. Allow users to execute without passing in DataConnect. */
export function buscarStaffPorEmail(dc: DataConnect, vars: BuscarStaffPorEmailVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<BuscarStaffPorEmailData>>;
/** Generated Node Admin SDK operation action function for the 'BuscarStaffPorEmail' Query. Allow users to pass in custom DataConnect instances. */
export function buscarStaffPorEmail(vars: BuscarStaffPorEmailVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<BuscarStaffPorEmailData>>;

/** Generated Node Admin SDK operation action function for the 'AtualizarStaff' Mutation. Allow users to execute without passing in DataConnect. */
export function atualizarStaff(dc: DataConnect, vars: AtualizarStaffVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<AtualizarStaffData>>;
/** Generated Node Admin SDK operation action function for the 'AtualizarStaff' Mutation. Allow users to pass in custom DataConnect instances. */
export function atualizarStaff(vars: AtualizarStaffVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<AtualizarStaffData>>;

/** Generated Node Admin SDK operation action function for the 'DeletarStaff' Mutation. Allow users to execute without passing in DataConnect. */
export function deletarStaff(dc: DataConnect, vars: DeletarStaffVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<DeletarStaffData>>;
/** Generated Node Admin SDK operation action function for the 'DeletarStaff' Mutation. Allow users to pass in custom DataConnect instances. */
export function deletarStaff(vars: DeletarStaffVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<DeletarStaffData>>;

/** Generated Node Admin SDK operation action function for the 'ListarClientes' Query. Allow users to execute without passing in DataConnect. */
export function listarClientes(dc: DataConnect, options?: OperationOptions): Promise<ExecuteOperationResponse<ListarClientesData>>;
/** Generated Node Admin SDK operation action function for the 'ListarClientes' Query. Allow users to pass in custom DataConnect instances. */
export function listarClientes(options?: OperationOptions): Promise<ExecuteOperationResponse<ListarClientesData>>;

/** Generated Node Admin SDK operation action function for the 'BuscarClientePorId' Query. Allow users to execute without passing in DataConnect. */
export function buscarClientePorId(dc: DataConnect, vars: BuscarClientePorIdVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<BuscarClientePorIdData>>;
/** Generated Node Admin SDK operation action function for the 'BuscarClientePorId' Query. Allow users to pass in custom DataConnect instances. */
export function buscarClientePorId(vars: BuscarClientePorIdVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<BuscarClientePorIdData>>;

/** Generated Node Admin SDK operation action function for the 'CriarCliente' Mutation. Allow users to execute without passing in DataConnect. */
export function criarCliente(dc: DataConnect, vars: CriarClienteVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<CriarClienteData>>;
/** Generated Node Admin SDK operation action function for the 'CriarCliente' Mutation. Allow users to pass in custom DataConnect instances. */
export function criarCliente(vars: CriarClienteVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<CriarClienteData>>;

/** Generated Node Admin SDK operation action function for the 'AtualizarCliente' Mutation. Allow users to execute without passing in DataConnect. */
export function atualizarCliente(dc: DataConnect, vars: AtualizarClienteVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<AtualizarClienteData>>;
/** Generated Node Admin SDK operation action function for the 'AtualizarCliente' Mutation. Allow users to pass in custom DataConnect instances. */
export function atualizarCliente(vars: AtualizarClienteVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<AtualizarClienteData>>;

/** Generated Node Admin SDK operation action function for the 'DeletarCliente' Mutation. Allow users to execute without passing in DataConnect. */
export function deletarCliente(dc: DataConnect, vars: DeletarClienteVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<DeletarClienteData>>;
/** Generated Node Admin SDK operation action function for the 'DeletarCliente' Mutation. Allow users to pass in custom DataConnect instances. */
export function deletarCliente(vars: DeletarClienteVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<DeletarClienteData>>;

/** Generated Node Admin SDK operation action function for the 'ListarProdutos' Query. Allow users to execute without passing in DataConnect. */
export function listarProdutos(dc: DataConnect, options?: OperationOptions): Promise<ExecuteOperationResponse<ListarProdutosData>>;
/** Generated Node Admin SDK operation action function for the 'ListarProdutos' Query. Allow users to pass in custom DataConnect instances. */
export function listarProdutos(options?: OperationOptions): Promise<ExecuteOperationResponse<ListarProdutosData>>;

/** Generated Node Admin SDK operation action function for the 'BuscarProdutoPorId' Query. Allow users to execute without passing in DataConnect. */
export function buscarProdutoPorId(dc: DataConnect, vars: BuscarProdutoPorIdVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<BuscarProdutoPorIdData>>;
/** Generated Node Admin SDK operation action function for the 'BuscarProdutoPorId' Query. Allow users to pass in custom DataConnect instances. */
export function buscarProdutoPorId(vars: BuscarProdutoPorIdVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<BuscarProdutoPorIdData>>;

/** Generated Node Admin SDK operation action function for the 'CriarProduto' Mutation. Allow users to execute without passing in DataConnect. */
export function criarProduto(dc: DataConnect, vars: CriarProdutoVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<CriarProdutoData>>;
/** Generated Node Admin SDK operation action function for the 'CriarProduto' Mutation. Allow users to pass in custom DataConnect instances. */
export function criarProduto(vars: CriarProdutoVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<CriarProdutoData>>;

/** Generated Node Admin SDK operation action function for the 'AtualizarProduto' Mutation. Allow users to execute without passing in DataConnect. */
export function atualizarProduto(dc: DataConnect, vars: AtualizarProdutoVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<AtualizarProdutoData>>;
/** Generated Node Admin SDK operation action function for the 'AtualizarProduto' Mutation. Allow users to pass in custom DataConnect instances. */
export function atualizarProduto(vars: AtualizarProdutoVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<AtualizarProdutoData>>;

/** Generated Node Admin SDK operation action function for the 'DeletarProduto' Mutation. Allow users to execute without passing in DataConnect. */
export function deletarProduto(dc: DataConnect, vars: DeletarProdutoVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<DeletarProdutoData>>;
/** Generated Node Admin SDK operation action function for the 'DeletarProduto' Mutation. Allow users to pass in custom DataConnect instances. */
export function deletarProduto(vars: DeletarProdutoVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<DeletarProdutoData>>;

/** Generated Node Admin SDK operation action function for the 'ListarEstoque' Query. Allow users to execute without passing in DataConnect. */
export function listarEstoque(dc: DataConnect, options?: OperationOptions): Promise<ExecuteOperationResponse<ListarEstoqueData>>;
/** Generated Node Admin SDK operation action function for the 'ListarEstoque' Query. Allow users to pass in custom DataConnect instances. */
export function listarEstoque(options?: OperationOptions): Promise<ExecuteOperationResponse<ListarEstoqueData>>;

/** Generated Node Admin SDK operation action function for the 'BuscarEstoquePorId' Query. Allow users to execute without passing in DataConnect. */
export function buscarEstoquePorId(dc: DataConnect, vars: BuscarEstoquePorIdVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<BuscarEstoquePorIdData>>;
/** Generated Node Admin SDK operation action function for the 'BuscarEstoquePorId' Query. Allow users to pass in custom DataConnect instances. */
export function buscarEstoquePorId(vars: BuscarEstoquePorIdVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<BuscarEstoquePorIdData>>;

/** Generated Node Admin SDK operation action function for the 'CriarEstoque' Mutation. Allow users to execute without passing in DataConnect. */
export function criarEstoque(dc: DataConnect, vars: CriarEstoqueVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<CriarEstoqueData>>;
/** Generated Node Admin SDK operation action function for the 'CriarEstoque' Mutation. Allow users to pass in custom DataConnect instances. */
export function criarEstoque(vars: CriarEstoqueVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<CriarEstoqueData>>;

/** Generated Node Admin SDK operation action function for the 'AtualizarEstoque' Mutation. Allow users to execute without passing in DataConnect. */
export function atualizarEstoque(dc: DataConnect, vars: AtualizarEstoqueVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<AtualizarEstoqueData>>;
/** Generated Node Admin SDK operation action function for the 'AtualizarEstoque' Mutation. Allow users to pass in custom DataConnect instances. */
export function atualizarEstoque(vars: AtualizarEstoqueVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<AtualizarEstoqueData>>;

/** Generated Node Admin SDK operation action function for the 'DeletarEstoque' Mutation. Allow users to execute without passing in DataConnect. */
export function deletarEstoque(dc: DataConnect, vars: DeletarEstoqueVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<DeletarEstoqueData>>;
/** Generated Node Admin SDK operation action function for the 'DeletarEstoque' Mutation. Allow users to pass in custom DataConnect instances. */
export function deletarEstoque(vars: DeletarEstoqueVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<DeletarEstoqueData>>;

/** Generated Node Admin SDK operation action function for the 'ListarTiposVenda' Query. Allow users to execute without passing in DataConnect. */
export function listarTiposVenda(dc: DataConnect, options?: OperationOptions): Promise<ExecuteOperationResponse<ListarTiposVendaData>>;
/** Generated Node Admin SDK operation action function for the 'ListarTiposVenda' Query. Allow users to pass in custom DataConnect instances. */
export function listarTiposVenda(options?: OperationOptions): Promise<ExecuteOperationResponse<ListarTiposVendaData>>;

/** Generated Node Admin SDK operation action function for the 'BuscarTipoVendaPorId' Query. Allow users to execute without passing in DataConnect. */
export function buscarTipoVendaPorId(dc: DataConnect, vars: BuscarTipoVendaPorIdVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<BuscarTipoVendaPorIdData>>;
/** Generated Node Admin SDK operation action function for the 'BuscarTipoVendaPorId' Query. Allow users to pass in custom DataConnect instances. */
export function buscarTipoVendaPorId(vars: BuscarTipoVendaPorIdVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<BuscarTipoVendaPorIdData>>;

/** Generated Node Admin SDK operation action function for the 'CriarTipoVenda' Mutation. Allow users to execute without passing in DataConnect. */
export function criarTipoVenda(dc: DataConnect, vars: CriarTipoVendaVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<CriarTipoVendaData>>;
/** Generated Node Admin SDK operation action function for the 'CriarTipoVenda' Mutation. Allow users to pass in custom DataConnect instances. */
export function criarTipoVenda(vars: CriarTipoVendaVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<CriarTipoVendaData>>;

/** Generated Node Admin SDK operation action function for the 'DeletarTipoVenda' Mutation. Allow users to execute without passing in DataConnect. */
export function deletarTipoVenda(dc: DataConnect, vars: DeletarTipoVendaVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<DeletarTipoVendaData>>;
/** Generated Node Admin SDK operation action function for the 'DeletarTipoVenda' Mutation. Allow users to pass in custom DataConnect instances. */
export function deletarTipoVenda(vars: DeletarTipoVendaVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<DeletarTipoVendaData>>;

/** Generated Node Admin SDK operation action function for the 'ListarMetodosPagamento' Query. Allow users to execute without passing in DataConnect. */
export function listarMetodosPagamento(dc: DataConnect, options?: OperationOptions): Promise<ExecuteOperationResponse<ListarMetodosPagamentoData>>;
/** Generated Node Admin SDK operation action function for the 'ListarMetodosPagamento' Query. Allow users to pass in custom DataConnect instances. */
export function listarMetodosPagamento(options?: OperationOptions): Promise<ExecuteOperationResponse<ListarMetodosPagamentoData>>;

/** Generated Node Admin SDK operation action function for the 'BuscarMetodoPagamentoPorId' Query. Allow users to execute without passing in DataConnect. */
export function buscarMetodoPagamentoPorId(dc: DataConnect, vars: BuscarMetodoPagamentoPorIdVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<BuscarMetodoPagamentoPorIdData>>;
/** Generated Node Admin SDK operation action function for the 'BuscarMetodoPagamentoPorId' Query. Allow users to pass in custom DataConnect instances. */
export function buscarMetodoPagamentoPorId(vars: BuscarMetodoPagamentoPorIdVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<BuscarMetodoPagamentoPorIdData>>;

/** Generated Node Admin SDK operation action function for the 'CriarMetodoPagamento' Mutation. Allow users to execute without passing in DataConnect. */
export function criarMetodoPagamento(dc: DataConnect, vars: CriarMetodoPagamentoVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<CriarMetodoPagamentoData>>;
/** Generated Node Admin SDK operation action function for the 'CriarMetodoPagamento' Mutation. Allow users to pass in custom DataConnect instances. */
export function criarMetodoPagamento(vars: CriarMetodoPagamentoVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<CriarMetodoPagamentoData>>;

/** Generated Node Admin SDK operation action function for the 'DeletarMetodoPagamento' Mutation. Allow users to execute without passing in DataConnect. */
export function deletarMetodoPagamento(dc: DataConnect, vars: DeletarMetodoPagamentoVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<DeletarMetodoPagamentoData>>;
/** Generated Node Admin SDK operation action function for the 'DeletarMetodoPagamento' Mutation. Allow users to pass in custom DataConnect instances. */
export function deletarMetodoPagamento(vars: DeletarMetodoPagamentoVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<DeletarMetodoPagamentoData>>;

/** Generated Node Admin SDK operation action function for the 'ListarVendas' Query. Allow users to execute without passing in DataConnect. */
export function listarVendas(dc: DataConnect, options?: OperationOptions): Promise<ExecuteOperationResponse<ListarVendasData>>;
/** Generated Node Admin SDK operation action function for the 'ListarVendas' Query. Allow users to pass in custom DataConnect instances. */
export function listarVendas(options?: OperationOptions): Promise<ExecuteOperationResponse<ListarVendasData>>;

/** Generated Node Admin SDK operation action function for the 'BuscarVendaPorId' Query. Allow users to execute without passing in DataConnect. */
export function buscarVendaPorId(dc: DataConnect, vars: BuscarVendaPorIdVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<BuscarVendaPorIdData>>;
/** Generated Node Admin SDK operation action function for the 'BuscarVendaPorId' Query. Allow users to pass in custom DataConnect instances. */
export function buscarVendaPorId(vars: BuscarVendaPorIdVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<BuscarVendaPorIdData>>;

/** Generated Node Admin SDK operation action function for the 'CriarVenda' Mutation. Allow users to execute without passing in DataConnect. */
export function criarVenda(dc: DataConnect, vars: CriarVendaVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<CriarVendaData>>;
/** Generated Node Admin SDK operation action function for the 'CriarVenda' Mutation. Allow users to pass in custom DataConnect instances. */
export function criarVenda(vars: CriarVendaVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<CriarVendaData>>;

/** Generated Node Admin SDK operation action function for the 'AtualizarValoresVenda' Mutation. Allow users to execute without passing in DataConnect. */
export function atualizarValoresVenda(dc: DataConnect, vars: AtualizarValoresVendaVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<AtualizarValoresVendaData>>;
/** Generated Node Admin SDK operation action function for the 'AtualizarValoresVenda' Mutation. Allow users to pass in custom DataConnect instances. */
export function atualizarValoresVenda(vars: AtualizarValoresVendaVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<AtualizarValoresVendaData>>;

/** Generated Node Admin SDK operation action function for the 'DeletarVenda' Mutation. Allow users to execute without passing in DataConnect. */
export function deletarVenda(dc: DataConnect, vars: DeletarVendaVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<DeletarVendaData>>;
/** Generated Node Admin SDK operation action function for the 'DeletarVenda' Mutation. Allow users to pass in custom DataConnect instances. */
export function deletarVenda(vars: DeletarVendaVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<DeletarVendaData>>;

/** Generated Node Admin SDK operation action function for the 'ListarItensVenda' Query. Allow users to execute without passing in DataConnect. */
export function listarItensVenda(dc: DataConnect, options?: OperationOptions): Promise<ExecuteOperationResponse<ListarItensVendaData>>;
/** Generated Node Admin SDK operation action function for the 'ListarItensVenda' Query. Allow users to pass in custom DataConnect instances. */
export function listarItensVenda(options?: OperationOptions): Promise<ExecuteOperationResponse<ListarItensVendaData>>;

/** Generated Node Admin SDK operation action function for the 'BuscarItemVendaPorId' Query. Allow users to execute without passing in DataConnect. */
export function buscarItemVendaPorId(dc: DataConnect, vars: BuscarItemVendaPorIdVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<BuscarItemVendaPorIdData>>;
/** Generated Node Admin SDK operation action function for the 'BuscarItemVendaPorId' Query. Allow users to pass in custom DataConnect instances. */
export function buscarItemVendaPorId(vars: BuscarItemVendaPorIdVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<BuscarItemVendaPorIdData>>;

/** Generated Node Admin SDK operation action function for the 'CriarItemVenda' Mutation. Allow users to execute without passing in DataConnect. */
export function criarItemVenda(dc: DataConnect, vars: CriarItemVendaVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<CriarItemVendaData>>;
/** Generated Node Admin SDK operation action function for the 'CriarItemVenda' Mutation. Allow users to pass in custom DataConnect instances. */
export function criarItemVenda(vars: CriarItemVendaVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<CriarItemVendaData>>;

/** Generated Node Admin SDK operation action function for the 'DeletarItemVenda' Mutation. Allow users to execute without passing in DataConnect. */
export function deletarItemVenda(dc: DataConnect, vars: DeletarItemVendaVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<DeletarItemVendaData>>;
/** Generated Node Admin SDK operation action function for the 'DeletarItemVenda' Mutation. Allow users to pass in custom DataConnect instances. */
export function deletarItemVenda(vars: DeletarItemVendaVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<DeletarItemVendaData>>;

/** Generated Node Admin SDK operation action function for the 'ListarPagamentos' Query. Allow users to execute without passing in DataConnect. */
export function listarPagamentos(dc: DataConnect, options?: OperationOptions): Promise<ExecuteOperationResponse<ListarPagamentosData>>;
/** Generated Node Admin SDK operation action function for the 'ListarPagamentos' Query. Allow users to pass in custom DataConnect instances. */
export function listarPagamentos(options?: OperationOptions): Promise<ExecuteOperationResponse<ListarPagamentosData>>;

/** Generated Node Admin SDK operation action function for the 'BuscarPagamentoPorId' Query. Allow users to execute without passing in DataConnect. */
export function buscarPagamentoPorId(dc: DataConnect, vars: BuscarPagamentoPorIdVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<BuscarPagamentoPorIdData>>;
/** Generated Node Admin SDK operation action function for the 'BuscarPagamentoPorId' Query. Allow users to pass in custom DataConnect instances. */
export function buscarPagamentoPorId(vars: BuscarPagamentoPorIdVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<BuscarPagamentoPorIdData>>;

/** Generated Node Admin SDK operation action function for the 'CriarPagamento' Mutation. Allow users to execute without passing in DataConnect. */
export function criarPagamento(dc: DataConnect, vars: CriarPagamentoVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<CriarPagamentoData>>;
/** Generated Node Admin SDK operation action function for the 'CriarPagamento' Mutation. Allow users to pass in custom DataConnect instances. */
export function criarPagamento(vars: CriarPagamentoVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<CriarPagamentoData>>;

/** Generated Node Admin SDK operation action function for the 'DeletarPagamento' Mutation. Allow users to execute without passing in DataConnect. */
export function deletarPagamento(dc: DataConnect, vars: DeletarPagamentoVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<DeletarPagamentoData>>;
/** Generated Node Admin SDK operation action function for the 'DeletarPagamento' Mutation. Allow users to pass in custom DataConnect instances. */
export function deletarPagamento(vars: DeletarPagamentoVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<DeletarPagamentoData>>;

