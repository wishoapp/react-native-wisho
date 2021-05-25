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
    height: height,
    width: width,
    bottom: 0,
    position: 'absolute',
    justifyContent: 'space-between',
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
    marginLeft: width * 0.7,
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
  cartModalContainer: {
    flex: 1,
    backgroundColor: '#f2f2f7',
    height: height * 0.7,
    width: width,
    bottom: 0,
    position: 'absolute',
    justifyContent: 'space-between',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    alignItems: 'center'
  },
  cartContainerTop: {
    flex: 5,
  },
  cartContainerBottom: {
    flex: 1.5,
    alignItems: 'center',
  },
  cartTextContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartText: {
    color: '#7b8098',
    fontSize: height * 0.024,
    fontWeight: 'bold'
  },
  productContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  cartTextContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartText: {
    color: '#7b8098',
    fontSize: height * 0.024,
  },
  cartTextSubtitle: {
    color: '#7b8098',
    fontSize: (width * 15) / 373,
    textAlign: 'justify',
  },
  totalandShippingContainer: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: width * 0.9146,
    height: height * 0.06157,
    borderBottomColor: '#dcdeed',
    borderBottomWidth: 1,
    borderTopColor: '#dcdeed',
    borderTopWidth: 1,
  },
  totalPart: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightColor: '#dcdeed',
    borderRightWidth: 1,
  },
  totalText: {
    color: '#7b8098',
    fontSize: height * 0.017,
  },
  totalAmount: {
    color: 'black',
    fontSize: height * 0.022,
    fontWeight: 'bold',
  },
  shippingPart: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  confirmButton: {
    width: width * 0.914667,
    justifyContent: 'center',
    alignItems: 'center',
    height: height * 0.064,
    marginBottom: 15,
    marginTop: 15,
    borderRadius: width * 0.026,
  },
  noConfirmButton: {
    width: width * 0.914667,
    justifyContent: 'center',
    alignItems: 'center',
    height: height * 0.064,
    marginBottom: 15,
    marginTop: 15,
    borderRadius: width * 0.026,
    backgroundColor: '#a5a8ba',
  },
  confirmButtonText: {
    color: 'white',
    fontSize: height * 0.024,
  },
  cancelButton: {
    backgroundColor: 'white',
    width: width * 0.914667,
    justifyContent: 'center',
    alignItems: 'center',
    height: height * 0.064,
    marginBottom: 15,
    borderRadius: width * 0.026,
    borderWidth: 0.5,
    borderColor: '#dcdeed',
  },
  cancelButtonText: {
    color: '#ff6500',
    fontSize: height * 0.024,
    fontWeight: 'bold',
  },
  productContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    padding: 10,
    backgroundColor: 'white',
    width: width * 0.9146,
    justifyContent: 'center',
    borderRadius: width * 0.04,
  },
  avatarView: {
    flex: 0.18,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
    marginRight: 7,
  },
  avatarImage: {
    width: width * 0.165,
    height: height * 0.076,
    borderColor: '#dcdeed',
    borderRadius: width * 0.04,
  },
  closeIcon: {
    backgroundColor: 'gray',
    width: height * 0.024,
    height: height * 0.024,
    borderRadius: (height * 0.024) / 2,
    marginRight: (height * 0.024) / 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  removeAndPrice: {
    flex: 0.3,
    alignItems: 'flex-end',
  },
  removeCartItemText: {
    textAlign: 'center',
    color: 'white',
  },
  brandComponents: {
    flex: 0.8,
    paddingLeft: 15,
    justifyContent: 'space-evenly',
  },
  priceText: {
    color: '#ff6500',
    fontSize: height * 0.0164,
    marginTop: (height * 0.024) / 2,
    marginRight: (height * 0.024) / 2,
  },
  brandName: {
    color: '#7b8098',
    fontSize: height * 0.01354,
    lineHeight: 15,
  },
  productName: {
    fontSize: 15.5,
    color: 'black',
    flexWrap: 'wrap',
    lineHeight: 15,
  },
  decrementButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#007aed',
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
  },
  incrementButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#007aed',
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
  },
  orderNum: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#006bd1',
  },
  incrementButtonContainer: {
    flexDirection: 'row',
    width: width * 0.15,
    height: height * 0.0309,
    marginRight: 5,
  },
  incrementText: {
    color: 'white',
    fontWeight: '700',
    fontSize: height * 0.019,
  },
  brandDetailText: {
    color: '#7b8098',
    fontSize: height * 0.016,
  },
  brandDetailContainer: {
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: '#a5a8ba',
    justifyContent: 'center',
    marginLeft: 5,
    padding: 1.8,
    height: height * 0.0309,
    marginBottom: 2,
  },
  emptyComponentView: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0,
    flex: 1,
  },
  emptyComponentIconView: {
    width: 94,
    height: 94,
    borderRadius: 47,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  emptyComponentImage: {
    width: 45,
    height: 58,
  },
  emptyComponentTextView: {
    flex: 1,
    alignItems: 'center',
  },
  emptyComponentTitle: {
    width: width * 0.7,
    textAlign: 'center',
    color: '#7b8098',
    fontSize: 17,
  },
  emptyComponentText: {
    width: width * 0.8,
    textAlign: 'center',
    color: '#7b8098',
    fontSize: 15,
  },
  answerCallView: {
    justifyContent: 'center',
    alignItems: 'center',
    height: height*0.05,
    width: width*0.3,
    backgroundColor: '#ff6500',
    borderRadius: 10,
  },
  answerCallText: {
    textAlign: 'center',
    fontSize: height*0.017,
    fontWeight: 'bold',
    color: 'white'
  },
  selfview: {
    width: (94 * width) / 373,
    height: (166 * height) / 812,
  },
  remoteVideo: {
    width: width,
    height: height + 50,
  },
});

export default styles;
