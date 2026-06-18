import React, { useState, useEffect, useRef } from 'react';
import { 
  View, Text, TextInput, TouchableOpacity, StyleSheet, 
  ScrollView, Alert, Linking, ActivityIndicator, KeyboardAvoidingView, Platform 
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { iniciarPagamentoViaBackend } from '../utils/payment.js';
import api from '../services/api';

const extrairParametrosDaUrl = (url) => {
  const regex = /[?&]([^=#]+)=([^&#]*)/g;
  let params = {};
  let match;
  while ((match = regex.exec(url))) params[match[1]] = decodeURIComponent(match[2]);
  return params;
};

const METODOS_DISPONIVEIS = [
  { id: 'dinheiro', nome: 'Dinheiro', icone: '💵' },
  { id: 'credito', nome: 'Crédito', icone: '💳' },
  { id: 'debito', nome: 'Débito', icone: '🪪' },
  { id: 'pix', nome: 'PIX', icone: '💠' },
];

export default function PaymentScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const scrollViewRef = useRef(null); 
  
  const VALOR_TOTAL_PEDIDO = route.params?.valorTotal || 0; 
  const ITENS_CARRINHO = route.params?.itensDoCarrinho || [];

  const [metodosSelecionados, setMetodosSelecionados] = useState([]);
  const [valores, setValores] = useState({});
  const [statusPagamentos, setStatusPagamentos] = useState({}); 
  const [carregando, setCarregando] = useState(false);

  useEffect(() => {
    const processarRetornoPagamento = async (event) => {
      const urlRetorno = event.url;
      
      if (urlRetorno && urlRetorno.includes('smartpoint://pagamento_concluido')) {
        const dados = extrairParametrosDaUrl(urlRetorno);
        
        if (dados.nsu && dados.aut) {
          const idLimpo = dados.order_id.split('_')[0];
          const metodoAprovado = dados.order_id.split('_').pop(); 

          setStatusPagamentos(prev => ({ ...prev, [metodoAprovado]: 'pago' }));

          try {
            // 👇 URL direta do Ngrok para confirmar a parcela
            await api.post('pagamento/confirmar-parcela', {
              idPedido: idLimpo,
              nsu: dados.nsu,
              autorizacao: dados.aut,
              bandeira: dados.card_brand,
              metodo: metodoAprovado
            });
          } catch (apiError) {
            console.error("Erro ao salvar parcela no banco:", apiError);
          }

          Alert.alert("✅ Aprovado!", `Pagamento no ${metodoAprovado.toUpperCase()} processado com sucesso.`);
        } else {
          Alert.alert("❌ Transação Cancelada", "A operação com o cartão foi rejeitada ou interrompida.");
        }
        setCarregando(false);
      }
    };

    const subscription = Linking.addEventListener('url', processarRetornoPagamento);
    Linking.getInitialURL().then((url) => { if (url) processarRetornoPagamento({ url }); });

    return () => subscription.remove();
  }, []);

  const toggleMetodo = (metodoId) => {
    if (statusPagamentos[metodoId] === 'pago') return; 

    if (metodosSelecionados.includes(metodoId)) {
      setMetodosSelecionados(metodosSelecionados.filter(id => id !== metodoId));
      const novosValores = { ...valores };
      delete novosValores[metodoId];
      setValores(novosValores);
    } else {
      setMetodosSelecionados([...metodosSelecionados, metodoId]);
      if (metodosSelecionados.length === 0) {
        setValores({ ...valores, [metodoId]: String(VALOR_TOTAL_PEDIDO.toFixed(2)) });
      }
    }
    setTimeout(() => { scrollViewRef.current?.scrollToEnd({ animated: true }); }, 100);
  };

  const atualizarValor = (metodoId, texto) => {
    if (statusPagamentos[metodoId] === 'pago') return; 
    const textoLimpo = texto.replace(/[^0-9.,]/g, '').replace(',', '.');
    setValores({ ...valores, [metodoId]: textoLimpo });
  };

  const valorPago = Object.values(valores).reduce((acc, val) => {
    const num = parseFloat(val);
    return acc + (isNaN(num) ? 0 : num);
  }, 0);

  const valorFaltante = VALOR_TOTAL_PEDIDO - valorPago;
  const distribuicaoCorreta = Math.abs(valorFaltante) < 0.01; 

  let textoBotao = `Faltam R$ ${Math.abs(valorFaltante).toFixed(2)}`;
  let acaoBotao = () => {};

  if (distribuicaoCorreta) {
    if (valores['credito'] && statusPagamentos['credito'] !== 'pago') {
      textoBotao = 'Aproximar Crédito';
      acaoBotao = async () => {
        setCarregando(true);
        await iniciarPagamentoViaBackend(valores['credito'], 'credit_card', 'credito');
      };
    } else if (valores['debito'] && statusPagamentos['debito'] !== 'pago') {
      textoBotao = 'Aproximar Débito';
      acaoBotao = async () => {
        setCarregando(true);
        await iniciarPagamentoViaBackend(valores['debito'], 'debit_card', 'debito');
      };
    } else {
      textoBotao = 'Concluir Venda';
      acaoBotao = async () => {
        setCarregando(true);
        try {
          // 👇 URL direta do Ngrok para concluir e baixar o estoque
          await api.post('vendas/concluir', { 
            valoresPagos: valores, 
            total: VALOR_TOTAL_PEDIDO,
            itens: ITENS_CARRINHO 
          });

          navigation.replace('Comprovante', { resumo: valores, total: VALOR_TOTAL_PEDIDO });
        } catch (error) {
          Alert.alert("Erro", "Não foi possível consolidar a venda no servidor.");
        } finally {
          setCarregando(false);
        }
      };
    }
  }

  return (
    <KeyboardAvoidingView style={styles.mainWrapper} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <View style={styles.header}>
        <View style={styles.headerRow}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.menuIcon}>
            <Text style={{color: '#fff', fontSize: 24}}>←</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Pagamento</Text>
        </View>
        <Text style={styles.headerStep}>Etapa 3 de 4</Text>
      </View>

      <ScrollView 
        ref={scrollViewRef}
        style={styles.scrollContainer} 
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled" 
      >
        {metodosSelecionados.length === 0 && (
          <View style={styles.totalCard}>
            <Text style={styles.totalLabel}>Total a pagar</Text>
            <Text style={styles.totalValue}>R$ {VALOR_TOTAL_PEDIDO.toFixed(2)}</Text>
          </View>
        )}

        <Text style={styles.sectionTitle}>Formas de pagamento</Text>
        <View style={styles.grid}>
          {METODOS_DISPONIVEIS.map((metodo) => {
            const isSelected = metodosSelecionados.includes(metodo.id);
            const isPago = statusPagamentos[metodo.id] === 'pago';
            return (
              <TouchableOpacity 
                key={metodo.id}
                style={[styles.metodoCard, isSelected && styles.metodoCardSelected, isPago && styles.metodoCardPago]}
                onPress={() => toggleMetodo(metodo.id)}
                activeOpacity={isPago ? 1 : 0.7} 
              >
                <Text style={styles.metodoIcon}>{metodo.icone}</Text>
                <Text style={[styles.metodoText, isSelected && styles.metodoTextSelected]}>{metodo.nome}</Text>
              </TouchableOpacity>
            );
          })}
        </View>

        {metodosSelecionados.length > 0 && (
          <View style={styles.valoresContainer}>
            <Text style={styles.sectionTitle}>Valores por método</Text>
            
            {metodosSelecionados.map((metodoId) => {
              const metodo = METODOS_DISPONIVEIS.find(m => m.id === metodoId);
              const isPago = statusPagamentos[metodoId] === 'pago';

              return (
                <View key={metodoId} style={[styles.inputCard, isPago && styles.inputCardPago]}>
                  <View style={styles.inputHeader}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                      <Text style={styles.inputIcon}>{metodo.icone}</Text>
                      <Text style={styles.inputTitle}>{metodo.nome} {isPago && "✅"}</Text>
                    </View>
                    {!isPago && ( 
                      <TouchableOpacity onPress={() => toggleMetodo(metodo.id)} style={styles.closeBtn}>
                        <Text style={styles.closeText}>X</Text>
                      </TouchableOpacity>
                    )}
                  </View>
                  <Text style={styles.inputLabel}>{isPago ? 'Valor Pago' : 'Valor a Pagar'}</Text>
                  <TextInput
                    style={[styles.textInput, isPago && styles.textInputPago]}
                    keyboardType="numeric"
                    placeholder="0,00"
                    value={valores[metodoId] || ''}
                    onChangeText={(text) => atualizarValor(metodoId, text)}
                    editable={!isPago} 
                    onFocus={() => {
                      setTimeout(() => { scrollViewRef.current?.scrollToEnd({ animated: true }); }, 250);
                    }}
                  />
                </View>
              );
            })}
          </View>
        )}
      </ScrollView>

      <View style={styles.bottomBar}>
        <View style={styles.bottomLeft}>
          <Text style={styles.itemCount}>Resumo</Text>
          <Text style={styles.totalBottom}>R$ {VALOR_TOTAL_PEDIDO.toFixed(2)}</Text>
        </View>
        
        <TouchableOpacity 
          style={[styles.btnFinalizar, distribuicaoCorreta && styles.btnFinalizarAtivo]}
          disabled={!distribuicaoCorreta || carregando}
          onPress={acaoBotao} 
        >
          {carregando ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={styles.btnText}>{textoBotao}</Text>
          )}
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  mainWrapper: { flex: 1, backgroundColor: '#F9FAFB' },
  header: { backgroundColor: '#3949AB', padding: 20, paddingTop: 50, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  headerRow: { flexDirection: 'row', alignItems: 'center' },
  menuIcon: { marginRight: 15, padding: 5 },
  headerTitle: { color: '#fff', fontSize: 20, fontWeight: 'bold' },
  headerStep: { color: '#E8EAF6', fontSize: 14 },
  scrollContainer: { flex: 1 },
  scrollContent: { padding: 20, paddingBottom: 60 },
  totalCard: { backgroundColor: '#3949AB', borderRadius: 10, padding: 25, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 },
  totalLabel: { color: '#fff', fontSize: 16 },
  totalValue: { color: '#fff', fontSize: 28, fontWeight: 'bold' },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', color: '#000', marginBottom: 15, marginTop: 10 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  metodoCard: { width: '48%', backgroundColor: '#fff', borderRadius: 10, padding: 20, marginBottom: 15, alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: '#E0E0E0', height: 100 },
  metodoCardSelected: { backgroundColor: '#F1F8E9', borderColor: '#81C784' },
  metodoCardPago: { backgroundColor: '#E8F5E9', borderColor: '#4CAF50', opacity: 0.8 }, 
  metodoIcon: { fontSize: 24, marginBottom: 10 },
  metodoText: { fontSize: 16, fontWeight: '600', color: '#333' },
  metodoTextSelected: { color: '#4CAF50' },
  valoresContainer: { marginTop: 10 },
  inputCard: { backgroundColor: '#fff', borderRadius: 10, padding: 15, marginBottom: 15, borderWidth: 1, borderColor: '#F5F5F5' },
  inputCardPago: { backgroundColor: '#FAFAFA', borderColor: '#C8E6C9' }, 
  inputHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 15 },
  inputIcon: { fontSize: 18, marginRight: 8 },
  inputTitle: { fontSize: 18, fontWeight: 'bold', color: '#000' },
  closeBtn: { backgroundColor: '#E53935', borderRadius: 15, width: 26, height: 26, alignItems: 'center', justifyContent: 'center' },
  closeText: { color: '#fff', fontWeight: 'bold', fontSize: 12 },
  inputLabel: { fontSize: 14, color: '#000', fontWeight: 'bold', marginBottom: 5 },
  textInput: { borderWidth: 1, borderColor: '#E0E0E0', borderRadius: 8, padding: 15, fontSize: 18, color: '#333' },
  textInputPago: { backgroundColor: '#F5F5F5', color: '#888', borderColor: '#C8E6C9' }, 
  bottomBar: { backgroundColor: '#F5F5F5', padding: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderTopWidth: 1, borderColor: '#E0E0E0' },
  bottomLeft: { flexDirection: 'column' },
  itemCount: { fontSize: 14, color: '#555' },
  totalBottom: { fontSize: 22, fontWeight: 'bold', color: '#4CAF50' },
  btnFinalizar: { backgroundColor: '#CFD8DC', borderRadius: 8, paddingVertical: 15, paddingHorizontal: 20, justifyContent: 'center', alignItems: 'center', minWidth: 180 },
  btnFinalizarAtivo: { backgroundColor: '#4CAF50' },
  btnText: { color: '#fff', fontSize: 16, fontWeight: 'bold' }
});