import React, { Component } from 'react';
import { View, Text, Modal, Image, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import styles from './styles';

export default class WishoCameraScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
        message: '',
    };
  }

  sendMessage = () => {
      console.log(this.state.message);
  }

  hangup = () => {
      this.props.toggleCameraModal()
  }

  render() {
    return (
        <SafeAreaView>
            <Modal
                visible={this.props.isCameraModalOpen}
                animationType={'slide'}
                transparent={true}>
                <View style={styles.cameraModalContainer}>

                    <View styles={styles.topContainer}>
                        <View style={styles.topBrandInfoContainer}>
                            <View style={styles.avatarContainer}>
                                <Image
                                    style={styles.avatar}
                                    source={require('../../static/profilePlaceholder.png')}
                                />
                            </View>
                            <View style={styles.brandContainer}>
                                <View style={styles.brandNameContainer}>
                                    <Text style={styles.brandTopName}>Karaca</Text>
                                    <Text style={styles.branchTopName}>Akasya AVM</Text>
                                </View>
                                <View style={styles.liveContainer}>
                                    <View style={styles.live}>
                                        <Image
                                            style={styles.liveImage}
                                            resizeMode={'contain'}
                                            source={require('../../static/live.png')}
                                        />
                                        <Text style={styles.liveText}>CANLI</Text>
                                    </View>
                                    <View style={styles.countDownContainer}>
                                        <Text style={styles.countText}>02:14</Text>
                                    </View>
                                </View>
                            </View>
                        </View>

                        <View style={styles.videoContainer}>
                            <View>
                                
                            </View>
                            <View style={styles.voxChangeEventContainer}>
                                <TouchableOpacity>
                                    <View style={styles.changeContainer}>
                                        <Image
                                            source={require('../../static/ear.png')}
                                            style={styles.earIcon}
                                        />
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <View style={styles.changeContainer}>
                                        <Image
                                            source={require('../../static/change.png')}
                                            style={styles.changeIcon}
                                        />
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    <View style={styles.bottomContainer}>
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity>
                                <View style={[styles.actionButtonContainer, { backgroundColor: '#ff6500'}]}>
                                    <Image
                                        source={require('../../static/cart.png')}
                                        style={styles.basketIcon}
                                    />
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={[styles.actionButtonContainer, { backgroundColor: '#ee4037'}]}>
                                    <Image
                                        source={require('../../static/mute.png')}
                                        style={styles.micIcon}
                                    />
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this.hangup}>
                                <View style={[styles.actionMidButtonContainer, { backgroundColor: 'white'}]}>
                                    <Image
                                        source={require('../../static/hangup.png')}
                                        style={styles.hangupIcon}
                                    />
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={[styles.actionButtonContainer, { backgroundColor: '#007aed'}]}>
                                    <Image
                                        source={require('../../static/camera.png')}
                                        style={styles.cameraIcon}
                                    />
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={[styles.actionButtonContainer, { backgroundColor: 'rgba(255,255,255,0.25)'}]}>
                                    <Image
                                        source={require('../../static/report.png')}
                                        style={styles.reportIcon}
                                    />
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.messageContainer}>
                            <TextInput
                                style={styles.messageInput}
                                placeholder={'Mesaj yaz'}
                                placeholderTextColor={'white'}
                                value={this.state.message}
                                onChangeText={value => this.setState({message: value})}
                            />
                            <TouchableOpacity onPress={this.state.message ? this.sendMessage : null}>
                                <View style={[styles.sendButton, {backgroundColor: this.state.message ? '#ff6500' : 'gray'}]}>
                                    
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>
            </Modal>
        </SafeAreaView>
    );
  }
}

