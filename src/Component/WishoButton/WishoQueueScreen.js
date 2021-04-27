import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import styles from './styles';

export default class WishoQueueScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
        loading: false,
        queue_number: 5
    };

    setInterval(() => {
      this.fetchQueueState();
    }, 1000);
  }

  fetchQueueState = () => {};

  render() {
    return (
        <View>
            {
                this.state.loading ? <ActivityIndicator size={'large'} color={'#ff6500'} /> : 
                <View style={styles.queueContainer}>
                    <Text style={styles.queueText}>Görüşme Sıra Numaranız</Text>
                    <View style={styles.queueNumberContainer}>
                      <Text style={styles.queueNumberText}>{this.state.queue_number}</Text>
                    </View>
                </View>
            }
        </View>
    );
  }
}
