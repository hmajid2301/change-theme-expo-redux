import React, { Component } from 'react';
import { View, Button } from 'react-native';
import { connect } from 'react-redux';

import { toggleTheme } from '../actions';
import Headline from '../components/Headline';


class ToggleTheme extends Component {

  render() {
    return (
      <View>
        <Button
          title="Toggle Color"
          color={this.props.color.hexCode}
          onPress={() => this.props.toggleTheme(this.props.color)}
        />
        <Headline color={this.props.color.hexCode} text="Testing" />
      </View>
    )
  }
}

const mapStateToProps = state => ({
  color: state.Theme.colorData,
});

const mapDispatchToProps = dispatch => ({
  toggleTheme: color => dispatch(toggleTheme(color)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ToggleTheme);