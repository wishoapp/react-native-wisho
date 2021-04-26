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
      position: 'absolute'
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
    },
});

export default styles;
