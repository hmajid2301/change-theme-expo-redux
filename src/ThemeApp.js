import React, { Component } from 'react';
import { View } from 'react-native';

import Counting from './Containers/Counting';
import ColorChooser from './Containers/ColorChooser';


export default class ThemeApp extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <View>
          <Counting />
          <ColorChooser />
        </View>
      </View>
    );
  }
}