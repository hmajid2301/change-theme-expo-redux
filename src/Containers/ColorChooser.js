import React, { Component } from 'react';
import { View, Button, Text } from 'react-native';
import { connect } from 'react-redux';

import { colorChanged } from '../actions';
import { COLORS } from '../themes';

class ColorChooser extends Component {

  render() {
    return (
      <View>
        {Object.keys(COLORS).map((key) => (
          <Button
            key={key}
            title={COLORS[key].name}
            color={COLORS[key].hexCode}
            onPress={() => this.props.colorChanged(COLORS[key])}
          />
        ))}
        <Text style={{ color: this.props.color.hexCode}}>{this.props.color.name}</Text>
      </View>
    )
  }
}

const mapStateToProps = state => ({
  color: state.Color.colorName,
});

const mapDispatchToProps = dispatch => ({
  colorChanged: color => dispatch(colorChanged(color)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ColorChooser);