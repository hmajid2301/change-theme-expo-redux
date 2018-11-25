import React, { Component } from 'react';
import { View, Text } from 'react-native';

import Counting from '../Containers/Counting';
import ToggleTheme from '../Containers/ToggleTheme';

export default class PageA extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Counting />
        <ToggleTheme />
        <Text>PageA</Text>
      </View>
    );
  }
}
