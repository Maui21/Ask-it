import React, {Component} from 'react';
import {Container, Content, Card, CardItem} from 'native-base';
import Svg, {
  AnimateTransform,
  Circle,
  G,
  Line,
  Path,
  Polygon,
  Polyline,
  Rect,
  Symbol,
  Text
} from 'react-native-svg';

export default class BasicSVG extends Component {
  render() {
    return (
      <Svg
          height="100"
          width="100"
      >
          <Circle
              cx="50"
              cy="50"
              r="45"
              stroke="blue"
              strokeWidth="2.5"
              fill="green"
          />
          <Rect
              x="15"
              y="15"
              width="70"
              height="70"
              stroke="red"
              strokeWidth="2"
              fill="yellow"
          />
      </Svg>
    )
  }
}
