import React from 'react';
import { StyleSheet } from 'react-native';

import { TextInput } from 'react-native-paper';

export default function FormInput({
    icon,
    secureTextEntry = false,
    ...props
}) {
    return (
        <TextInput
            mode="outlined"
            secureTextEntry={secureTextEntry}
            style={styles.input}
            left={
                icon
                    ? <TextInput.Icon icon={icon} />
                    : null
            }
            {...props}
        />
    );
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 12,
        backgroundColor: '#FFF',
    },
});