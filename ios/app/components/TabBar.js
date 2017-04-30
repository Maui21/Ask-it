import React, { Component } from 'react';
import { Container, Content, Tab, Tabs, Header, Footer, FooterTab, Button, Text, Left, Body, Title, Right, Icon } from 'native-base';
import PollList from './PollList';
import CreatePoll from './CreatePoll';
import PollCard from './PollCard'
import FooterNav from './FooterNav'
import initialState from '../initialState'
import InputChoice from './InputChoice'
import getAllPolls from '../reducers/poll'
import store from '../store'
import Analyze from './Analyze'
import TripleBD from './TripleBD'

export default class TabBar extends Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        store.dispatch(getAllPolls)
    }
    render() {
        // console.log('store', store.getState())
        // console.log('initial state',initialState)
        // console.log('TB',initialState.allPolls)
        return (
            <Container>
                <Header hasTabs >
                    <Left>
                        <Button transparent>
                            <Icon name='menu' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Ask It!</Title>
                    </Body>
                    <Right />
                </Header>
            <Tabs>
                <Tab heading="Poll List">
                    <PollList polls={store.getState().allPolls} />
                </Tab>
                <Tab heading="Create Poll">
                    <CreatePoll />
                </Tab>
                <Tab heading="Analyze">
                    <TripleBD />
                </Tab>
            </Tabs>
            <Footer>
              <FooterNav />
            </Footer>
            </Container>
        );
    }
}
