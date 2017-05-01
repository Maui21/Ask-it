import React, { Component, PropTypes } from 'react';
import { NavigatorIOS, Text, View, TouchableHighlight } from 'react-native';
import PieChart from './PieChart'

export default class NavigatorIOSApp extends Component {
  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: PieChart,
          title: 'My Initial Scene',
        }}
        style={{flex: 1}}
      />
    );
  }
}


