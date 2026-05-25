import React from 'react';

import { StyleSheet } from 'react-native';

import {
    TextInput,
    HelperText,
} from 'react-native-paper';

export default function FormInput({
    label,
    icon,
    rightIcon,
    onRightIconPress,
    error,
    errorMessage,
    secureTextEntry = false,
    ...props
}) {
    return (
        <>
            <TextInput
                label={label}
                mode="outlined"
                secureTextEntry={secureTextEntry}
                error={error}
                style={styles.input}
                left={
                    icon
                        ? (
                            <TextInput.Icon
                                icon={icon}
                            />
                        )
                        : null
                }
                right={
                    rightIcon
                        ? (
                            <TextInput.Icon
                                icon={rightIcon}
                                onPress={onRightIconPress}
                            />
                        )
                        : null
                }
                {...props}
            />

            <HelperText
                type="error"
                visible={error}
            >
                {errorMessage}
            </HelperText>
        </>
    );
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: '#FFF',
    },
});