/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Start from './pages/start';
import reducer from './redux/reducers/index';

let store = createStore(reducer);

export default class Application extends Component {
  render() {
    return (
      <Provider store={store}>
        <Start />
      </Provider>
    );
  }
}
