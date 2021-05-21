import React from 'react';
import { View, Text, TouchableOpacity, PermissionsAndroid, Platform } from 'react-native';
import WishoCameraScreen from 'react-native-wisho/src/Component/WishoButton/WishoCameraScreen';
import styles from './styles';
import WishoModal from './WishoModal';
import {Voximplant} from 'react-native-voximplant';

class WishoButton extends React.Component {
  state = {
    branchListModal: false,
    isCameraModalOpen:false,
    remoteVideoStreamId: null,
    localVideoStreamId: null,
    client: null,
    call: null,
    callId: null,
    customerProfilePictureUrl: '',
    customerName: '',
    customerCity: '',
    source_id: null,
    incomingCallExist: false,
    localVideoStreamId: null,
    remoteVideoStreamId: null,
  }

  startVox = async (userName, password) => {
    this.setState(
      {
        client: Voximplant.getInstance(),
      },
      async () => {
        (async () => {
          try {
            this.state.client.disconnect();
          } catch (e) {}
        })();
        await this.voximplant(userName, password);
      },
    );
  }

  voximplant = async (userName, password) => {
    try {
      let state = await this.state.client.getClientState();
      if (state === Voximplant.ClientState.DISCONNECTED) {
          await this.state.client.connect();
      } 
      let authResult = await this.state.client.login(userName + '@sway.baraz.voximplant.com', password);

      const loginTokens = authResult.tokens;

      if (loginTokens !== null) {
        if (Platform.OS === 'android') {
          let permissions = [
            PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
            PermissionsAndroid.PERMISSIONS.CAMERA,
          ];
          const granted = await PermissionsAndroid.requestMultiple(permissions);
          const recordAudioGranted =
            granted['android.permission.RECORD_AUDIO'] === 'granted';
          const cameraGranted =
            granted['android.permission.CAMERA'] === 'granted';
          if (recordAudioGranted) {
            if (!cameraGranted) {
              console.warn(
                'MainScreen: makeCall: camera permission is not granted',
              );
              return;
            }
          } else {
            console.warn(
              'MainScreen: makeCall: record audio permission is not granted',
            );
            return;
          }
        }
        this.state.client.on(
          Voximplant.ClientEvents.IncomingCall,
          this._onIncomingCall,
        );
        this.state.client.on(
          Voximplant.ClientEvents.ConnectionClosed,
          event => {
            console.log('_onConnectionClosed', event);
          },
        );
        this.state.client.on(
          Voximplant.ClientEvents.AuthResult,
          function(event) {
            console.log(event);
          },
        );
        this.state.client.on(
          Voximplant.ClientEvents.ConnectionEstablished,
          function(event) {
            console.log(event);
          },
        );
      } else {
        console.error('LoginSuccessful: login tokens are invalid');
      }
    } catch (e) {
        console.log(e.name + e.message);
    }
  }

  _onIncomingCall = event => {
    console.log('_onIncomingCall', event);
    const header = JSON.parse(event.headers['VI-CallData']);
    this.setState(
      {
        call: event.call,
        callId: header.callId,
        customerName: header.customerName,
        customerCity: header.customerCity,
        customerProfilePictureUrl:
          header.customerProfilePictureUrl === undefined
            ? this.state.customerProfilePictureUrl
            : header.customerProfilePictureUrl,
        productInformation: header.productInformation
          ? header.productInformation
          : null,
        source_id: header.sourceId,
        incomingCallExist: true,
      }
    );

    event.call.on(Voximplant.CallEvents.Connected, this._onConnectedCall);
    event.call.on(Voximplant.CallEvents.Disconnected, this._onDisconnectedCall);
    event.call.on(Voximplant.CallEvents.EndpointAdded, this._onCallEndpointAdded);
    event.call.on(Voximplant.CallEvents.LocalVideoStreamAdded, event => {
        console.log(
          'LocalVideoStreamAdded',
          event,
          'videoId: ',
          event.videoStream.id,
        );
        this.setState({localVideoStreamId: event.videoStream.id});
      },
    );
  };

  _onConnectedCall = async () => {
    this.state.call.sendVideo(true);
    console.log('bağlandı');
  }

  _onDisconnectedCall = async () => {
    this.setState({incomingCallExist: false, isCameraModalOpen: false, branchListModal: false});
  }

  answerCall = () => {
    let callSettings = {
      video: {
        sendVideo: true,
        receiveVideo: true,
      },
    };
    this.setState({branchListModal: false}, () => {
      this.setState({isCameraModalOpen: true}, () => {
        this.state.call.answer(callSettings);
      })
    });
  };

  sendVideo = () => {
    console.log(
      'CallScreen[' +
        this.state.call.callId +
        '] sendVideo: ' +
        !this.state.isVideoSent,
    );
    this.state.call.sendVideo(true)
  };

  _onCallEndpointAdded = event => {
    this._setupEndpointListeners(event.endpoint, true);
  };

