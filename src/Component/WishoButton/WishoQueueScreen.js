import React, { Component } from 'react';
import { View, Text, ActivityIndicator, TouchableOpacity, SafeAreaView } from 'react-native';
import styles from './styles';

export default class WishoQueueScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <View>
            {
                this.props.loading ? <ActivityIndicator size={'large'} color={'#ff6500'} /> : !this.props.isIncomingCallExist && this.props.isEmployeeAvailable ?
                <View style={styles.queueContainer}>
                    <Text style={styles.queueText}>Görüşme Sıra Numaranız</Text>
                    <View style={styles.queueNumberContainer}>
                      <Text style={styles.queueNumberText}>{this.props.queueNumber}</Text>
                    </View>
                    <TouchableOpacity onPress={this.props.quiteFromQueue}>
                      <View style={styles.quiteFromQueueContainer}>
                        <Text style={styles.quiteFromQueueText}>Sıradan Çık</Text>
                      </View>
                    </TouchableOpacity>
                </View>
                : !this.props.isEmployeeAvailable && !this.props.isIncomingCallExist ?
                <View style={styles.callContainer}>
                  <Text style={[styles.answerCallText, {color: 'black'}]}>Müsait satış personeli bulunamadı. Lütfen kısa bir süre sonra tekrar deneyiniz..</Text>
                </View> :
                <SafeAreaView style={styles.callContainer}>
                  <TouchableOpacity onPress={() => {
                      this.props.toggleClickedCall()
                      this.props.answer()
                    }}>
                    <View style={styles.answerCallView}>
                      <Text style={styles.answerCallText}>Görüşmeyi Başlat</Text>
                    </View>
                  </TouchableOpacity>
                </SafeAreaView>
            }
        </View>
    );
  }
}
