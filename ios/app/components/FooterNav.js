import React, { Component } from 'react';
import { Container, Content, Footer, FooterTab, Button, Text } from 'native-base';

export default class FooterNav extends Component {
    render() {
        return (
            <Container>
              <Footer >
                  <FooterTab>
                      <Button>
                          <Text>Life</Text>
                      </Button>
                      <Button>
                          <Text>Friends</Text>
                      </Button>
                      <Button active>
                          <Text>Main</Text>
                      </Button>
                      <Button>
                          <Text>Settings</Text>
                      </Button>
                  </FooterTab>
              </Footer>
            </Container>
        );
    }
}
