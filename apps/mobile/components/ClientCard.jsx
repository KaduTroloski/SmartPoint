import React from 'react';

import { View, StyleSheet } from 'react-native';

import {
    Card,
    Text,
    IconButton,
    Avatar
} from 'react-native-paper';

export default function ClientCard({
    client,
    onEdit,
    onDelete,
}) {
    return (
        <Card style={styles.card}>
            <Card.Content>
                <View style={styles.row}>
                    <View style={styles.avatarContainer}>
                        <Avatar.Icon
                            size={50}
                            icon="account"
                        />
                    </View>
                    <View style={styles.infoContainer}>
                        <Text
                            variant="titleLarge"
                            style={styles.name}
                        >
                            {client.name}
                        </Text>

                        <Text>
                            CPF: {client.cpf}
                        </Text>

                        <Text>
                            📞 {client.telephone}
                        </Text>

                        {client.preferences && (
                            <Text>
                                Preferências:
                                {client.preferences}
                            </Text>
                        )}
                    </View>

                    <View style={styles.actions}>
                        <IconButton
                            icon="pencil"
                            mode="contained"
                            containerColor="purple"
                            onPress={() => onEdit(client)}
                        />

                        <IconButton
                            icon="delete"
                            iconColor="white"
                            containerColor="red"
                            onPress={() => onDelete(client.id)}
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
        justifyContent: 'center',
    },

    infoContainer: {
        flex: 1,
        marginLeft: 12,

    },

    name: {
        fontWeight: 'bold',
        marginVertical: 4,
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
        justifyContent: 'center',
    },
});