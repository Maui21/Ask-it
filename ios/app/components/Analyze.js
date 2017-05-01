import React, {Component} from 'react';
import {Container, Tab, Tabs} from 'native-base';

import Guage from './Guage'
import SmallPieChart from './SmallPieChart'
import DoubleBD from './DoubleBD'
import TripleBD from './TripleBD'

export default class BasicSVG extends Component {
  render() {
    return (
      <Container>
            <Tabs>
                <Tab heading="Guage">
                    <Guage />
                </Tab>
                <Tab heading="Pie Chart">
                    <SmallPieChart />
                </Tab>
               <Tab heading="Double">
                    <DoubleBD />
                </Tab>
                <Tab heading="Triple">
                    <TripleBD />
                </Tab>
            </Tabs>
        </Container>
    )
  }
}
