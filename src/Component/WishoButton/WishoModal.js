import React, { Component } from 'react';
import { View, Text, Modal, FlatList, TouchableWithoutFeedback } from 'react-native';
import styles from './styles';
import WishoBranch from './WishoBranch';
import WishoQueueScreen from './WishoQueueScreen';

export default class WishoModal extends Component {
  render() {
    return (
      <View>
            <Modal
                visible={this.props.branchListModal}
                animationType={'slide'}
                transparent={true}
                onRequestClose={this.props.toggleModal}>
                <View style={[styles.modalContainer, {justifyContent: this.props.isBranchListExist ? null : 'center'}]}>
                    {
                        this.props.isBranchListExist ?
                        <View>
                          <View style={styles.titleContainer}>
                            <Text style={styles.brandName}>Karaca</Text>
                            <Text style={styles.branchInfo}>({this.props.branches.length})</Text>
                          </View>
                          <FlatList
                              data={this.props.branches}
                              renderItem = {({item}) => (
                                  <WishoBranch
                                      item={item}
                                  />
                              )}
                          />
                        </View>
                        :
                        <WishoQueueScreen
                          branches={this.props.branches}
                        />
                    }
                    <TouchableWithoutFeedback onPress={this.props.toggleModal}>
                      <View style={styles.closeButtonContainer}>
                        <Text style={styles.closeButtonText}>Kapat</Text>
                      </View>
                    </TouchableWithoutFeedback>
                </View>
            </Modal>
      </View>
    );
  }
}
