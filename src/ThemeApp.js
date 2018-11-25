import React, { Component } from 'react';
import { View } from 'react-native';

import CustomTabNavigator from './components/CustomTabNavigator';


export default class ThemeApp extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <CustomTabNavigator />
      </View>
    );
  }
}