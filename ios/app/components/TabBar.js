import React, { Component } from 'react';
import { Container, Content, Tab, Tabs, Header, Footer, FooterTab, Button, Text, Left, Body, Title, Right, Icon } from 'native-base';
import NewPollCard from './NewPollCard';
import PollList from './PollList';
import PollCard from './PollCard'
import FooterNav from './FooterNav'
import initialState from '../initialState'

export default class TabBar extends Component {
    render() {
        console.log('TB',initialState.allPolls)
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
                    <PollList polls={initialState.allPolls}/>
                </Tab>
                <Tab heading="Create Poll">
                    <NewPollCard />
                </Tab>
            </Tabs>
            <Footer>
              <FooterNav />
            </Footer>
            </Container>
        );
    }
}
                // <Tab heading="Poll Card">
                //     <PollCard />
                // </Tab>
