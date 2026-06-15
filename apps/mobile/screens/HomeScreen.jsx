import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

/* tela de teste, já que está será feita por outro integrante ou em outro momento */

export default function Home({ navigation }) {
    return (
        <View>
            <Text>Home</Text>
            <TouchableOpacity
                style={styles.botao}
                onPress={() => navigation.navigate('Controle de Produtos')}
            >
                <Text style={styles.textoBotao}>Controle de Produtos</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.botao}
                onPress={() => navigation.navigate('Controle de Clientes')}
            >
                <Text style={styles.textoBotao}>Controle de Clientes</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    botao: {
        backgroundColor: '#007AFF',
        padding: 15,
        borderRadius: 10
    },
    textoBotao: {
        color: '#fff',
        fontSize: 16
    }
});