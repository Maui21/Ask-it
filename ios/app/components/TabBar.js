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
import SmallPieChart from './SmallPieChart'
import PieChart from './PieChart'
import TripleBD from './TripleBD'
import BasicSVG from './BasicSVG'

export default class TabBar extends Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        store.dispatch(getAllPolls)
    }

    render() {
        return (
            <Container>
                <Header hasTabs >
                    <Body>
                        <Title>Ask It!</Title>
                    </Body>
                </Header>
            <Tabs>
                <Tab heading="Create Poll">
                    <CreatePoll />
                </Tab>
                <Tab heading="Poll List">
                    <PollList polls={store.getState().allPolls}/>
                </Tab>
                <Tab heading="Analyze">
                    <Analyze />
                </Tab>
            </Tabs>
            <Footer>
              <FooterNav />
            </Footer>
            </Container>
        );
    }
}
