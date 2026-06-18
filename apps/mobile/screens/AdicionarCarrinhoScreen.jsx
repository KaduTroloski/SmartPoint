import React, { useState, useEffect } from 'react';
import {
  FlatList,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  Alert
} from 'react-native';

import api from '../services/api'; 

export default function AdicionarCarrinhoScreen({ navigation, route }) {
  const { adicionarProduto } = route.params;

  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    buscarProdutos();
  }, []);

  const buscarProdutos = async () => {
    try {
      const response = await api.get('/produtos'); 
      
      // Prevenção extra: caso o seu back-end mande um objeto { produtos: [...] } em vez da array direto
      const listaDeProdutos = response.data.products || response.data.produtos || response.data;
      setProdutos(listaDeProdutos);

    } catch (error) {
      console.error("Erro ao carregar os produtos:", error);
      Alert.alert('Erro', 'Não foi possível carregar a lista de produtos.');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#3949AB" />
        <Text style={{ marginTop: 10, color: '#555' }}>Buscando produtos...</Text>
      </View>
    );
  }

  return (
    <FlatList
      style={{ padding: 15 }}
      data={produtos}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.card}
          onPress={() => {
            adicionarProduto(item);
            navigation.goBack();
          }}
        >
          {/* Lendo do banco novo: barcode */}
          <Text style={styles.barcode}>
            Cód. Barras: {item.barcode ? item.barcode : 'Sem código'}
          </Text>

          {/* Lendo do banco novo: name */}
          <Text style={styles.nome}>
            {item.name}
          </Text>

          {/* Lendo do banco novo: description */}
          {item.description ? (
            <Text style={styles.descricao} numberOfLines={2}>
              {item.description}
            </Text>
          ) : null}

          {/* Lendo do banco novo: price */}
          <Text style={styles.preco}>
            R$ {Number(item.price).toFixed(2)} 
          </Text>
        </TouchableOpacity>
      )}
    />
  );
}

const styles = StyleSheet.create({
  center: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F9FAFB' },
  card: { backgroundColor: '#FFF', padding: 15, borderRadius: 10, marginBottom: 15, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 5, elevation: 3 },
  barcode: { fontSize: 12, color: '#888', marginBottom: 4, textTransform: 'uppercase' },
  nome: { fontSize: 20, fontWeight: 'bold', color: '#333' },
  descricao: { fontSize: 14, color: '#666', marginTop: 4 },
  preco: { color: '#00C92C', fontSize: 24, fontWeight: 'bold', marginTop: 8 },
});