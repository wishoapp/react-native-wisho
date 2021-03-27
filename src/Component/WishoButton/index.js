import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const WishoButton = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <View
                style={
                    [
                        styles.container,
                        {
                            backgroundColor: props.backgroundColor ?? styles.container.backgroundColor,
                            borderWidth: props.borderWidth ?? styles.container.borderWidth,
                            borderColor: props.borderColor ?? styles.container.borderColor,
                        }
                    ]
                }>
                <Text
                    style={
                        [
                            styles.buttonText,
                            {
                                color: props.textColor ?? styles.buttonText.color,
                                fontWeight: props.textWeight ?? styles.buttonText.fontWeight
                            }
                        ]
                    }>
                    {props.buttonText}
                </Text>
            </View>
        </TouchableOpacity>
    );
}

WishoButton.defaultProps = {
    buttonText: 'Connect via Wisho',
    buttonTextStyle: styles.buttonText
}

export default WishoButton;
