import React, { useState } from 'react';
import {
    StyleSheet,
    KeyboardAvoidingView,
    Platform,
    Image,
    View,
} from 'react-native';

import {
    TextInput,
    Button,
    Text,
    useTheme,
    Surface,
    TouchableRipple,
} from 'react-native-paper';

export default function LoginScreen() {
    const theme = useTheme();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        console.log({
            email,
            password,
        });
    };

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
                {/* Logo */}
                <View style={styles.logoContainer}>
                    <Image
                        source={require('../assets/img/logo.png')}
                        style={styles.logo}
                        resizeMode="contain"
                    />
                </View>

                {/* Título */}
                <Text
                    variant="headlineLarge"
                    style={[
                        styles.title,
                        { color: theme.colors.primary },
                    ]}
                >
                    Smart Point
                </Text>

                <Text
                    variant="bodyLarge"
                    style={styles.subtitle}
                >
                    Sistema de Ponto de Vendas
                </Text>

                {/* Formulário */}
                <View style={styles.form}>
                    <Text
                        variant="labelLarge"
                        style={styles.label}
                    >
                        E-mail
                    </Text>

                    <TextInput
                        mode="outlined"
                        placeholder="seu@email.com"
                        value={email}
                        onChangeText={setEmail}
                        style={styles.input}
                        left={<TextInput.Icon icon="email-outline" />}
                    />

                    <Text
                        variant="labelLarge"
                        style={styles.label}
                    >
                        Senha
                    </Text>

                    <TextInput
                        mode="outlined"
                        placeholder="••••••••"
                        secureTextEntry
                        value={password}
                        onChangeText={setPassword}
                        style={styles.input}
                        left={<TextInput.Icon icon="lock-outline" />}
                    />

                    <Button
                        mode="contained"
                        onPress={handleLogin}
                        style={styles.button}
                        contentStyle={styles.buttonContent}
                    >
                        Entrar
                    </Button>

                    <TouchableRipple
                        onPress={() => {}}
                        borderless
                        style={styles.registerContainer}
                    >
                        <Text style={styles.register}>
                            Ainda não tem uma conta? Registre-se!
                        </Text>
                    </TouchableRipple>
                </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 24,
        backgroundColor: '#F3F4F6',
    },

    card: {
        borderRadius: 24,
        padding: 28,
        backgroundColor: '#FFFFFF',
    },

    logoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 16,
    },

    logo: {
        width: 90,
        height: 90,
    },

    title: {
        textAlign: 'center',
        fontWeight: 'bold',
    },

    subtitle: {
        textAlign: 'center',
        color: '#666',
        marginTop: 8,
        marginBottom: 36,
    },

    form: {
        width: '100%',
    },

    label: {
        marginBottom: 8,
        marginTop: 10,
    },

    input: {
        marginBottom: 12,
        backgroundColor: '#FFF',
    },

    button: {
        marginTop: 24,
        borderRadius: 12,
    },

    buttonContent: {
        height: 54,
    },

    registerContainer: {
        marginTop: 24,
        borderRadius: 8,
    },

    register: {
        textAlign: 'center',
        color: '#3F43C6',
        fontWeight: 'bold',
        paddingVertical: 8,
    },
});