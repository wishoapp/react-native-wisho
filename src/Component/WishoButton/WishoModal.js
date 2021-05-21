import React, { Component } from 'react';
import { View, Text, Modal, FlatList, TouchableWithoutFeedback } from 'react-native';
import styles from './styles';
import WishoBranch from './WishoBranch';
import WishoQueueScreen from './WishoQueueScreen';
import WishoService from '../../Lib/WishoService';

export default class WishoModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
        clickedCall: false,
        loading: false,
        call_queue_id: null,
        queue_number: null,
        branch_id: null,
        user_name: '',
        password: '',
        isBranchListExist: true,
        branches: [],
        isEmployeeAvailable: true
    };

    WishoService.fetchBranchesByBrandId(23)
      .then(response => {
        this.setState({
          branches: response.branches,
        });
      });
  }

  bindUserToQueue = async () => {
    this.setState({clickedCall: true, loading: true});
    this.fetchAvailableVoximplantService()
      .then(response => {
        this.setState({user_name : response.account.user_name, password: response.account.password}, () => {
          this.props.startVox(this.state.user_name, this.state.password)
          this.goToQueue()
            .then(response => {
              if (response.has_queue_exceeded) {
                this.setState({isEmployeeAvailable: false});
              } else {
                this.setState({isEmployeeAvailable: true});
              }
              this.setState({loading: false, call_queue_id: response.call_queue_id, branch_id: response.branch_id}, () => this.getCurrentQueueState());
            })
            .catch(e => {
              console.log(e)
              this.setState({loading: false})
            })
        })
      })
      .catch(e => console.log(e));
  }

  fetchAvailableVoximplantService = async () => {
    return WishoService.fetchAvailableVoximplantService();
  }

  goToQueue = async () => {
    return WishoService.goToQueue(23, this.state.user_name);
  }

  getCurrentQueueState = () => {
    setInterval(() => {
      this.fetchQueueState(this.state.branch_id, this.state.call_queue_id)
        .then(response => {
          console.log(response);
          this.setState({queue_number: response.current_queue_state});
        })
        .catch(e => {
          console.log(e);
        })
    }, 1000);
  }

  fetchQueueState = async (branchId, queueStateId) => {
    return WishoService.fetchQueueState(branchId, queueStateId)
  };

  quiteFromQueue = async () => {
    this.setState({clickedCall: false});
    WishoService.quiteFromQueue(this.state.branch_id, this.state.call_queue_id);
  };

  toggleClickedCall = () => {
    this.setState({clickedCall: !this.state.clickedCall});
  }

  render() {
    return (
      <View>
            <Modal
                visible={this.props.branchListModal}
                animationType={'slide'}
                transparent={true}
                onRequestClose={this.props.toggleModal}>
                <View style={[styles.modalContainer, {justifyContent: this.state.isBranchListExist ? null : 'center'}]}>
                    {
                        this.state.isBranchListExist && !this.state.clickedCall ?
                        <View>
                          <View style={styles.titleContainer}>
                            <Text style={styles.brandName}>Karaca</Text>
                            <Text style={styles.branchInfo}>({this.state.branches.length})</Text>
                          </View>
                          <FlatList
                              data={this.state.branches}
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
                          branches={this.state.branches}
                          loading={this.state.loading}
                          quiteFromQueue={this.quiteFromQueue}
                          queueNumber={this.state.queue_number}
                          isIncomingCallExist={this.props.isIncomingCallExist}
                          isEmployeeAvailable={this.state.isEmployeeAvailable}
                          answer={this.props.answer}
                          toggleClickedCall={this.toggleClickedCall}
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
