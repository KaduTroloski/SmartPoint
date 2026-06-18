import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CarrinhoScreen from '../screens/CarrinhoScreen';
import AdicionarCarrinhoScreen from '../screens/AdicionarCarrinhoScreen';

const Stack = createNativeStackNavigator();

export default function CarrinhoStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="CarrinhoHome"
        component={CarrinhoScreen}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="AdicionarCarrinho"
        component={AdicionarCarrinhoScreen}
        options={{
          animation: 'none',
          title: 'Adicionar ao carrinho',
          headerStyle: {
            backgroundColor: '#3C40B8',
          },
          headerTintColor: '#FFF',
        }}
      />
    </Stack.Navigator>
  );
}