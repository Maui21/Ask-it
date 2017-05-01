import React, {Component} from 'react';

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

export default class SmallPieChart extends Component {
  render() {
    return (

      <Svg width="452" height="238">
        <G>
          <Path
            id="thickness0"
            fill="#639CD3"
            d="M 226 20 A 100 65 0 0 1 318.3879532511287 109.87442310373085 L 318.3879532511287 115.87442310373085 A 100 65 0 0 0 226 26 Z"></Path>
          <Path
            id="thickness1"
            fill="#2A2A2F"
            d="M 318.3879532511287 109.87442310373085 A 100 65 0 1 1 225.99999999999994 20 L 225.99999999999994 26 A 100 65 0 1 0 318.3879532511287 115.87442310373085 Z"></Path>
        </G>
        <G>
          <Path
            id="slice0"
            stroke="white"
            stroke-width="1"
            fill="#7CB5EC"
            d="M 226 20 A 100 65 0 0 1 318.3879532511287 109.87442310373085 L 226 85 Z"></Path>
          <Path
            id="slice1"
            stroke="white"
            stroke-width="1"
            fill="#434348"
            d="M 318.3879532511287 109.87442310373085 A 100 65 0 1 1 225.99999999999994 20 L 226 85 Z"></Path>
        </G>
      </Svg>
    )
  }
}

        // <G>
        //   <Rect
        //     stroke="#7CB5EC"
        //     stroke-width="1"
        //     fill="#7CB5EC"
        //     x="177.3828125"
        //     y="191"
        //     width="10"
        //     height="10"></Rect>
        //   <Text
        //     x="192.3828125"
        //     y="200"
        //     style="color:#666666; font-weight:bold; cursor:default; font-size:12px; fill:#666666; Text-overflow:clip;"
        //     Text-anchor="start">Admissible
        //   </Text>
        //   <Rect
        //     stroke="#434348"
        //     stroke-width="1"
        //     fill="#434348"
        //     x="177.3828125"
        //     y="206"
        //     width="10"
        //     height="10"></Rect>
        //   <Text
        //     x="192.3828125"
        //     y="215"
        //     style="color:#666666; font-weight:bold; cursor:default; font-size:12px; fill:#666666; Text-overflow:clip;"
        //     Text-anchor="start">Not admissible
        //   </Text>
        // </G>
