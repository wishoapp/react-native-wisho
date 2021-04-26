import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const WishoButton = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <View
                style={
                    [
                        styles.container,
                        {
                            backgroundColor: props.backgroundColor ?? styles.container.backgroundColor,
                            borderWidth: props.borderWidth ?? styles.container.borderWidth,
                            borderColor: props.borderColor ?? styles.container.borderColor,
                        }
                    ]
                }>
                <Text
                    style={
                        [
                            styles.buttonText,
                            {
                                color: props.textColor ?? styles.buttonText.color,
                                fontWeight: props.textWeight ?? styles.buttonText.fontWeight
                            }
                        ]
                    }>
                    {props.buttonText}
                </Text>
            </View>
        </TouchableOpacity>
    );
}

WishoButton.defaultProps = {
    buttonText: 'Connect via Wisho',
    buttonTextStyle: styles.buttonText
}

export default WishoButton;
import React from 'react';
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
                    <Text style={styles.brandName}>Karaca</Text>
                    <Text style={styles.branchInfo}>{this.props.branches.lenght}</Text>
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