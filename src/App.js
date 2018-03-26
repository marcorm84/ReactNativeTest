/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import Reducers from './reducers'
import SuperheroesList from './superheroesList'
import configureStore from './configureStore'

let store = configureStore()

const App = () => (

  <Provider store={store}>
    <View style={styles.MainContainer}>
      <SuperheroesList />
    </View>
  </Provider>
)

const styles = StyleSheet.create({ 
	MainContainer :{
		flex:1,
		margin: 10
	}
});

export default App