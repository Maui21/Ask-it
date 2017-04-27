import React, { Component } from 'react';
import { Container, Content, Card, CardItem, Text, Body, Button, Item, Input, Icon, Right } from 'native-base';
import InputChoice from './InputChoice'
import OpenPollCard from './OpenPollCard'

const SmallPollCard = props => {
  return (
    <Card>
      <CardItem>
        <Icon active name="logo-googleplus" />
        <Text>{props.poll.title}</Text>
        <Button light onPress={props.handleToggle} style={{alignSelf: 'flex-end'}}>
          <Icon active name="arrow-down" />
        </Button>
      </CardItem>
    </Card>
  )
}

export default SmallPollCard
