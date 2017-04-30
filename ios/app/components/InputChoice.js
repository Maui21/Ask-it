import React, { Component } from 'react';
import { Container, Content, Card, CardItem, Text, Body, Button, Item, Input, Label } from 'native-base';
import {View} from 'react-native';


const InputChoice = props => {
    return (
      <Body style={{marginBottom: 10}}>
        <Item floatingLabel underline>
          <Label>Answer Choice</Label>
            <Input
              className={props}
              onChange={props.handleChange}
            />
        </Item>
      </Body>
    )
  }


export default InputChoice

// this.className['data-zzz']
