import { Alert, Linking } from 'react-native';
import api from '../services/api'; // O interceptador continua ativo!

const INFINITEPAY_SCHEME = 'infinitepaydash://infinitetap-app'; 

export const iniciarPagamentoViaBackend = async (valorTotal, tipoPagamento, identificadorMetodo) => {
  try {

    // 👇 URL direta do Ngrok para iniciar o pagamento
    const respostaBackend = await api.post('/pagamento/iniciar', { 
      valor: valorTotal, 
      metodo: tipoPagamento 
    });

    const { idPedido } = respostaBackend.data;

    if (!idPedido) {
      throw new Error("O servidor não retornou um identificador de pedido válido.");
    }

    const idPedidoComMetodo = `${idPedido}_${identificadorMetodo}`;
    const valorEmCentavos = Math.round(parseFloat(valorTotal) * 100); 
    const metodoIfp = tipoPagamento === 'credit_card' ? 'credit' : 'debit';
    const cpfCnpjLojista = "02666222080"; 
    const meuAppNome = "SmartPoint"; 
    const resultUrl = encodeURIComponent('smartpoint://pagamento_concluido');

    const deepLinkInfinitePay = `${INFINITEPAY_SCHEME}?amount=${valorEmCentavos}&payment_method=${metodoIfp}&installments=1&order_id=${idPedidoComMetodo}&result_url=${resultUrl}&app_client_referrer=${meuAppNome}&doc_number=${cpfCnpjLojista}`;

    console.log("2. Disparando Deep Link:", deepLinkInfinitePay);

    try {
      await Linking.openURL(deepLinkInfinitePay);
    } catch (openError) {
      console.error("Erro na execução do Deep Link:", openError);
      Alert.alert(
        'Falha no Módulo', 
        'O aplicativo InfinitePay não está instalado ou não pôde responder à chamada.'
      );
    }

  } catch (error) {
    console.error("Erro no fluxo de inicialização:", error);
    Alert.alert('Erro', 'Não foi possível estabelecer comunicação com o gateway de pagamento.');
  }
}