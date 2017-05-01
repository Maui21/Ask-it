import React, { Component } from 'react';
import  {Card, CardItem, Text, Button, Icon, Right } from 'native-base';


const SmallPollCard = props => {
  return (
    <Card style={{borderwidth: 2, borderColor: 'blue'}}>
      <CardItem>
        <Icon active name="ios-megaphone" />
        <Text>{props.poll.title}</Text>
        <Right>
          <Button transparent onPress={props.handleToggle} style={{alignSelf: 'flex-end'}}>
            <Icon active style={{color: 'blue'}} name="arrow-down" />
          </Button>
        </Right>
      </CardItem>
    </Card>
  )
}

export default SmallPollCard
