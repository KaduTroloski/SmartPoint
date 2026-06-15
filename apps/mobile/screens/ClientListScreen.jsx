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
    ActivityIndicator,
    Text,
} from 'react-native-paper';

import ClientCard from '../components/ClientCard';

import ClientFormModal from '../components/ClientFormModal';

import { useClients } from '../context/ClientContext';

import uuid from 'react-native-uuid';

export default function ClientListScreen({ navigation }) {

    const {
        clients,
        loading,
        deleteClient,
        addClient,
        updateClient,
    } = useClients();

    const [search, setSearch] =
        useState('');

    const [selectedClient,
        setSelectedClient] =
        useState(null);

    const [modalVisible,
        setModalVisible] =
        useState(false);

    const filteredClients = clients.filter((client) =>
        client.name
            .toLowerCase()
            .includes(search.toLowerCase())
        ||
        client.cpf.includes(search)
    );

    const handleDelete =
        (id) => {

            Alert.alert(
                'Excluir Cliente',
                'Deseja realmente excluir este cliente?',
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
                            deleteClient(id),
                    },
                ]
            );
        };

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator
                    size="large"
                />

                <Text>
                    Carregando clientes...
                </Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>

            <View style={styles.searchRow}>

                <Searchbar
                    placeholder="Pesquisar clientes"
                    value={search}
                    onChangeText={setSearch}
                    style={styles.search}
                />

                <FAB
                    icon="plus"
                    size="small"
                    onPress={() => {
                        setSelectedClient(null);
                        setModalVisible(true);
                    }}
                />

            </View>

            <FlatList
                data={filteredClients}
                keyExtractor={(item) =>
                    item.id.toString()
                }
                renderItem={({ item }) => (
                    <ClientCard
                        client={item}
                        onEdit={(client) => {
                            setSelectedClient(
                                client
                            );

                            setModalVisible(
                                true
                            );
                        }}
                        onDelete={(id) => handleDelete(id)}
                    />
                )}
            />

            <ClientFormModal
                onDismiss={() => {
                    setSelectedClient(null);
                    setModalVisible(false)
                }}
                visible={modalVisible}
                client={selectedClient}
                onSubmit={(data) => {
                    if (selectedClient) {
                        updateClient({
                            ...selectedClient,
                            ...data,
                        });
                    } else {
                        addClient({
                            id: uuid.v4(),
                            ...data,
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

    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});