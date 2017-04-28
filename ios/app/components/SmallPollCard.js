import React, { Component } from 'react';
import  {Card, CardItem, Text, Footer, Button, Badge, Item, Input, Icon, Right } from 'native-base';
import InputChoice from './InputChoice'
import OpenPollCard from './OpenPollCard'

const SmallPollCard = props => {
  return (
    <Card>
      <CardItem>
        <Icon active name="ios-megaphone" />
        <Text>{props.poll.title}</Text>
        <Right>
        <Button transparent onPress={props.handleToggle} style={{alignSelf: 'flex-end'}}>
          <Icon active name="arrow-down" />
        </Button>
        </Right>
      </CardItem>
    </Card>
  )
}

export default SmallPollCard
