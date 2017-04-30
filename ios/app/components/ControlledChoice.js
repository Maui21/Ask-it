import React, { Component } from 'react';
import { Container, Content, Card, CardItem, Text, Body, Button, Item, List, ListItem, CheckBox, Radio } from 'native-base';


const ControlledChoices = props => {
    // console.log('hii', props)
    return (
      <Content>
        {props.choices.map((choice, i) => (
          <ListItem key ={i} underline onPress={e => console.log(e)}>
              <Radio selected={false}/>
              <Text>{choice}</Text>
          </ListItem>
        ))}
      </Content>
    )
  }

export default ControlledChoices

