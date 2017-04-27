import React, { Component } from 'react';
import { Container, Content, Card, CardItem, Body, Tab, Tabs, Form } from 'native-base';
import NewPollCard from './NewPollCard'
import PollList from './PollList'
import PollCard from './PollCard'

export default class CreatePoll extends Component {
  render() {
    return (
      <Form>
        <NewPollCard />
      </Form>
    )
  }
}
