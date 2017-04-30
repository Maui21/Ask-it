import React, { Component } from 'react';
import { Container, Content, Card, CardItem, Text, Body, Button, Item, InputGroup, Input, Icon, H3, Form, Header, Left, Label, Title, Right } from 'native-base';
import InputChoice from './InputChoice'

export default class CreatePoll extends Component {
  constructor(props){
    super(props)
    this.state = {
      numChoices: [0, 1],
      title: '',
      context: '',
      answers: []
    }
  }

  render() {
    const createAnswer = (eventAnswer) => {
      // console.log('value', eventAnswer._targetInst._currentElement)
      const choiceValue = eventAnswer._targetInst._currentElement.props.className.value
      const choiceId = eventAnswer._targetInst._currentElement.props.className['data-zzz']
      const newArr = [...this.state.answers]
      newArr[choiceId] = choiceValue
      console.log('items', newArr, choiceId, choiceValue)
      this.setState({answers: newArr})
      console.log('state', this.state)
    }
    const nextVal = this.state.numChoices.length
    return (
        <Container>
          <Content>
              <Card>
                <CardItem header style={{flexDirection: 'column', borderColor: 'black'}}>
                  <Item floatingLabel underline>
                    <Label>Title</Label>
                    <Input value={this.state.title} onChangeText={(input) => {
                      this.setState({title: input})
                    }}/>
                  </Item>
                </CardItem>
                <CardItem style={{flexDirection: 'column', borderWidth: 0, borderColor: 'black'}}>
                  <Item floatingLabel underline>
                    <Label>Context</Label>
                    <Input value={this.state.context} onChangeText={(input) => {
                      this.setState({context: input})
                    }}/>
                  </Item>
                </CardItem>
                <CardItem style={{flexDirection: 'column'}}>
                  <Button small rounded block style={{marginLeft: 0}}
                    onPress={()=>{
                      this.setState({numChoices: [...this.state.numChoices, nextVal]})
                    }}>
                    <Text>Add Choice</Text>
                  </Button>
                  {
                    this.state.numChoices.map((choice, i) => {
                      return (
                        <InputChoice
                          key={i}
                          data-zzz={choice}
                          handleChange={createAnswer}
                        />
                      )
                    })
                  }
                </CardItem>
            </Card>
            <Item style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
              <Right><Button success style={{margin: 20, alignContent: 'flex-end'}}
                onPress={(e) => console.log(this.state)}>
                <Text style={{color: 'white'}}>Ask It!</Text>
                <Icon active name="arrow-forward" />
              </Button></Right>
            </Item>
          </Content>
        </Container>
      );
    }
}

// ()=>this.setState({numChoices: [...this.state.numChoices, this.state.numChoices[-1]++]})
