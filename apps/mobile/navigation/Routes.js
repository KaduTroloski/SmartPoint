import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import DebugScreen from '../screens/DebugScreen';
import ProductListScreen from '../screens/ProductListScreen';

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
{/*         <Stack.Screen
          name="Debug"
          component={DebugScreen}
        /> */}
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Controle de Produtos" component={ProductListScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator();