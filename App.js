import React, { Component } from "react";
import { Provider } from 'react-redux'

import store from './src/store';
import ThemeApp from './src/ThemeApp'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ThemeApp />
      </Provider>
    );
  }
};
