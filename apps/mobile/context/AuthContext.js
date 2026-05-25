import React, {
    createContext,
    useContext,
    useEffect,
    useState,
} from 'react';

import { initialUsers } from '../mocks/initialUsers';

import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = createContext();

export function AuthProvider({ children }) {

    const [users, setUsers] = useState([]);

    const registerUser = (userData) => {

        const newUser = {
            id: Date.now(),
            ...userData,
        };

        setUsers((prev) => [...prev, newUser]);

        useEffect(() => {
            loadUsers();
        }, []);
    };

    useEffect(() => {
        saveUsers();
    }, [users]);

    const loadUsers = async () => {

        try {

            const storedUsers =
                await AsyncStorage.getItem('@users');

            if (storedUsers) {

                setUsers(JSON.parse(storedUsers));

                return;
            }

            setUsers(initialUsers);

        } catch (error) {

            console.log(error);
        }
    };

    const saveUsers = async () => {

        try {

            await AsyncStorage.setItem(
                '@users',
                JSON.stringify(users)
            );

        } catch (error) {

            console.log(error);
        }
    };

    return (
        <AuthContext.Provider
            value={{
                users,
                registerUser,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}