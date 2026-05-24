import React from 'react';
import { StyleSheet } from 'react-native';

import { Button } from 'react-native-paper';

export default function SubmitButton({
    children,
    ...props
}) {
    return (
        <Button
            mode="contained"
            style={styles.button}
            contentStyle={styles.buttonContent}
            {...props}
        >
            {children}
        </Button>
    );
}

const styles = StyleSheet.create({
    button: {
        marginTop: 24,
        borderRadius: 12,
    },

    buttonContent: {
        height: 54,
    },
});