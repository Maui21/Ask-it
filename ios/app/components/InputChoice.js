import React, { Component } from 'react';
import { Container, Content, Card, CardItem, Text, Body, Button, Item, Input, Label } from 'native-base';
import {View} from 'react-native';

export default class InputChoice extends Component {
  render() {
    return (
      <Body style={{marginBottom: 10}}>
        <Item floatingLabel underline>
          <Label>Answer Choice</Label>
            <Input />
        </Item>
      </Body>
    )
  }
}
