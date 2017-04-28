import React, { Component } from 'react';
import { Container, Content, Card, CardItem, Text, Body, Button, Item, InputGroup, Input, Icon, H3, Form, Header, Left, Label, Title, Right } from 'native-base';
import InputChoice from './InputChoice'

export default class NewPollCard extends Component {
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
                      <Form>
                      </Form>
                      <CardItem header style={{flexDirection: 'column', borderBottomWidth: 1, borderColor: 'black'}}>
                            <Item floatingLabel underline>
                              <Label>Title</Label>
                                <Input />
                            </Item>
                      </CardItem>
                        <CardItem>
                          <Item floatingLabel underline>
                          <Label>Context</Label>
                            <Input />
                          </Item>
                        </CardItem>
                      <CardItem style={{borderWidth: 0, flexDirection: 'column'}}>
                        <InputChoice />
                        <InputChoice />
                    </CardItem>
                  </Card>
                  <Body  style={{flexDirection: 'row'}}>
                    <Button block rounded small style={{alignContent: 'flex-end', marginLeft: 0, marginBottom: 10}}><Text>Add Choice</Text></Button>
                    <Button success style={{alignSelf: 'flex-end', margin: 20}}>
                      <Text style={{color: 'white'}}>Ask It!</Text>
                      <Icon active name="arrow-forward" />
                    </Button>
                  </Body>
              </Content>
          </Container>
        );
    }
}

