import React from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';

export default function FormLabel({ children }) {
    return (
        <Text
            variant="labelLarge"
            style={styles.label}
        >
            {children}
        </Text>
    );
}

const styles = StyleSheet.create({
    label: {
        marginBottom: 8,
        marginTop: 10,
    },
});