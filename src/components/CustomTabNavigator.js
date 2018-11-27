import React, { Component } from 'react';
import store from '../store';
import { createMaterialTopTabNavigator } from 'react-navigation';

import PageA from '../screens/PageA';
import PageB from '../screens/PageB';
import { COLORS } from '../themes';
import { toggleTheme } from '../actions';
import { connect } from 'react-redux';


const commonTabOptions = color => ({
  activeTintColor: 'white',
  pressColor: '#fff',
  inactiveTintColor: '#ddd',
  style: {
    backgroundColor: color,
  },
});

const commonTabPress = (navigation, defaultHandler, color) => {
  toggleTheme(color)
  defaultHandler();
}

const CustomerTabNavigator = createMaterialTopTabNavigator({
  Encoding: {
    screen: PageA,
    navigationOptions: {
      tabBarLabel: 'A',
      tabBarOptions: commonTabOptions(COLORS.red.hexCode),
      tabBarOnPress: ({ navigation, defaultHandler }) => {
        store.dispatch(toggleTheme(COLORS.blue));
        console.log("HELLO A");
        defaultHandler();
      },
    },
  },
  Decoding: {
    screen: PageB,
    navigationOptions: {
      tabBarLabel: 'B',
      tabBarOptions: commonTabOptions(COLORS.blue.hexCode),
      tabBarOnPress: ({ navigation, defaultHandler }) => {
        store.dispatch(toggleTheme(COLORS.red));
        console.log("HELLO B");
        defaultHandler();
      },
    },
  },
}, {
    tabBarPosition: 'bottom',
});


const mapStateToProps = state => ({
  color: state.Theme.colorData,
});

const mapDispatchToProps = dispatch => ({
  toggleTheme: color => dispatch(toggleTheme(color)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CustomerTabNavigator);