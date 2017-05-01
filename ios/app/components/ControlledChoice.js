import React, { Component } from 'react';
import {Content, Card, CardItem, Text, Item, List, Right, ListItem, CheckBox, Radio } from 'native-base';
import {AlertIOS} from 'react-native'
const ControlledChoices = props => {
  console.log('CCprops', props)
    return (
      <Content>
        {props.choices.map((choice, i) => (
          <ListItem key={choice.id} data-zzz={i} underline onPress={() => {
            props.vote(props.poll.id, props.choices[i].id)
            AlertIOS.alert(
            `You chose: \n${choice.text}`,
            'Thanks for voting!',
            [
              {text: 'View Results', onPress: () => console.log('View Pressed'), style: 'cancel'},
              {text: 'Keep Voting', onPress: () => console.log('Continue Pressed')},
            ]
          )
          }}>
            <Radio selected={false}/>
            <Text>{choice.text}</Text>
            <Right><Text>{`${(choice.votes / props.poll.totalVotes).toFixed(2)}% (${choice.votes})`}</Text></Right>
          </ListItem>
        ))}
      </Content>
    )
  }

export default ControlledChoices

