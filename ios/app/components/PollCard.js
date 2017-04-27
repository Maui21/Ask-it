import React, { Component } from 'react';
import { Container, Content, Card, CardItem, Text, Body, Button, Item, Input, Icon, Right } from 'native-base';
import OpenPollCard from './OpenPollCard'
import SmallPollCard from './SmallPollCard'

export default class PollCard extends Component {
  constructor(props){
    super(props)
    this.state = {
      open: true,
    }
  }

  render() {
    const handleToggle = () =>{
      this.setState({ open: !this.state.open })
    };
    return this.state.open ?
    (<SmallPollCard poll={this.props.poll} handleToggle={handleToggle}/>)
    : (<OpenPollCard poll={this.props.poll} handleToggle={handleToggle}/>)
  }
}
