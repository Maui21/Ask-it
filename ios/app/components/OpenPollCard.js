import React, { Component } from 'react';
import {Footer, Card, CardItem, Text, Left, Button, Item, Center, Icon, Right } from 'native-base';
import ControlledChoices from './ControlledChoice'
import {voteOnPollChoice} from '../reducers/poll'
import store from '../store'

export default class OpenPollCard extends Component {
  constructor(props){
    super(props)
    this.state = {
      selectedAnswer: null
    }

  }

render() {
  console.log('OPCProps', this.props)
  const vote = (pollId, choiceId, numPollVotes, numChoiceVotes) => {
    console.log('before dispatch', voteOnPollChoice)
    store.dispatch(voteOnPollChoice(pollId, choiceId, numPollVotes, numChoiceVotes))
    console.log('after dispatch')
  }
  const selectAnswer = (i) => {
    this.setState({selectedAnswer: this.props.poll.choice[i]})
    console.log(this.state.selectedAnswer)
  }
  return (
      <Card style={{borderwidth: 1, borderColor: 'green'}}>
        <CardItem>
          <Icon active name="md-pie" />
          <Text style={{color: 'green'}}>{this.props.poll.title}</Text>
          <Right>
            <Button transparent onPress={this.props.handleToggle}>
              <Icon style={{color: 'green'}} active name="arrow-up" />
            </Button>
          </Right>
        </CardItem>
        <CardItem>
          <Text  style={{fontStyle: 'italic'}}>{this.props.poll.context}</Text>
        </CardItem>
        <ControlledChoices poll={this.props.poll} vote={vote} choices={this.props.poll.choices} />
        <Footer>
          <Left><Text style={{marginLeft: 10}} >{`${this.props.poll.totalVotes} ${'users'}`}</Text></Left>
          <Button style={{marginTop: 10}} small success><Text>Analyze Results</Text></Button>
          <Right><Text style={{marginRight: 10}} >{`${this.props.poll.owner.name}`}</Text></Right>
        </Footer>
      </Card>
    )
  }
}
