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

import { productSchema } from '../validations/productSchema';

export default function ProductFormModal({
    visible,
    onDismiss,
    onSubmit,
    product,
}) {

    const {
        control,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm({
        resolver: zodResolver(productSchema),
        defaultValues: {
            name: '',
            barcode: '',
            price: '',
            stock: '',
        },
    });

    useEffect(() => {

        if (product) {

            reset({
                name: product.name,
                barcode: product.barcode || '',
                price: product.price.toString(),
                stock: product.stock.toString(),
            });

        } else {

            reset({
                name: '',
                barcode: '',
                price: '',
                stock: '',
            });

        }

    }, [product, reset]);

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
                    name="barcode"
                    render={({ field: { onChange, value } }) => (
                        <TextInput
                            label="Código de Barras"
                            mode="outlined"
                            keyboardType="decimal-pad"
                            value={value}
                            onChangeText={onChange}
                            left={
                                <TextInput.Icon
                                    icon="barcode"
                                />
                            }
                        />
                    )}
                />

                <Controller
                    control={control}
                    name="price"
                    render={({ field: { onChange, value } }) => (
                        <>
                            <TextInput
                                label="Preço"
                                mode="outlined"
                                keyboardType="numeric"
                                value={value}
                                onChangeText={onChange}
                            />

                            <HelperText
                                type="error"
                                visible={!!errors.price}
                            >
                                {errors.price?.message}
                            </HelperText>
                        </>
                    )}
                />

                <Controller
                    control={control}
                    name="stock"
                    render={({ field: { onChange, value } }) => (
                        <>
                            <TextInput
                                label="Estoque"
                                mode="outlined"
                                keyboardType="numeric"
                                value={value}
                                onChangeText={onChange}
                            />

                            <HelperText
                                type="error"
                                visible={!!errors.stock}
                            >
                                {errors.stock?.message}
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