import React from 'react';
import {
  FlatList,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const produtos = [
  {
    id: 1,
    nome: 'Spaghetti',
    preco: 20,
    estoque: 20,
  },
  {
    id: 2,
    nome: 'Molho de Codorna',
    preco: 40,
    estoque: 8,
  },
  {
    id: 3,
    nome: 'Bauru Pres/Qjo',
    preco: 60,
    estoque: 4,
  },
  {
    id: 4,
    nome: 'Pizza Calabresa',
    preco: 55,
    estoque: 12,
  },
];

export default function AdicionarCarrinhoScreen({
  navigation,
  route,
}) {
  const { adicionarProduto } = route.params;

  return (
    <FlatList
      style={{ padding: 15 }}
      data={produtos}
      keyExtractor={(item) =>
        item.id.toString()
      }
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.card}
          onPress={() => {
            adicionarProduto(item);
            navigation.goBack();
          }}
        >
          <Text>
            Cód: {item.id}
          </Text>

          <Text style={styles.nome}>
            {item.nome}
          </Text>

          <Text style={styles.preco}>
            R$ {item.preco.toFixed(2)}
          </Text>

          <Text>
            Estoque: {item.estoque}
          </Text>
        </TouchableOpacity>
      )}
    />
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  nome: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  preco: {
    color: '#00C92C',
    fontSize: 24,
    fontWeight: 'bold',
  },
});