import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        margin: 5,
        backgroundColor: '#ff6500',
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.5)',
        borderRadius: 10,
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 20,
        fontWeight: '400',
    },
    modalContainer: {
      backgroundColor: '#f2f2f7',
      height: height*0.5,
      width: width,
      borderTopRightRadius: (10 * width) / 373,
      borderTopLeftRadius: (10 * width) / 373,
      alignItems: 'center',
      paddingTop: 15,
      bottom: 0,
      position: 'absolute',
      borderTopColor: '#dcdeed',
      borderWidth: 0.5
    },
    cameraModalContainer: {
      flex: 1,
      backgroundColor: 'green',
      height: height,
      width: width,
      bottom: 0,
      position: 'absolute',
      justifyContent: 'space-between'
    },
    containerBranch: {
      width: width * 0.93,
      backgroundColor: 'white',
      borderRadius: 10,
      borderColor: '#dcdeed',
      flexDirection: 'row',
      borderWidth: 0.5,
      marginBottom: 8,
      paddingTop: 6,
      paddingBottom: 6,
    },
    logoContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    logo: {
      width: 38,
      height: 38,
      borderRadius: 19,
      borderWidth: 0.5,
      borderColor: '#dcdeed',
    },
    content: {
      flex: 4,
      justifyContent: 'center',
      borderWidth: 0,
    },
    brand: {
      flexDirection: 'row',
    },
    branchName: {
      color: 'black',
      fontSize: 13,
      height: 19,
    },
    callContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    callImage: {
      width: 25,
      height: 15,
    },
    newBadge: {
      borderWidth: 0.5,
      borderRadius: 3,
      borderColor: '#3ec6ab',
      color: '#3ec6ab',
      fontSize: 8,
      height: 12,
      textAlign: 'center',
      marginLeft: 3,
      marginTop: 5,
      paddingLeft: 3,
      paddingRight: 3,
    },
    titleContainer: {
      borderWidth: 0,
      marginBottom: 10,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
    },
    brandName: {
      fontSize: 15,
      letterSpacing: 0,
      color: '#7b8098',
      borderWidth: 0,
      marginRight: 5
    },
    branchInfo: {
      fontSize: 12,
      color: '#7b8098',
      letterSpacing: 0.55,
      borderWidth: 0,
      fontWeight: 'bold'
    },
    queueContainer: {
      alignItems: 'center',
      height: height*0.3,
      justifyContent: 'space-between',
      marginBottom: height * 0.8
    },
    queueText: {
      fontSize: height * 0.025,
      fontWeight: 'bold',
      color: '#ff6500',
    },
    closeButtonContainer: {
      width: width*0.93,
      height: height * 0.075,
      backgroundColor: '#ff6500',
      borderRadius: 10,
      position: 'absolute',
      bottom: height*0.01,
      justifyContent: 'center',
      alignItems: 'center'
    },
    closeButtonText: {
      fontSize: height * 0.025,
      color: 'white',
      fontWeight: 'bold',
    },
    queueNumberContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      height: height * 0.16,
      width: height * 0.16,
      borderRadius: height * 0.08,
      borderWidth: width * 0.02,
      borderColor: '#dcdeed',
    },
    queueNumberText: {
      fontSize: height * 0.05,
      fontWeight: 'bold',
      color: 'black',
    },
    quiteFromQueueContainer: {
      width: width*0.35,
      height: height * 0.04,
      borderRadius: 10,
      backgroundColor: 'rgba(0,0,0,0.5)',
      justifyContent: 'center',
      alignItems: 'center'
    },
    quiteFromQueueText: {
      fontSize: height * 0.025,
      fontWeight: 'bold',
      color: '#f2f2f7',
    },
    topContainer: {
      width: width,
      height: height * 0.2,
    },
    topBrandInfoContainer: {
      flexDirection: 'row',
    },
    avatarContainer: {
      width: width * 0.15,
      height: width * 0.15,
      borderRadius: width * 0.075,
      margin: width * 0.02
    },
    avatar: {
      width: width * 0.15,
      height: width * 0.15,
      borderRadius: width * 0.075,
    },
    brandContainer: {
      justifyContent: 'space-evenly',
    },
    brandNameContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    brandTopName: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: width *0.045
    },
    branchTopName: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: width *0.035
    },
    liveContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    live: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      width: width * 0.22,
      height: height * 0.03,
      borderRadius: 15,
      alignItems: 'center',
      backgroundColor: '#007aed'
    },
    liveImage: {
      width: width * 0.05,
      height: width * 0.05,
      borderRadius: width * 0.025
    },
    liveText: {
      color: 'white',
      fontSize: width *0.035
    },
    countText: {
      color: 'white',
      fontSize: width *0.035
    },
    countDownContainer: {
      width: width * 0.15,
      height: height * 0.03,
      borderRadius: 15,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'gray',
      marginLeft: 5
    },
    videoContainer: {
      width: width *0.37,
      height: height * 0.3,
      marginLeft: width * 0.6,
      marginTop: -(height * 0.078),
      justifyContent: 'space-between'
    },
    bottomContainer: {
      height: height *0.2,
      justifyContent: 'space-around',
    },
    buttonContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      width: width,
    },
    actionButtonContainer: {
      width: width * 0.12,
      height: width * 0.12,
      borderRadius: 15,
      justifyContent: 'center',
      alignItems: 'center',
    },
    actionMidButtonContainer: {
      width: width * 0.18,
      height: width * 0.18,
      borderRadius: 15,
      justifyContent: 'center',
      alignItems: 'center',
    },
    messageContainer: {
      justifyContent: 'space-evenly',
      width: width,
      height: height * 0.1,
      flexDirection: 'row',
      alignItems: 'center'
    },
    messageInput: {
      width: width * 0.80,
      height: width * 0.12,
      borderRadius: 15,
      backgroundColor: 'rgba(255,255,255,0.25)',
      paddingLeft: 10
    },
    sendButton: {
      width: width * 0.12,
      height: width * 0.12,
      borderRadius: 15,
      justifyContent: 'center',
      alignItems: 'center'
    },
    basketIcon: {
      width: width * 0.06,
      height: width * 0.06,
    },
    reportIcon: {
      width: width * 0.065,
      height: width * 0.06,
    },
    micIcon: {
      width: width * 0.05,
      height: width * 0.052,
    },
    hangupIcon: {
      width: width * 0.1,
      height: width * 0.04,
    },
    cameraIcon: {
      width: width * 0.07,
      height: width * 0.041,
    },
    voxChangeEventContainer: {
      flexDirection: 'row',
      justifyContent: 'space-evenly'
    },
    changeContainer: {
      width: (35 * width) / 373,
      height: (35 * width) / 373,
      borderRadius: (25 * width) / 373,
      backgroundColor: 'white',
      opacity: 0.5,
      justifyContent: 'center',
      alignItems: 'center'
    },
    changeIcon: {
      width: width * 0.05,
      height: width * 0.06,
    },
    earIcon: {
      width: width * 0.07,
      height: width * 0.038,
    },
});

export default styles;
