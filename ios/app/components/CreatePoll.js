import React, { Component } from 'react';
import { Container, Content, Card, CardItem, Text, Body, Button, Item, InputGroup, Input, Icon, H3, Form, Header, Left, Label, Title, Right } from 'native-base';
import InputChoice from './InputChoice'

export default class CreatePoll extends Component {
  constructor(props){
    super(props)
    this.state = {
      NumChoices: 2,
    }
  }
  render() {
      const choices = Array(this.state.NumChoices)
      return (
          <Container>
            <Content>
                <Card>
                  <CardItem header style={{flexDirection: 'column', borderColor: 'black'}}>
                    <Item floatingLabel underline>
                      <Label>Title</Label>
                      <Input />
                    </Item>
                  </CardItem>
                  <CardItem style={{flexDirection: 'column', borderWidth: 0, borderColor: 'black'}}>
                    <Item floatingLabel underline>
                      <Label>Context</Label>
                      <Input />
                    </Item>
                  </CardItem>
                  <CardItem style={{flexDirection: 'column'}}>
                    <Button small rounded block style={{marginLeft: 0}}><Text>Add Choice</Text></Button>
                    <InputChoice />
                    <InputChoice />
                  </CardItem>
              </Card>
              <Item style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
                <Right><Button success style={{margin: 20, alignContent: 'flex-end'}}>
                  <Text style={{color: 'white'}}>Ask It!</Text>
                  <Icon active name="arrow-forward" />
                </Button></Right>
              </Item>
            </Content>
          </Container>
        );
    }
}

