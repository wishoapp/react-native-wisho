import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

const ProductDetail = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.title}</Text>
    </View>
  );
};
export default ProductDetail;
