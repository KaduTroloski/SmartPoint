import {
    createContext,
    useContext,
    useState,
    useEffect
} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { mockedClients } from '../mocks/clients';

const ClientContext = createContext();

const STORAGE_KEY = '@clients';

export function ClientProvider({ children }) {

    const [clients, setClients] = useState([]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadClients();
    }, []);

     async function loadClients() {
        try {
            const storedClients =
                await AsyncStorage.getItem(STORAGE_KEY);

            if (storedClients) {
                setClients(JSON.parse(storedClients));

            } else {
                setClients(mockedClients);

            }

        } catch (error) {
            console.error(
                'Erro ao carregar clientes:',
                error
            );

            setClients(mockedClients);

        } finally {
            setLoading(false);
        }
    }

    // Salva sempre que clients mudar
    useEffect(() => {
        if (!loading) {
            AsyncStorage.setItem(
                STORAGE_KEY,
                JSON.stringify(clients)
            );
        }

    }, [clients, loading]);

    const addClient = (client) => {
        setClients((prev) => [
            ...prev,
            client,
        ]);
    };

    const updateClient = (updatedClient) => {
        setClients((prev) =>
            prev.map((client) =>
                client.id === updatedClient.id
                    ? updatedClient
                    : client
            )
        );
    };

    const deleteClient = (id) => {
        setClients((prev) =>
            prev.filter(
                (client) => client.id !== id
            )
        );
    };

    return (
        <ClientContext.Provider
            value={{
                clients,
                loading,
                addClient,
                updateClient,
                deleteClient,
            }}
        >
            {children}
        </ClientContext.Provider>
    );
}

export function useClients() {
    const context = useContext(ClientContext);

    if(!context) {
        throw new Error('useClients deve ser usado dentro de ClientProvider');
    }

    return context;
}