import React from 'react';
import { 
  StyleSheet, 
  View, 
  Text, 
  ActivityIndicator, 
  StatusBar 
} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Deixa a barra de status do celular combinando com o fundo azul */}
      <StatusBar barStyle="light-content" backgroundColor="#3b4cca" />
      
      <View style={styles.contentContainer}>
        {/* Ícone Redondo do Smart Point */}
        <View style={styles.iconCircle}>
          {/* Simulação do ícone de notas/moedas do design */}
          <Text style={styles.iconDollar}>$</Text>
        </View>
        
        {/* Textos Principais baseados no slide */}
        <Text style={styles.brandTitle}>Smart Point</Text>
        <Text style={styles.brandSubtitle}>Sistema de Ponto de Vendas</Text>
      </View>

      {/* Indicador de Carregamento */}
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="small" color="#FFFFFF" />
        <Text style={styles.loadingText}>Iniciando aplicativo...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3b4cca', // Azul escuro idêntico ao padrão do protótipo
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  iconCircle: {
    width: 110,
    height: 110,
    borderRadius: 55,
    backgroundColor: '#FFFFFF', // Círculo branco do ícone
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  iconDollar: {
    fontSize: 46,
    fontWeight: 'bold',
    color: '#3b4cca', // Símbolo interno com a cor do fundo
  },
  brandTitle: {
    fontSize: 38,
    fontWeight: 'bold',
    color: '#FFFFFF', // Texto Smart Point em branco
    fontFamily: Platform.OS === 'ios' ? 'Helvetica Neue' : 'sans-serif-medium',
  },
  brandSubtitle: {
    fontSize: 15,
    color: '#cbd5e1', // Texto auxiliar mais claro
    marginTop: 6,
    fontWeight: '500',
  },
  loaderContainer: {
    position: 'absolute',
    bottom: 50,
    alignItems: 'center',
  },
  loadingText: {
    color: '#FFFFFF',
    fontSize: 13,
    marginTop: 8,
    opacity: 0.8,
  },
});
