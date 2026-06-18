import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';

export default function CarrinhoScreen({ navigation }) {
  const [itens, setItens] = useState([]);

  const total = itens.reduce(
    (acc, item) =>
      acc + item.preco * item.quantidade,
    0
  );

  function adicionarQuantidade(id) {
    setItens((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              quantidade: item.quantidade + 1,
            }
          : item
      )
    );
  }

  function removerQuantidade(id) {
    setItens((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantidade: item.quantidade - 1,
              }
            : item
        )
        .filter((item) => item.quantidade > 0)
    );
  }

  function removerItem(id) {
    setItens((prev) =>
      prev.filter((item) => item.id !== id)
    );
  }

  return (
    <View style={styles.container}>
      {itens.length === 0 ? (
        <View style={styles.empty}>
          <Text style={styles.cart}>
            🛒
          </Text>

          <Text style={styles.title}>
            Carrinho vazio
          </Text>

          <Text style={styles.subtitle}>
            Adicione produtos para começar
          </Text>
        </View>
      ) : (
        <FlatList
          contentContainerStyle={{
            padding: 15,
          }}
          data={itens}
          keyExtractor={(item, index) =>
            `${item.id}-${index}`
          }
          renderItem={({ item }) => (
            <View style={styles.card}>
              <View>
                <Text style={styles.nome}>
                  {item.nome}
                </Text>

                <Text style={styles.preco}>
                  R$ {item.preco.toFixed(2)}
                </Text>
              </View>

              <View style={styles.actions}>
                <TouchableOpacity
                  style={styles.circleButton}
                  onPress={() =>
                    removerQuantidade(item.id)
                  }
                >
                  <Text style={styles.circleText}>
                    -
                  </Text>
                </TouchableOpacity>

                <Text style={styles.quantidade}>
                  {item.quantidade}
                </Text>

                <TouchableOpacity
                  style={styles.circleButton}
                  onPress={() =>
                    adicionarQuantidade(item.id)
                  }
                >
                  <Text style={styles.circleText}>
                    +
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.deleteButton}
                  onPress={() =>
                    removerItem(item.id)
                  }
                >
                  <Text style={styles.circleText}>
                    🗑
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      )}

      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() =>
            navigation.navigate(
              'AdicionarCarrinho',
              {
                adicionarProduto: (produto) => {
                  setItens((prev) => {
                    const existente =
                      prev.find(
                        (item) =>
                          item.id === produto.id
                      );

                    if (existente) {
                      return prev.map((item) =>
                        item.id === produto.id
                          ? {
                              ...item,
                              quantidade:
                                item.quantidade + 1,
                            }
                          : item
                      );
                    }

                    return [
                      ...prev,
                      {
                        ...produto,
                        quantidade: 1,
                      },
                    ];
                  });
                },
              }
            )
          }
        >
          <Text style={styles.addButtonText}>
            + Adicionar ao carrinho
          </Text>
        </TouchableOpacity>

        <View style={styles.summary}>
          <View>
            <Text>
              {itens.reduce(
                (acc, item) =>
                  acc + item.quantidade,
                0
              )}{' '}
              itens
            </Text>

            <Text style={styles.total}>
              R$ {total.toFixed(2)}
            </Text>
          </View>

          <TouchableOpacity
            disabled={itens.length === 0}
            style={[
              styles.nextButton,
              {
                backgroundColor:
                  itens.length > 0
                    ? '#3C40B8'
                    : '#D0D0D0',
              },
            ]}
          >
            <Text style={styles.nextText}>
              Cliente →
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },

  empty: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  cart: {
    fontSize: 70,
  },

  title: {
    fontSize: 28,
    color: '#4D5D78',
    marginTop: 15,
  },

  subtitle: {
    color: '#9EA5B8',
    marginTop: 8,
    fontSize: 18,
  },

  card: {
    backgroundColor: '#EEE',
    borderRadius: 10,
    padding: 15,
    marginBottom: 12,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  nome: {
    fontSize: 22,
    fontWeight: 'bold',
  },

  preco: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#00C92C',
    marginTop: 8,
  },

  actions: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  circleButton: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: '#3C40B8',

    justifyContent: 'center',
    alignItems: 'center',
  },

  circleText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },

  quantidade: {
    marginHorizontal: 15,
    fontSize: 22,
    fontWeight: 'bold',
  },

  deleteButton: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: '#FF3B3B',

    justifyContent: 'center',
    alignItems: 'center',

    marginLeft: 10,
  },

  footer: {
    padding: 15,
    backgroundColor: '#FFF',
  },

  addButton: {
    backgroundColor: '#3C40B8',
    padding: 18,
    borderRadius: 10,
    alignItems: 'center',
  },

  addButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 18,
  },

  summary: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  total: {
    color: '#00C92C',
    fontSize: 28,
    fontWeight: 'bold',
  },

  nextButton: {
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 10,
  },

  nextText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 18,
  },
});