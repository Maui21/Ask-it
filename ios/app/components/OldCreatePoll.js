import React, { Component } from 'react';
import { Container, Content, Card, CardItem, Body, Tab, Tabs, Form } from 'native-base';
import PollList from './PollList'
import PollCard from './PollCard'
import CreatePoll from './CreatePoll'
export default class OldCreatePoll extends Component {
  render() {
    return (
      <Form>
        <CreatePoll />
      </Form>
    )
  }
}
