import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const WishoButton = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.buttonText}>{props.buttonText}</Text>
        </View>
    );
}

WishoButton.defaultProps = {
    buttonText: 'Connect via Wisho',
}

export default WishoButton;
