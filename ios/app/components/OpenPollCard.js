import React, { Component } from 'react';
import {Container, Content, Card, CardItem, Text, Body, Button, Item, Input, Icon, Right } from 'native-base';
import ControlledChoices from './ControlledChoice'


const OpenPollCard = props => {
  console.log('my props', props)
  return (
  <Container>
    <Content>
      <Card>
        <CardItem>
          <Icon active name="ios-pricetags" />
          <Text>{props.poll.title}</Text>
          <Button light onPress={props.handleToggle} style={{alignSelf: 'flex-end'}}>
            <Icon active name="arrow-up" />
          </Button>
        </CardItem>
        <ControlledChoices choices={props.poll.choices} />
      </Card>
    </Content>
  </Container>
    )
  }

export default OpenPollCard
