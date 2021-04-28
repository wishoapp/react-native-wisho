import React, { Component } from 'react';
import { View, Text, ActivityIndicator, TouchableOpacity } from 'react-native';
import styles from './styles';

export default class WishoQueueScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <View>
            {
                this.props.loading ? <ActivityIndicator size={'large'} color={'#ff6500'} /> : 
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
            }
        </View>
    );
  }
}
