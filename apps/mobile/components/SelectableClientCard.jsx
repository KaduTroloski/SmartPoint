import React from 'react';

import {
    View,
    StyleSheet,
} from 'react-native';

import {
    Card,
    Text,
    Avatar,
} from 'react-native-paper';

import { COLORS } from '../constants/colors';


export default function SelectableClientCard({
    client,
    selected,
    onPress,
}) {

    return (
        <Card
            style={[
                styles.card,
                selected && styles.selectedCard,
            ]}
            onPress={onPress}
        >

            <Card.Content>

                <View style={styles.row}>

                    <Avatar.Icon
                        size={50}
                        icon="account"
                    />

                    <View style={styles.info}>

                        <Text
                            variant="titleMedium"
                            style={styles.name}
                        >
                            {client.name}
                        </Text>

                        <Text
                            variant="bodyMedium"
                        >
                            📞 {client.telephone}
                        </Text>

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


    selectedCard: {
        borderWidth: 2,
        borderColor: COLORS.primary,
    },


    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },


    info: {
        marginLeft: 16,
    },


    name: {
        fontWeight: 'bold',
        marginBottom: 6,
    },

});