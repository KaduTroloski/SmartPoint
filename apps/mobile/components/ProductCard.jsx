import React from 'react';

import { View, StyleSheet } from 'react-native';

import {
    Card,
    Text,
    IconButton,
} from 'react-native-paper';

import { COLORS } from '../constants/colors';

export default function ProductCard({
    product,
    onEdit,
    onDelete,
}) {
    return (
        <Card style={styles.card}>
            <Card.Content>

                <View style={styles.row}>

                    <View style={styles.infoContainer}>

                        <Text variant="bodyMedium">
                            Cód: {product.id}
                        </Text>

                        <Text
                            variant="titleLarge"
                            style={styles.name}
                        >
                            {product.name}
                        </Text>

                        <View style={styles.details}>

                            <View>
                                <Text
                                    style={styles.price}
                                >
                                    R$ {product.price.toFixed(2)}
                                </Text>
                            </View>

                            <View>
                                <Text>
                                    Estoque:
                                </Text>

                                <Text>
                                    {product.stock} un
                                </Text>
                            </View>

                        </View>

                    </View>

                    <View style={styles.actions}>
                        <IconButton
                            icon="pencil"
                            mode="contained"
                            onPress={() => onEdit(product)}
                        />

                        <IconButton
                            icon="delete"
                            mode="contained"
                            iconColor="white"
                            containerColor="red"
                            onPress={() => onDelete(product.id)}
                        />
                    </View>

                </View>

            </Card.Content>
        </Card>
    );
}

const styles = StyleSheet.create({
    card: {
        marginBottom: 12,
    },

    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    infoContainer: {
        flex: 1,
    },

    name: {
        fontWeight: 'bold',
        marginVertical: 8,
    },

    details: {
        flexDirection: 'row',
        gap: 32,
    },

    price: {
        color: 'green',
        fontWeight: 'bold',
    },

    actions: {
        flexDirection: 'row',
    },
});