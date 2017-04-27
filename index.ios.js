/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import CreatePoll from './ios/app/components/CreatePoll'
import TabBar from './ios/app/components/TabBar'
import NewPollCard from './ios/app/components/NewPollCard'

export default class AwesomeProject extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TabBar />
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

        // <Text style={styles.welcome}>
        //   Welcome to React Native!
        // </Text>
        // <Text style={styles.instructions}>
        //   To get started, edit index.ios.js
        // </Text>
        // <Text style={styles.instructions}>
        //   Press Cmd+R to reload,{'\n'}
        //   Cmd+D or shake for dev menu
        // </Text>