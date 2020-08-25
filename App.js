import React, { Component } from 'react';
import { View, Text } from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Feed screen</Text>
      </View>
    );
  }
}
