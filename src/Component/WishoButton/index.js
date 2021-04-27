import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import WishoModal from './WishoModal';

class WishoButton extends React.Component {
  state = {
    branchListModal: false,
  }

  toggleModal = () => {
    this.setState({branchListModal: !this.state.branchListModal});
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
                branches={this.props.branches}
                isBranchListExist={this.props.branchList}
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