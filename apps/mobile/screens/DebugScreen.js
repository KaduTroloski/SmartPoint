import React, { useState } from 'react';

import {
    ScrollView,
    StyleSheet,
    View,
} from 'react-native';

import {
    Button,
    Surface,
    Text,
} from 'react-native-paper';

import AsyncStorage from '@react-native-async-storage/async-storage';

export default function DebugScreen() {

    const [storageData, setStorageData] = useState([]);

    const getStorageData = async () => {

        try {

            const keys =
                await AsyncStorage.getAllKeys();

            const items =
                await AsyncStorage.multiGet(keys);

            setStorageData(items);

            console.log(items);

        } catch (error) {

            console.log(error);
        }
    };

    const clearStorage = async () => {

        try {

            await AsyncStorage.clear();

            setStorageData([]);

            console.log('Storage limpo');

        } catch (error) {

            console.log(error);
        }
    };

    return (
        <ScrollView
            contentContainerStyle={styles.container}
        >
            <Text
                variant="headlineMedium"
                style={styles.title}
            >
                Debug Storage
            </Text>

            <Button
                mode="contained"
                onPress={getStorageData}
                style={styles.button}
            >
                Consultar Storage
            </Button>

            <Button
                mode="outlined"
                onPress={clearStorage}
                style={styles.button}
            >
                Limpar Storage
            </Button>

            {
                storageData.map((item, index) => (

                    <Surface
                        key={index}
                        style={styles.card}
                    >
                        <Text variant="titleMedium">
                            {item[0]}
                        </Text>

                        <Text>
                            {item[1]}
                        </Text>
                    </Surface>
                ))
            }
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        gap: 16,
    },

    title: {
        fontWeight: 'bold',
    },

    button: {
        marginTop: 10,
    },

    card: {
        padding: 16,
        borderRadius: 12,
    },
});