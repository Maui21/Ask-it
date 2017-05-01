import React, { Component } from 'react';
import {Container, Tab, Tabs} from 'native-base'
import Svg, {
  AnimateTransform,
  G,
  Line,
  Path,
  Polygon,
  Polyline,
  Rect,
  Symbol,
  Text
} from 'react-native-svg';

import SmallPieChart from './SmallPieChart'
import PieChart from './PieChart'
import TripleBD from './TripleBD'
import BasicSVG from './BasicSVG'

class Guage extends Component {
  render() {
    return (
      <Svg
        width="492"
        height="300">
        <G>
          <Path d="M 46 240 A 200 200 0 0 1 446 240 L 371 240 A 125 125 0 0 0 121 240 Z" stroke="#CCCCCC" stroke-width="1" fill="#EEEEEE">
          </Path>
        </G>
        <G>
          <Path d="M 46 240 A 200 200 0 0 1 350.0595363153877 69.20300675413952 L 311.0372101971173 133.2518792213372 A 125 125 0 0 0 121 240 Z" stroke="#CCCCCC" stroke-width="1" fill="#99CF24" transform="">
            <AnimateTransform attributeName="transform" type="rotate" from="-121.35222150676111 246 240" to="0 246 240" dur="1s" repeatCount="1"></AnimateTransform>
          </Path>
          <Rect fill="white" x="0" y="240" width="492" height="300"></Rect>
        </G>
        <G>
          <Text x="83.5" y="255" style="color:#666666; font-weight:normal; cursor:default; font-size:12px; fill:#666666; text-overflow:clip;" text-anchor="middle">0
              </Text>
          <Text x="408.5" y="255" style="color:#666666; font-weight:normal; cursor:default; font-size:12px; fill:#666666; text-overflow:clip;" text-anchor="middle">100
              </Text>
          <Text x="246" y="240" style="color:#666666; font-weight:bold; cursor:default; font-size:50px; fill:black; text-overflow:clip;" text-anchor="middle">67%
              </Text>
        </G>
      </Svg>
    )
  }
}

export default Guage
