import React from 'react';

import {
    StyleSheet,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    View,
} from 'react-native';

import {
    Surface,
    Text,
    Button,
    HelperText,
    TextInput,
} from 'react-native-paper';

import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { useAuth } from '../context/AuthContext';

import bcrypt from 'bcryptjs';

const registerSchema = z
    .object({
        name: z
            .string()
            .trim()
            .min(3, 'O nome deve ter pelo menos 3 caracteres')
            .max(80, 'O nome deve ter no máximo 80 caracteres'),

        email: z
            .string()
            .trim()
            .toLowerCase()
            .email('Digite um e-mail válido'),

        password: z
            .string()
            .min(8, 'A senha deve ter no mínimo 8 caracteres')
            .regex(/[A-Z]/, 'A senha deve conter uma letra maiúscula')
            .regex(/[a-z]/, 'A senha deve conter uma letra minúscula')
            .regex(/[0-9]/, 'A senha deve conter um número')
            .regex(
                /[^A-Za-z0-9]/,
                'A senha deve conter um caractere especial'
            ),

        confirmPassword: z.string(),

        role: z.enum(
            ['ADMIN', 'MANAGER', 'EMPLOYEE', 'CASHIER'],
            {
                errorMap: () => ({
                    message: 'Selecione um cargo válido',
                }),
            }
        ),
    })
    .refine(
        (data) => data.password === data.confirmPassword,
        {
            message: 'As senhas não coincidem',
            path: ['confirmPassword'],
        }
    );



export default function RegisterScreen() {
    const { registerUser } = useAuth();

    const {
        control,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
            role: 'EMPLOYEE',
        },
    });

    const handleRegister = async (data) => {

        const hashedPassword =
            await bcrypt.hash(data.password, 10);

        const newUser = {
            name: data.name,
            email: data.email,
            password: hashedPassword,
            role: data.role,
        };

        registerUser(newUser);

        navigation.navigate('Login');
    };

    const onSubmit = async (data) => {
        console.log(data);
        console.log(data.name, ", cadastrado com sucesso")
        navigation.navigate('Debug')
        /*
            enviar para backend
            backend gera hash
        */
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
                    <Surface
                        style={styles.card}
                        elevation={2}
                    >
                        <Text
                            variant="headlineMedium"
                            style={styles.title}
                        >
                            Criar Conta
                        </Text>

                        {/* NAME */}
                        <Controller
                            control={control}
                            name="name"
                            render={({
                                field: {
                                    onChange,
                                    value,
                                },
                            }) => (
                                <>
                                    <TextInput
                                        label="Nome"
                                        mode="outlined"
                                        value={value}
                                        onChangeText={onChange}
                                        autoCapitalize="words"
                                        left={
                                            <TextInput.Icon icon="account-outline" />
                                        }
                                    />

                                    <HelperText
                                        type="error"
                                        visible={!!errors.name}
                                    >
                                        {errors.name?.message}
                                    </HelperText>
                                </>
                            )}
                        />

                        {/* EMAIL */}
                        <Controller
                            control={control}
                            name="email"
                            render={({
                                field: {
                                    onChange,
                                    value,
                                },
                            }) => (
                                <>
                                    <TextInput
                                        label="E-mail"
                                        mode="outlined"
                                        value={value}
                                        onChangeText={onChange}
                                        keyboardType="email-address"
                                        autoCapitalize="none"
                                        left={
                                            <TextInput.Icon icon="email-outline" />
                                        }
                                    />

                                    <HelperText
                                        type="error"
                                        visible={!!errors.email}
                                    >
                                        {errors.email?.message}
                                    </HelperText>
                                </>
                            )}
                        />

                        {/* PASSWORD */}
                        <Controller
                            control={control}
                            name="password"
                            render={({
                                field: {
                                    onChange,
                                    value,
                                },
                            }) => (
                                <>
                                    <TextInput
                                        label="Senha"
                                        mode="outlined"
                                        secureTextEntry
                                        value={value}
                                        onChangeText={onChange}
                                        left={
                                            <TextInput.Icon icon="lock-outline" />
                                        }
                                    />

                                    <HelperText
                                        type="error"
                                        visible={!!errors.password}
                                    >
                                        {errors.password?.message}
                                    </HelperText>
                                </>
                            )}
                        />

                        {/* CONFIRM PASSWORD */}
                        <Controller
                            control={control}
                            name="confirmPassword"
                            render={({
                                field: {
                                    onChange,
                                    value,
                                },
                            }) => (
                                <>
                                    <TextInput
                                        label="Confirmar Senha"
                                        mode="outlined"
                                        secureTextEntry
                                        value={value}
                                        onChangeText={onChange}
                                        left={
                                            <TextInput.Icon icon="lock-check-outline" />
                                        }
                                    />

                                    <HelperText
                                        type="error"
                                        visible={!!errors.confirmPassword}
                                    >
                                        {errors.confirmPassword?.message}
                                    </HelperText>
                                </>
                            )}
                        />

                        {/* ROLE */}
                        <Controller
                            control={control}
                            name="role"
                            render={({
                                field: {
                                    onChange,
                                    value,
                                },
                            }) => (
                                <>
                                    <TextInput
                                        label="Cargo"
                                        mode="outlined"
                                        value={value}
                                        onChangeText={onChange}
                                        left={
                                            <TextInput.Icon icon="shield-account-outline" />
                                        }
                                    />

                                    <HelperText
                                        type="error"
                                        visible={!!errors.role}
                                    >
                                        {errors.role?.message}
                                    </HelperText>
                                </>
                            )}
                        />

                        <Button
                            mode="contained"
                            onPress={handleSubmit(handleRegister)}
                            loading={isSubmitting}
                            disabled={isSubmitting}
                            style={styles.button}
                        >
                            Criar Conta
                        </Button>
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
        padding: 24,
        backgroundColor: '#F3F4F6',
    },

    card: {
        padding: 24,
        borderRadius: 24,
        gap: 4,
    },

    title: {
        textAlign: 'center',
        marginBottom: 24,
        fontWeight: 'bold',
    },

    button: {
        marginTop: 24,
        borderRadius: 12,
    },
});