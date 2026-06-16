import React, { useEffect } from 'react';

import {
    Modal,
    Portal,
    TextInput,
    Button,
    HelperText,
} from 'react-native-paper';

import { View, StyleSheet } from 'react-native';

import {
    Controller,
    useForm,
} from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';

import { clientSchema } from '../validations/clientSchema';

export default function ClientFormModal({
    visible,
    onDismiss,
    onSubmit,
    client,
}) {

    const {
        control,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm({
        resolver: zodResolver(clientSchema),
        defaultValues: {
            name: '',
            cpf: '',
            telephone: '',
            preferences: '',
        },
    });

    useEffect(() => {

        if (client) {

            reset({
                name: client.name,
                cpf: client.cpf,
                telephone: client.telephone.toString(),
                preferences: client.preferences,
            });

        } else {

            reset({
                name: '',
                cpf: '',
                telephone: '',
                preferences: '',
            });

        }

    }, [client, reset]);

    return (
        <Portal>
            <Modal
                visible={visible}
                onDismiss={onDismiss}
                contentContainerStyle={styles.modal}
            >

                <Controller
                    control={control}
                    name="name"
                    render={({ field: { onChange, value } }) => (
                        <>
                            <TextInput
                                label="Nome"
                                mode="outlined"
                                value={value}
                                onChangeText={onChange}
                                autoCapitalize="words"
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

                <Controller
                    control={control}
                    name="cpf"
                    render={({ field: { onChange, value } }) => (
                        <>
                            <TextInput
                                label="CPF"
                                mode="outlined"
                                value={value}
                                onChangeText={onChange}
                                keyboardType="numeric"
                                maxLength={11}
                            />

                            <HelperText
                                type="error"
                                visible={!!errors.cpf}
                            >
                                {errors.cpf?.message}
                            </HelperText>
                        </>
                    )}
                />

                <Controller
                    control={control}
                    name="telephone"
                    render={({ field: { onChange, value } }) => (
                        <>
                            <TextInput
                                label="Telefone"
                                mode="outlined"
                                value={value}
                                onChangeText={onChange}
                                keyboardType="phone-pad"
                                maxLength={11}
                            />

                            <HelperText
                                type="error"
                                visible={!!errors.telephone}
                            >
                                {errors.telephone?.message}
                            </HelperText>
                        </>
                    )}
                />

                <Controller
                    control={control}
                    name="preferences"
                    render={({ field: { onChange, value } }) => (
                        <>
                            <TextInput
                                label="Preferências"
                                mode="outlined"
                                value={value}
                                onChangeText={onChange}
                                multiline
                                numberOfLines={4}
                            />

                            <HelperText
                                type="error"
                                visible={!!errors.preferences}
                            >
                                {errors.preferences?.message}
                            </HelperText>
                        </>
                    )}
                />

                <Button
                    mode="contained"
                    onPress={handleSubmit(onSubmit)}
                >
                    Salvar
                </Button>

            </Modal>
        </Portal>
    );
}

const styles = StyleSheet.create({
    modal: {
        backgroundColor: 'white',
        padding: 20,
        margin: 20,
        borderRadius: 16,
    },
});