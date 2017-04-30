import React, { Component } from 'react';
import {Footer, Card, CardItem, Text, Left, Button, Item, Input, Icon, Right } from 'native-base';
import ControlledChoices from './ControlledChoice'
import {voteOnPoll} from '../reducers/poll'
import store from '../store'

export default class OpenPollCard extends Component {
  constructor(props){
    super(props)
    this.state = {
      selectedAnswer: null
    }

  }

render() {
  const vote = (choiceId, numVotes) => {
    console.log('before dispatch')
    store.dispatch(voteOnPoll(choiceId, numVotes))
    console.log('after dispatch')
  }
  const selectAnswer = (i) => {
    this.setState({selectedAnswer: this.props.poll.choice[i]})
    console.log(this.state.selectedAnswer)
  }
  return (
      <Card>
        <CardItem>
          <Icon active name="md-pie" />
          <Text>{this.props.poll.title}</Text>
          <Right>
            <Button transparent onPress={this.props.handleToggle}>
              <Icon active name="arrow-up" />
            </Button>
          </Right>
        </CardItem>
        <ControlledChoices vote={vote} choices={this.props.poll.choices} />
        <Footer>
          <Left><Text style={{marginLeft: 10}} >{`${this.props.poll.totalVotes} ${'users'}`}</Text></Left>
          <Right><Text style={{marginRight: 10}} >{`Judah`}</Text></Right>
        </Footer>
      </Card>
    )
  }
}
