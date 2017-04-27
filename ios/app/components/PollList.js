import React, { Component } from 'react';
import { Container, Content, Card, CardItem, Text, Icon, Right } from 'native-base';
import PollCard from './PollCard'

const PollList = props => {
    console.log('PL', props)
    return (
        <Container>
            <Content>
            {props.polls.map((poll, i) => {
                return <PollCard key={i} poll={poll} />
            })}
            </Content>
        </Container>
    );
}


export default PollList

                // <Card>
                // <CardItem>
                //     <Icon active name="logo-googleplus" />
                //     <Text>Google Plus</Text>
                //     <Right>
                //         <Icon name="arrow-forward" />
                //     </Right>
                //     </CardItem>
                // <CardItem>
                //     <InputChoice />
                //     </CardItem>
                // </Card>
