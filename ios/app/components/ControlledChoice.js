import React, { Component } from 'react';
import {Content, Card, CardItem, Text, Item, List, ListItem, CheckBox, Radio } from 'native-base';

const ControlledChoices = props => {
  console.log('CCprops', props)
    return (
      <Content>
        {props.choices.map((choice, i) => (
          <ListItem key={choice.id} data-zzz={i} underline onPress={() => {
            console.log('hit button')
            props.vote(1,0)
            console.log('after vote')
          }}>
              <Radio selected={false}/>
              <Text>{choice.text}</Text>
          </ListItem>
        ))}
      </Content>
    )
  }

export default ControlledChoices

// props.vote(props.choices[i].votes, props.choices[i].id)
