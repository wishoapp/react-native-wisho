import React, { Component } from 'react';
import { View, Text, Modal, FlatList, TouchableWithoutFeedback } from 'react-native';
import styles from './styles';
import WishoBranch from './WishoBranch';
import WishoQueueScreen from './WishoQueueScreen';

export default class WishoModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
        clickedCall: false,
        loading: false,
        call_queue_id: null,
        queue_number: null,
        branch_id: null
    };
  }

  bindUserToQueue = async () => {
    this.setState({clickedCall: true, loading: true});
    this.goToQueue()
      .then(response => {
        console.log(response);
        this.setState({loading: false, call_queue_id: response.call_queue_id, branch_id: response.branch_id}, () => this.getCurrentQueueState());
      })
      .catch(e => {
        console.log(e)
        this.setState({loading: false})
      })
  }

  goToQueue = async () => {
    const response = await fetch(
      'https://dev.penelope.wishoapp.com/api/wisho-sdk/queue/bind',
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          brand_id: this.props.branches[0].brand.id,
          user_name: 'cihatt_tasci',
          source_id: 3,
        })
      },
    );

    return await response.json();
  }

  getCurrentQueueState = () => {
    //setInterval(() => {
      this.fetchQueueState(this.state.branch_id, this.state.call_queue_id)
        .then(response => {
          console.log(response);
          this.setState({queue_number: response.current_queue_state});
        })
        .catch(e => {
          console.log(e);
        })
    //}, 5000);
  }

  fetchQueueState = async (branchId, queueStateId) => {
    const response = await fetch(
      'https://dev.penelope.wishoapp.com/api/wisho-sdk/queue/current-state',
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          branch_id: branchId,
          state_id: queueStateId,
        })
      },
    );

    return await response.json();
  };

  quiteFromQueue = async () => {
    this.setState({clickedCall: false});
    const response = await fetch(
      'https://dev.penelope.wishoapp.com/api/wisho-sdk/queue/quit',
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          branch_id: this.state.branch_id,
          state_id: this.state.call_queue_id,
        })
      },
    );

    return await response.json();
  };

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
                        this.props.isBranchListExist && !this.state.clickedCall ?
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
                                      bindUserToQueue={this.bindUserToQueue}
                                  />
                              )}
                          />
                        </View>
                        :
                        <WishoQueueScreen
                          branches={this.props.branches}
                          loading={this.state.loading}
                          quiteFromQueue={this.quiteFromQueue}
                          queueNumber={this.state.queue_number}
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
