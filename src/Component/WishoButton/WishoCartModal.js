import React, { Component } from 'react';
import { View, Text, SafeAreaView, Modal, TouchableWithoutFeedback, FlatList } from 'react-native';
import Product from './Product';
import styles from './styles';

export default class WishoCartModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
        products: [{
            image_url: 'https://picsum.photos/200/300',
            brandName: 'Karaca',
            productName: 'Fritöz',
            quantity: '4',
            price: '7',
        }]
    };
  }

  deleteFromCart = itemId => {
    
  };

  increment = item => {
    
  };

  decrement = item => {
    
  };

  render() {
    return (
        <SafeAreaView>
            <Modal
                visible={this.props.isVisible}
                animationType={'slide'}
                transparent={true}>
                <View style={styles.cartModalContainer}>

                    <View style={styles.cartContainerTop}>
                        <View style={styles.cartTextContainer}>
                            <Text style={styles.cartText}>Sepetim (3)</Text>
                        </View>
                        <FlatList
                            showsVerticalScrollIndicator={false}
                            data={this.state.products}
                            renderItem={({item}) => (
                                <Product
                                    item={item}
                                    deleteFromCart={this.deleteFromCart}
                                    increment={this.increment}
                                    decrement={this.decrement}
                                />
                            )}
                            keyExtractor={(item, index) => index.toString()}
                            ListEmptyComponent={() => (
                            <View style={styles.emptyComponentView}>
                                <View style={styles.emptyComponentIconView}>
                                <Image
                                    style={styles.emptyComponentImage}
                                    source={require('../../static/shopping-bags.png')}
                                />
                                </View>
                                <View style={styles.emptyComponentTextView}>
                                <Text style={styles.emptyComponentTitle}>
                                    no_items_to_show
                                </Text>
                                <Text style={styles.emptyComponentText}>
                                    no_items_to_show_text
                                </Text>
                                </View>
                            </View>
                            )}
                        />
                    </View>

                    <View style={styles.totalandShippingContainer}>
                        <View style={styles.totalPart}>
                            <Text style={styles.totalText}>Ürünlerin Toplamı</Text>
                            <Text style={styles.totalAmount}>
                                ₺50
                            </Text>
                        </View>
                        <View style={styles.shippingPart}>
                            <Text style={styles.totalText}>Shipping Fee</Text>
                            <Text style={styles.totalAmount}>₺19.99</Text>
                        </View>
                    </View>

                    <View style={{flex: 2.5}}>
                        <View style={styles.cartContainerBottom}>
                            <TouchableWithoutFeedback onPress={this.props.toggleModal}>
                                <View style={styles.closeButtonContainer}>
                                    <Text style={styles.closeButtonText}>Sepeti Onayla</Text>
                                </View>
                            </TouchableWithoutFeedback>
                        </View>

                        <View style={styles.cartContainerBottom}>
                            <TouchableWithoutFeedback onPress={this.props.toggleModal}>
                                <View style={[styles.closeButtonContainer, {backgroundColor: 'white'}]}>
                                    <Text style={[styles.closeButtonText, {color: '#ff6500'}]}>Kapat</Text>
                                </View>
                            </TouchableWithoutFeedback>
                        </View>
                    </View>

                </View>
            </Modal>
        </SafeAreaView>
    );
  }
}
