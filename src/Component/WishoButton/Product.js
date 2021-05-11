import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  FlatList,
  Image
} from 'react-native';
import ProductDetail from './ProductDetail';
import styles from './styles';

const Product = props => {
  const height = Dimensions.get('window').height;

  const removeCartItem = itemId => {
    
  };

  return (
    <View style={styles.productContainer}>
      <View style={styles.avatarView}>
        <Image
          source={{uri: `${props.item.image_url}`}}
          resizeMode="contain"
          style={styles.avatarImage}
        />
      </View>
      <View style={styles.brandComponents}>
        <Text style={styles.brandName}>{props.item.brandName}</Text>
        <Text style={styles.productName}>{props.item.productName}</Text>
        <View style={styles.productContent}>
          <View style={styles.incrementButtonContainer}>
            <TouchableOpacity
              style={styles.decrementButton}
              onPress={props.decrement}>
              <Text style={styles.incrementText}>-</Text>
            </TouchableOpacity>
            <View style={styles.orderNum}>
              <Text style={styles.incrementText}>{props.item.quantity}</Text>
            </View>
            <TouchableOpacity
              style={styles.incrementButton}
              onPress={props.increment}>
              <Text style={styles.incrementText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.removeAndPrice}>
        <TouchableOpacity onPress={() => removeCartItem()}>
          <View style={styles.closeIcon}>
            <Text style={styles.removeCartItemText}>x</Text>
          </View>
        </TouchableOpacity>
        <Text style={styles.priceText}>{props.item.price}₺</Text>
      </View>
    </View>
  );
};
export default Product;
/*
<FlatList
            data={[1,2,3,4]}
            numColumns={3}
            renderItem={() => <ProductDetail title={2} />}
          />
          */