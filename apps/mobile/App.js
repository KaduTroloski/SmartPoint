import 'react-native-gesture-handler';

import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet, 
  Button,
  Image,
} from 'react-native';

import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import CarrinhoStack from './src/navigation/CarrinhoStack';

const Drawer = createDrawerNavigator();

function ClienteScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>Cliente</Text>
    </View>
  );
}

function PagamentoScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>Pagamento</Text>
    </View>
  );
}

function FinalizacaoScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>Finalização</Text>
    </View>
  );
}

function CustomDrawer({ navigation }) {
  const etapaAtual = 0;

  const etapas = [
    'Carrinho',
    'Cliente',
    'Pagamento',
    'Finalização',
  ];

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.closeButton}
        onPress={() => navigation.closeDrawer()}
      >
        <Text style={styles.closeText}>✕</Text>
      </TouchableOpacity>

      <View style={styles.logoArea}>
        <Image
          source={require('./assets/images/logo-smartpoint.png')}
          style={{
            width: 75,
            height: 75,
            marginRight: 12,
            resizeMode: 'contain',
          }}
        />

        <View>
          <Text style={styles.title}>Smart Point</Text>
          <Text style={styles.subtitle}>PDV Mobile</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>
        FLUXO DE VENDA
      </Text>

      {etapas.map((etapa, index) => {
        const ativa = index === etapaAtual;
        const liberada = index <= etapaAtual;

        return (
          <TouchableOpacity
            key={etapa}
            disabled={!liberada}
            style={[
              styles.item,
              ativa && styles.itemActive,
            ]}
          >
            <View
              style={[
                styles.circle,
                ativa && styles.circleActive,
              ]}
            >
              <Text style={styles.circleText}>
                {index + 1}
              </Text>
            </View>

            <Text
              style={[
                styles.itemText,
                !liberada && styles.itemDisabled,
              ]}
            >
              {etapa}
            </Text>
          </TouchableOpacity>
        );
      })}

      <View style={styles.separator} />

      <TouchableOpacity style={styles.cadastro}>
        <Text style={styles.plus}>＋</Text>
        <Text style={styles.cadastroText}>
          Cadastros
        </Text>
      </TouchableOpacity>

      <View style={{ flex: 1 }} />

      <TouchableOpacity style={styles.logout}>
        <Text style={styles.logoutIcon}>↪</Text>
        <Text style={styles.logoutText}>
          Logout
        </Text>
      </TouchableOpacity>
    </View>
  );
}


export default function App() {
  const [etapaAtual, setEtapaAtual] = useState(0);

  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => (
          <CustomDrawer {...props} />
        )}
        screenOptions={{
          headerShown: true,
          headerStyle: {
            backgroundColor: '#3C40B8',
          },
          headerTintColor: '#FFF',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          drawerStyle: {
            width: 300,
          },
        }}
      >
       <Drawer.Screen
        name="Carrinho"
        component={CarrinhoStack}
        options={({ route }) => {
          const routeName =
            getFocusedRouteNameFromRoute(route) ?? 'CarrinhoHome';

          return {
            headerShown: routeName !== 'AdicionarCarrinho',
          };
        }}
      />

        <Drawer.Screen
          name="Cliente"
          component={ClienteScreen}
          options={{
            headerStyle: {
              backgroundColor: '#3C40B8',
            },
            headerTintColor: '#FFF',
            headerRight: () => (
              <Text
                style={{
                  color: '#FFF',
                  marginRight: 15,
                }}
              >
                Etapa 2 de 4
              </Text>
            ),
          }}
        />

        <Drawer.Screen
          name="Pagamento"
          component={PagamentoScreen}
          options={{
            headerStyle: {
              backgroundColor: '#3C40B8',
            },
            headerTintColor: '#FFF',
            headerRight: () => (
              <Text
                style={{
                  color: '#FFF',
                  marginRight: 15,
                }}
              >
                Etapa 3 de 4
              </Text>
            ),
          }}
        />

        <Drawer.Screen
          name="Finalização"
          component={FinalizacaoScreen}
          options={{
            headerStyle: {
              backgroundColor: '#3C40B8',
            },
            headerTintColor: '#FFF',
            headerRight: () => (
              <Text
                style={{
                  color: '#FFF',
                  marginRight: 15,
                }}
              >
                Etapa 4 de 4
              </Text>
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3C40B8',
    paddingTop: 20,
    paddingHorizontal: 22,
  },

  closeButton: {
    width: 55,
    height: 55,
    borderWidth: 2,
    borderColor: '#FFF',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },

  closeText: {
    color: '#FFF',
    fontSize: 24,
  },

  logoArea: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 35,
  },

  logo: {
    fontSize: 42,
    marginRight: 12,
  },

  title: {
    color: '#FFF',
    fontSize: 22,
    fontWeight: 'bold',
  },

  subtitle: {
    color: '#FFF',
    fontSize: 16,
  },

  sectionTitle: {
    color: '#AEB3E5',
    fontSize: 15,
    marginBottom: 20,
  },

  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 14,
    borderRadius: 10,
    marginBottom: 18,
  },

  itemActive: {
    backgroundColor: '#00C92C',
  },

  circle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#5056CC',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },

  circleActive: {
    backgroundColor: '#45D95A',
  },

  circleText: {
    color: '#FFF',
    fontWeight: 'bold',
  },

  itemText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },

  itemDisabled: {
    color: '#6F73C9',
  },

  separator: {
    height: 1,
    backgroundColor: '#6F73C9',
    marginVertical: 20,
  },

  cadastro: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  plus: {
    color: '#FFF',
    fontSize: 30,
    marginRight: 15,
  },

  cadastroText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },

  logout: {
    backgroundColor: '#00C92C',
    borderRadius: 10,
    padding: 18,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
  },

  logoutIcon: {
    color: '#FFF',
    fontSize: 24,
    marginRight: 15,
  },

  logoutText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});