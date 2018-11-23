import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux'

import { increaseCounter, decreaseCounter } from '../actions';


class Counting extends Component {
  render() {
    return (
      <View style={{ flexDirection: 'row', width: 200, justifyContent: 'space-around' }}>
        <Button title="Increase" onPress={() => this.props.increaseCounter()} />
        <Text style={{ fontSize: 20 }}>{this.props.count}</Text>
        <Button title="Decrease" onPress={() => this.props.decreaseCounter()} />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  count: state.Counter.counter,
});

const mapDispatchToProps = dispatch => ({
  increaseCounter: () => dispatch(increaseCounter()),
  decreaseCounter: () => dispatch(decreaseCounter()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counting)