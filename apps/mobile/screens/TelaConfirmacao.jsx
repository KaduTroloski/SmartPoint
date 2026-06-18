import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, StatusBar, Platform } from 'react-native';
import { 
  Provider as PaperProvider, 
  Appbar, 
  Text, 
  Card, 
  Avatar, 
  Button, 
  Divider,
  List
} from 'react-native-paper';

export default function TelaConfirmacao() {
  // Simulação de dados para a validação que o Kadu pediu
  const [vendaRealizada, setVendaRealizada] = useState(true);

  // Função para simular o botão "Nova Venda"
  const handleNovaVenda = () => {
    alert("Iniciando nova venda...");
  };

  return (
    <PaperProvider>
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#3b4cca" />
        
        {/* Header - Barra Superior */}
        <Appbar.Header style={styles.header}>
          <Appbar.Action icon="menu" color="white" />
          <Appbar.Content title="Finalização" titleStyle={styles.headerTitle} />
          <Text style={styles.etapaText}>Etapa 4 de 4</Text>
        </Appbar.Header>

        <ScrollView contentContainerStyle={styles.scrollContent}>
          
          {/* Status da Venda - Check Verde */}
          <View style={styles.statusContainer}>
            <Avatar.Icon 
              size={80} 
              icon="check-bold" 
              style={styles.checkIcon} 
              color="white" 
            />
            <Text style={styles.vendaConcluida}>Venda Concluída!</Text>
            <Text style={styles.vendaSubtext}>A transação foi finalizada com sucesso</Text>
          </View>

          {/* Card Cliente */}
          <Card style={styles.card}>
            <Card.Content>
              <List.Item
                title="Cliente"
                description="João Silva\n(11) 98765-4321"
                left={props => <List.Icon {...props} icon="account-outline" color="#3b4cca" />}
                titleStyle={styles.cardTitle}
                descriptionNumberOfLines={2}
              />
            </Card.Content>
          </Card>

          {/* Card Produtos */}
          <Card style={styles.card}>
            <Card.Content>
              <View style={styles.row}>
                <List.Icon icon="archive-outline" color="#3b4cca" />
                <Text style={styles.cardTitle}>Produtos</Text>
              </View>
              <View style={styles.productRow}>
                <View>
                  <Text style={styles.productName}>Spaghetti</Text>
                  <Text style={styles.productQty}>Qtd: 1</Text>
                </View>
                <Text style={styles.productPrice}>R$ 20,00</Text>
              </View>
              <Divider style={styles.divider} />
              <View style={styles.productRow}>
                <Text style={[styles.productName, {fontSize: 20}]}>Total:</Text>
                <Text style={styles.totalPrice}>R$ 20,00</Text>
              </View>
            </Card.Content>
          </Card>

          {/* Card Pagamento */}
          <Card style={styles.card}>
            <Card.Content>
              <View style={styles.row}>
                <List.Icon icon="credit-card-outline" color="#3b4cca" />
                <Text style={styles.cardTitle}>Pagamento</Text>
              </View>
              <View style={styles.productRow}>
                <Text style={styles.productName}>PIX</Text>
                <Text style={styles.productPrice}>R$ 20,00</Text>
              </View>
            </Card.Content>
          </Card>

        </ScrollView>

        {/* Footer - Barra Inferior com Botão */}
        <View style={styles.footer}>
          <View>
            <Text style={styles.footerItemCount}>1 item</Text>
            <Text style={styles.footerTotal}>R$ 20,00</Text>
          </View>
          <Button 
            mode="contained" 
            onPress={handleNovaVenda} 
            style={styles.btnNovaVenda}
            icon="home-outline"
            contentStyle={styles.btnContent}
          >
            Nova Venda
          </Button>
        </View>
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  header: {
    backgroundColor: '#3b4cca',
  },
  headerTitle: {
    color: 'white',
    fontWeight: 'bold',
  },
  etapaText: {
    color: 'white',
    marginRight: 16,
    opacity: 0.8,
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 100,
  },
  statusContainer: {
    alignItems: 'center',
    marginVertical: 24,
  },
  checkIcon: {
    backgroundColor: '#22c55e',
    marginBottom: 12,
  },
  vendaConcluida: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1e293b',
  },
  vendaSubtext: {
    color: '#64748b',
    fontSize: 14,
  },
  card: {
    backgroundColor: 'white',
    marginBottom: 16,
    borderRadius: 8,
    elevation: 2,
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#1e293b',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  productRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 4,
  },
  productName: {
    fontSize: 16,
    color: '#1e293b',
    fontWeight: '500',
  },
  productQty: {
    color: '#64748b',
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1e293b',
  },
  divider: {
    marginVertical: 12,
  },
  totalPrice: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#22c55e',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#e2e8f0',
    elevation: 10,
  },
  footerItemCount: {
    color: '#64748b',
    fontSize: 12,
  },
  footerTotal: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#22c55e',
  },
  btnNovaVenda: {
    backgroundColor: '#22c55e',
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  btnContent: {
    height: 45,
  }
});