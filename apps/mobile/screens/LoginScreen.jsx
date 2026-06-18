import React, { useState, useEffect } from 'react';

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
    Snackbar
} from 'react-native-paper';

import FormLabel from '../components/FormLabel';
import FormInput from '../components/FormInput';
import SubmitButton from '../components/SubmitButton';
import PasswordInput from '../components/PasswordInput'

import { COLORS } from '../constants/colors';

import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from '../validations/loginSchema';

import { mockedUsers } from '../mocks/users'; // Importando mockados (temporário)
import { useAuth } from '../context/AuthContext';

import * as Crypto from 'expo-crypto';

export default function LoginScreen({ navigation }) {
    const [visible, setVisible] = useState(false);  // Controla a visibilidade do Snackbar
    const { users } = useAuth();

    // Gerar o hash de forma assíncrona e segura
    const hashPassword = async (password) => {
        return await Crypto.digestStringAsync(
            Crypto.CryptoDigestAlgorithm.SHA256,
            password
        );
    };

    const handleLogin = async (data) => {

        const user = mockedUsers.find(
            (user) =>
                user.email === data.email
        );

        if (!user) {
            setVisible(true);
            return;
        }

        //Criptografa a senha digitada para comparar com o hash salvo
        const hashedPasswordInput = await hashPassword(data.password);

        // No mock, as senhas devem estar salvas em formato SHA-256
        if (user.password !== hashedPasswordInput) {
            setVisible(true);
            return;
        }

        navigation.navigate('Home');
    };

    const {
        control,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm({
        resolver: zodResolver(loginSchema),

        defaultValues: {
            email: '',
            password: '',
        },
    });

    // Para gerar o hash de teste no console e copiar para o mock (temporário)
    /*   useEffect(() => {
        async function generateHash() {
          try {
            const hash = await hashPassword('Admin@123');
            console.log('Use este hash no seu arquivo de mocks:', hash);
          } catch (error) {
            console.error('Erro ao gerar hash:', error);
          }
        }
        generateHash();
      }, []); */

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


                        <Controller
                            control={control}
                            name="email"
                            render={({ field: { onChange, value } }) => (
                                <FormInput
                                    label="E-mail"
                                    icon="email-outline"
                                    mode="outlined"
                                    keyboardType="email-address"
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    value={value}
                                    onChangeText={onChange}
                                    error={!!errors.email}
                                    errorMessage={errors.email?.message}
                                />
                            )}
                        />

                        <FormLabel>Senha</FormLabel>


                        <Controller
                            control={control}
                            name="password"
                            render={({ field: { onChange, value } }) => (
                                <PasswordInput
                                    label="Senha"
                                    autoCapitalize="none"
                                    value={value}
                                    onChangeText={onChange}
                                    error={!!errors.password}
                                    errorMessage={errors.password?.message}
                                />
                            )}
                        />

                        <SubmitButton onPress={handleSubmit(handleLogin)}>
                            Entrar
                        </SubmitButton>
                    </Surface>
                </View>
            </ScrollView>
            <Snackbar
                visible={visible}
                onDismiss={() => setVisible(false)}
                duration={3000}
            >
                Credenciais inválidas
            </Snackbar>
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
});