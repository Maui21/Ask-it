import React, {Component} from 'react';
import Svg, {G, Path, Rect, Text} from 'react-native-svg';

export default class DoubleBD extends Component {
  render() {
    return (
        <Svg width="452" height="318">
        <G>
        <Path d="M 37 166.66666666666666 L 451 166.66666666666666" stroke="#CCCCCC" stroke-width="1">
        </Path>
        <Path d="M 37 108.33333333333333 L 451 108.33333333333333" stroke="#CCCCCC" stroke-width="1">
        </Path>
        <Path d="M 37 50 L 451 50" stroke="#CCCCCC" stroke-width="1">
        </Path>
        </G>
        <G>
        <Rect stroke="#7CB5EC" stroke-width="1" fill="#7CB5EC" x="81.35714285714286" y="67.94871794871793" width="42.244897959183675" height="157.05128205128207">
        </Rect>
        <Rect stroke="#434348" stroke-width="1" fill="#434348" x="137.3979591836735" y="90.38461538461539" width="42.244897959183675" height="134.6153846153846">
        </Rect>
        <Rect stroke="#7CB5EC" stroke-width="1" fill="#7CB5EC" x="258.35714285714283" y="58.33333333333334" width="42.244897959183675" height="166.66666666666666">
        </Rect>
        <Rect stroke="#434348" stroke-width="1" fill="#434348" x="314.39795918367344" y="100.00000000000001" width="42.244897959183675" height="124.99999999999999">
        </Rect>
        </G>
        <G>
        <Rect id="ghost0" fill="transparent" x="37" y="50" width="207" height="175">
        </Rect>
        <Rect id="ghost1" fill="transparent" x="244" y="50" width="207" height="175">
        </Rect>
        <Rect id="ghost2" fill="transparent" x="451" y="50" width="207" height="175">
        </Rect>
        </G>
        <G>
        <Path d="M 37 225 L 451 225" stroke="#C0D0E0" stroke-width="1">
        </Path>
        <Path d="M 37 225 L 37 235" stroke="#C0D0E0" stroke-width="1">
        </Path>
        <Path d="M 244 225 L 244 235" stroke="#C0D0E0" stroke-width="1">
        </Path>
        <Path d="M 451 225 L 451 235" stroke="#C0D0E0" stroke-width="1">
        </Path>
        </G>
        <G>
        <Text x="140.5" y="245" style="color:#666666; font-weight:normal; cursor:default; font-size:12px; fill:#666666; Text-overflow:clip;" Text-anchor="middle">
        </Text>
        <Text x="347.5" y="245" style="color:#666666; font-weight:normal; cursor:default; font-size:12px; fill:#666666; Text-overflow:clip;" Text-anchor="middle">
        </Text>
        <Text x="27" y="228" style="color:#666666; font-weight:normal; cursor:default; font-size:12px; fill:#666666; Text-overflow:clip;" Text-anchor="end">0%
        </Text>
        <Text x="27" y="169.66666666666666" style="color:#666666; font-weight:normal; cursor:default; font-size:12px; fill:#666666; Text-overflow:clip;" Text-anchor="end">20%
        </Text>
        <Text x="27" y="111.33333333333333" style="color:#666666; font-weight:normal; cursor:default; font-size:12px; fill:#666666; Text-overflow:clip;" Text-anchor="end">40%
        </Text>
        <Text x="27" y="53" style="color:#666666; font-weight:normal; cursor:default; font-size:12px; fill:#666666; Text-overflow:clip;" Text-anchor="end">60%
        </Text>
        <Text x="0" y="30" style="color:#666666; font-weight:normal; cursor:default; font-size:12px; fill:#666666; Text-overflow:clip;" Text-anchor="start">percentage of each sub-group
        </Text>
        </G>
        <G>
        <Rect stroke="#7CB5EC" stroke-width="1" fill="#7CB5EC" x="198.5390625" y="280" width="10" height="10">
        </Rect>
        <Text x="213.5390625" y="289" style="color:#666666; font-weight:bold; cursor:default; font-size:12px; fill:#666666; Text-overflow:clip;" Text-anchor="start">
        </Text>
        <Rect stroke="#434348" stroke-width="1" fill="#434348" x="198.5390625" y="295" width="10" height="10">
        </Rect>
        <Text x="213.5390625" y="304" style="color:#666666; font-weight:bold; cursor:default; font-size:12px; fill:#666666; Text-overflow:clip;" Text-anchor="start">
        </Text>
        </G>
        </Svg>
    )
  }
}