  _setupEndpointListeners(endpoint, on) {
    Object.keys(Voximplant.EndpointEvents).forEach(eventName => {
      const callbackName = `_onEndpoint${eventName}`;
      if (typeof this[callbackName] !== 'undefined') {
        endpoint[on ? 'on' : 'off'](eventName, this[callbackName]);
      }
    });
  }

  _onEndpointRemoteVideoStreamAdded = event => {
    this.setState({remoteVideoStreamId: event.videoStream.id});
  };

  toggleModal = () => {
    this.setState({branchListModal: !this.state.branchListModal});
  }

  toggleCameraModal = () => {
    this.setState({isCameraModalOpen: !this.state.isCameraModalOpen});
  }

  render() {
    return (
        <View>
            <TouchableOpacity onPress={this.toggleModal}>
                <View
                    style={
                        [
                            styles.container,
                            {
                                backgroundColor: this.props.backgroundColor ?? styles.container.backgroundColor,
                                borderWidth: this.props.borderWidth ?? styles.container.borderWidth,
                                borderColor: this.props.borderColor ?? styles.container.borderColor,
                            }
                        ]
                    }>
                    <Text
                        style={
                            [
                                styles.buttonText,
                                {
                                    color: this.props.textColor ?? styles.buttonText.color,
                                    fontWeight: this.props.textWeight ?? styles.buttonText.fontWeight
                                }
                            ]
                        }>
                        {this.props.buttonText}
                    </Text>
                </View>
            </TouchableOpacity>

            <WishoModal
                branchListModal={this.state.branchListModal}
                toggleModal={this.toggleModal}
                toggleCameraModal={this.toggleCameraModal}
                startVox={this.startVox}
                isIncomingCallExist={this.state.incomingCallExist}
                answer={this.answerCall}
            />

            <WishoCameraScreen
                isCameraModalOpen={this.state.isCameraModalOpen}
                toggleCameraModal={this.toggleCameraModal}
                remoteVideoStreamId={this.state.remoteVideoStreamId}
                localVideoStreamId={this.state.localVideoStreamId}
                client={this.state.client}
                sendVideo={this.sendVideo}
            />
        </View>
    );
  }
}

WishoButton.defaultProps = {
    buttonText: 'Connect via Wisho',
    buttonTextStyle: styles.buttonText,
    branchList: true
}

export default WishoButton;


/*import React from 'react';
import { View, Text, TouchableOpacity, Modal, FlatList, Image, TouchableWithoutFeedback } from 'react-native';
import styles from './styles';

class WishoButton extends React.Component {
  state = {
    branchListModal: false
  }

  toggleModal = () => {
    this.props.branchList ? this.setState({branchListModal: !this.state.branchListModal}) : null;
  }

  render() {
    return (
        <View>
                <TouchableOpacity onPress={this.toggleModal}>
                <View
                    style={
                        [
                            styles.container,
                            {
                                backgroundColor: this.props.backgroundColor ?? styles.container.backgroundColor,
                                borderWidth: this.props.borderWidth ?? styles.container.borderWidth,
                                borderColor: this.props.borderColor ?? styles.container.borderColor,
                            }
                        ]
                    }>
                    <Text
                        style={
                            [
                                styles.buttonText,
                                {
                                    color: this.props.textColor ?? styles.buttonText.color,
                                    fontWeight: this.props.textWeight ?? styles.buttonText.fontWeight
                                }
                            ]
                        }>
                        {this.props.buttonText}
                    </Text>
                </View>
            </TouchableOpacity>
            <Modal
                visible={this.state.branchListModal}
                animationType={'slide'}
                transparent={true}
                onRequestClose={this.toggleModal}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.titleContainer}>
                    <Text style={styles.brandName}>{this.props.branches[0].brand.name}</Text>
                    <Text style={styles.branchInfo}>{this.props.branches.length}</Text>
                    </View>
                    <FlatList
                    data={this.props.branches}
                    renderItem = {({item}) => (
                        <View key={item.id} style={styles.containerBranch}>
                        <View style={styles.logoContainer}>
                            <Image
                            source={{
                                uri: item.brand.logo_url,
                            }}
                            style={styles.logo}
                            resizeMode={'cover'}
                            />
                        </View>
                        <View style={styles.content}>
                            <View style={styles.brand}>
                            <Text style={styles.branchName}>
                                {item.address}, {item.city.name}
                            </Text>
                            </View>
                        </View>
                        <View style={styles.callContainer}>
                            <TouchableWithoutFeedback>
                            <Image
                                source={{uri: 'https://wisho.s3-eu-west-1.amazonaws.com/video_call.png'}}
                                style={styles.callImage}
                            />
                            </TouchableWithoutFeedback>
                        </View>
                        </View>
                    )}
                    />
                </View>
            </Modal>
      </View>
    );
  }
}

WishoButton.defaultProps = {
    buttonText: 'Connect via Wisho',
    buttonTextStyle: styles.buttonText,
    branchList: true
}

export default WishoButton;
*/