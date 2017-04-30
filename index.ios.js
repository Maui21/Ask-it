/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {AppRegistry, StyleSheet, View} from 'react-native';
import TabBar from './ios/app/components/TabBar'

import store from './ios/app/store'
import {getAllPolls} from './ios/app/reducers/poll'

function onEnter(){
  store.dispatch(getAllPolls())
}

export default class AwesomeProject extends Component {
  componentDidMount(){
      store.dispatch(getAllPolls())
      console.log('mounted')
      console.log('state after home mount',store.getState())
  }
  render() {
    return (
      <View style={styles.container}>
        <TabBar entry={onEnter} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);

