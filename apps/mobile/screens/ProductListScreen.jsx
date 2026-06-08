import React, { useState, useEffect } from 'react';

import {
    View,
    FlatList,
    StyleSheet,
    Alert
} from 'react-native';

import {
    Searchbar,
    FAB,
} from 'react-native-paper';

import ProductCard from '../components/ProductCard';

import ProductFormModal from './ProductFormModal';

import { useProducts } from '../context/ProductContext';

import uuid from 'react-native-uuid';

export default function ProductListScreen({ navigation }) {

    const {
        products,
        deleteProduct,
        addProduct,
        updateProduct,
    } = useProducts();

    const [search, setSearch] =
        useState('');

    const [selectedProduct,
        setSelectedProduct] =
        useState(null);

    const [modalVisible,
        setModalVisible] =
        useState(false);

    const filteredProducts =
        products.filter((product) =>
            product.name
                .toLowerCase()
                .includes(
                    search.toLowerCase()
                )
        );

    const handleDelete =
        (id) => {

            Alert.alert(
                'Excluir Produto',
                'Deseja realmente excluir este produto?',
                [
                    {
                        text: 'Cancelar',
                        style: 'cancel',
                    },

                    {
                        text: 'Excluir',

                        style:
                            'destructive',

                        onPress: () =>
                            deleteProduct(id),
                    },
                ]
            );
        };

    return (
        <View style={styles.container}>

            <View style={styles.searchRow}>

                <Searchbar
                    placeholder="Pesquisar produtos"
                    value={search}
                    onChangeText={setSearch}
                    style={styles.search}
                />

                <FAB
                    icon="plus"
                    size="small"
                    onPress={() => {
                        setSelectedProduct(null);
                        setModalVisible(true);
                    }}
                />

            </View>

            <FlatList
                data={filteredProducts}
                keyExtractor={(item) =>
                    item.id.toString()
                }
                renderItem={({ item }) => (
                    <ProductCard
                        product={item}
                        onEdit={(product) => {
                            setSelectedProduct(
                                product
                            );

                            setModalVisible(
                                true
                            );
                        }}
                        onDelete={(id) => handleDelete(id)}
                    />
                )}
            />

            <ProductFormModal
                onDismiss={() => {
                    setSelectedProduct(null);
                    setModalVisible(false)
                }}
                visible={modalVisible}
                product={selectedProduct}
                onSubmit={(data) => {
                    if (selectedProduct) {
                        updateProduct({
                            ...selectedProduct,
                            ...data,
                        });
                    } else {

                        addProduct({
                            id: uuid.v4(),
                            ...data,
                            price: Number(data.price),
                            stock: Number(data.stock),
                        });
                    }
                    setModalVisible(false);
                }}
            />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },

    searchRow: {
        flexDirection: 'row',
        gap: 12,
        marginBottom: 16,
    },

    search: {
        flex: 1,
    },
});