import React, { Component } from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import styles from './styles';

export default class WishoBranch extends Component {
  render() {
    return (
        <View key={this.props.item.id} style={styles.containerBranch}>
            <View style={styles.logoContainer}>
                <Image
                source={{
                    uri: this.props.item.brand.logo_url,
                }}
                style={styles.logo}
                resizeMode={'cover'}
                />
            </View>
            <View style={styles.content}>
                <View style={styles.brand}>
                <Text style={styles.branchName}>
                    {this.props.item.address}, {this.props.item.city.name}
                </Text>
                </View>
            </View>
            <View style={styles.callContainer}>
                <TouchableWithoutFeedback onPress={this.props.bindUserToQueue}>
                <Image
                    source={{uri: 'https://wisho.s3-eu-west-1.amazonaws.com/video_call.png'}}
                    style={styles.callImage}
                />
                </TouchableWithoutFeedback>
            </View>
        </View>
    );
  }
}
