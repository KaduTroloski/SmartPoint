import React from 'react';
import { 
  StyleSheet, 
  View, 
  StatusBar,
  Platform // Adicionado para corrigir o erro no styles do brandTitle
} from 'react-native';
// Importação dos componentes do React Native Paper
import { Provider as PaperProvider, Text, ActivityIndicator } from 'react-native-paper';

export default function TelaCarregamento() {
  return (
    <PaperProvider>
      <View style={styles.container}>
        {/* Deixa a barra de status do celular combinando com o fundo azul */}
        <StatusBar barStyle="light-content" backgroundColor="#3b4cca" />
        
        <View style={styles.contentContainer}>
          {/* Ícone Redondo do Smart Point */}
          <View style={styles.iconCircle}>
            {/* Simulação do ícone de notas/moedas do design */}
            <Text style={styles.iconDollar}>$</Text>
          </View>
          
          {/* Textos Principais usando o Text do Paper */}
          <Text style={styles.brandTitle}>Smart Point</Text>
          <Text style={styles.brandSubtitle}>Sistema de Ponto de Vendas</Text>
        </View>

        {/* Indicador de Carregamento usando o ActivityIndicator do Paper */}
        <View style={styles.loaderContainer}>
          <ActivityIndicator animating={true} size="small" color="#FFFFFF" />
          <Text style={styles.loadingText}>Iniciando aplicativo...</Text>
        </View>
      </View>
    </PaperProvider>
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