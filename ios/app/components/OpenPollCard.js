import React, { Component } from 'react';
import {Footer, Card, CardItem, Text, Left, Button, Item, Input, Icon, Right } from 'native-base';
import ControlledChoices from './ControlledChoice'


const OpenPollCard = props => {
  console.log('my props', props)
  return (
      <Card>
        <CardItem>
          <Icon active name="md-pie" />
          <Text>{props.poll.title}</Text>
          <Right>
            <Button transparent onPress={props.handleToggle}>
              <Icon active name="arrow-up" />
            </Button>
          </Right>
        </CardItem>
        <ControlledChoices choices={props.poll.choices} />
        <Footer>
          <Left><Text style={{marginLeft: 10}} >{`${props.poll.totalVotes} ${'users'}`}</Text></Left>
          <Right><Text style={{marginRight: 10}} >{`Judah`}</Text></Right>
        </Footer>
      </Card>
    )
  }

export default OpenPollCard
