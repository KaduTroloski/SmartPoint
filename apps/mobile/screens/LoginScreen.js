import React, { useState } from 'react';

import {
    StyleSheet,
    KeyboardAvoidingView,
    Platform,
    Image,
    ScrollView,
    View,
} from 'react-native';

import {
    TextInput,
    Button,
    Text,
    Surface,
    TouchableRipple,
} from 'react-native-paper';

import FormLabel from '../components/FormLabel';
import FormInput from '../components/FormInput';
import SubmitButton from '../components/SubmitButton';

import { COLORS } from '../constants/colors';

export default function LoginScreen() {
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
            style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <ScrollView
                contentContainerStyle={{ flexGrow: 1 }}
                keyboardShouldPersistTaps="handled"
            >
                <View style={styles.container}>
                    <Image
                        source={require('../assets/img/logo.png')}
                        style={styles.logo}
                    />

                    <Text
                        variant="headlineLarge"
                        style={[
                            styles.title,
                            { color: COLORS.primary },
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

                    <Surface style={styles.form}>
                        <FormLabel>E-mail</FormLabel>


                        <FormInput
                            placeholder="seu@email.com"
                            value={email}
                            onChangeText={setEmail}
                            icon="email-outline"
                        />

                        <FormLabel>Senha</FormLabel>


                        <FormInput
                            placeholder="••••••••"
                            secureTextEntry
                            value={password}
                            onChangeText={setPassword}
                            icon="lock-outline"
                        />

                        <SubmitButton onPress={handleLogin}>
                            Entrar
                        </SubmitButton>

                        <TouchableRipple
                            onPress={() => { }}
                            borderless
                            style={styles.registerContainer}
                        >
                            <Text style={styles.register}>
                                Ainda não tem uma conta? Registre-se!
                            </Text>
                        </TouchableRipple>
                    </Surface>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24,
        backgroundColor: COLORS.background,
    },

    logo: {
        width: 90,
        height: 90,
        marginBottom: 16,
    },

    title: {
        textAlign: 'center',
        fontWeight: 'bold',
    },

    subtitle: {
        textAlign: 'center',
        color: COLORS.textSecondary,
        marginTop: 8,
        marginBottom: 36,
    },

    form: {
        width: '100%',
        paddingVertical: 16,
        paddingHorizontal: 14,
        borderRadius: 20,
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
        color: COLORS.primary,
        fontWeight: 'bold',
        paddingVertical: 8,
    },
});