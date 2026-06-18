import React, {
    useState,
} from 'react';

import {
    View,
    FlatList,
    StyleSheet,
} from 'react-native';


import {
    Searchbar,
    FAB,
    Button,
    Text,
} from 'react-native-paper';


import {
    useClients,
} from '../context/ClientContext';


import SelectableClientCard
    from '../components/SelectableClientCard';


import { COLORS } from '../constants/colors';


export default function ClientSelectionScreen({
    navigation,
    route,
}) {


    const {
        clients,
    } = useClients();


    const [search, setSearch] =
        useState('');


    const [
        selectedClient,
        setSelectedClient,
    ] = useState(null);


    const filteredClients =
        clients.filter(
            client =>
                client.name
                    .toLowerCase()
                    .includes(
                        search.toLowerCase()
                    )
        );


    // Temporário até integrar com o carrinho
    const total = route.params?.total || 40;


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
                    icon="account-plus"
                    size="small"
                    onPress={() =>
                        navigation.navigate(
                            'ClientList'
                        )
                    }
                />


            </View>


            <FlatList
                data={filteredClients}
                keyExtractor={(item) =>
                    item.id.toString()
                }

                renderItem={({ item }) => (

                    <SelectableClientCard
                        client={item}

                        selected={
                            selectedClient?.id === item.id
                        }

                        onPress={() =>
                            setSelectedClient(item)
                        }
                    />

                )}

                contentContainerStyle={{
                    paddingBottom: 100,
                }}

            />


            <View style={styles.footer}>


                <View>

                    <Text variant="bodySmall">
                        1 item
                    </Text>


                    <Text
                        variant="titleLarge"
                        style={styles.total}
                    >
                        R$ {total.toFixed(2)}
                    </Text>

                </View>


                <Button

                    mode="contained"

                    disabled={!selectedClient}

                    onPress={() =>
                        navigation.navigate(
                            'PaymentScreen',
                            {
                                client:
                                    selectedClient,
                            }
                        )
                    }

                >

                    Pagamento →

                </Button>


            </View>


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


    footer: {

        position: 'absolute',

        bottom: 0,

        left: 0,

        right: 0,


        backgroundColor: 'white',

        padding: 16,

        flexDirection: 'row',

        justifyContent:
            'space-between',

        alignItems: 'center',

        borderTopWidth: 1,

        borderColor: '#ddd',

    },


    total: {
        color: 'green',
        fontWeight: 'bold',
    },

});