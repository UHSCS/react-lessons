import React, { Component } from 'react';

import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Image,
  List,
  ListItem,
  Notes,
  Quote,
  Slide,
  Text
} from 'spectacle';

import createTheme from 'spectacle/lib/themes/default';

import Highlight from 'react-highlight';
import Prism from 'prismjs';

const images = {
  
};

// Import code highlighting css
import '../highlight.css';

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quaternary: '#CECECE'
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica'
  }
);

export default class Presentation extends Component {
  componentDidMount () {
    Prism.highlightAll();
  }

  render() {
    return (
      <Deck
        transition={['slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={['zoom']} bgColor='primary'>
          <Heading size={1} caps lineHeight={1} textColor='secondary' textSize='175'>
            React
          </Heading>
          <Text margin='10px 0 0' textColor='tertiary' bold textSize='90'>
            Lesson 2
          </Text>
        </Slide>

        <Slide transition={['fade']} bgColor='tertiary'>
          <Heading size={6} textColor='primary' caps>
            Typography
          </Heading>
          <pre className='language-javascript, language-markup'>
            <code className='language-jsx'>
            {`
              function doSomething() {
                return null;
              }
            `}
            </code>
          </pre>
        </Slide>

        <Slide transition={['fade']} bgColor='primary' textColor='tertiary'>
          <Heading size={6} textColor='secondary' caps>
            Standard List
          </Heading>
          <List>
            <ListItem>Item 1</ListItem>
            <ListItem>Item 2</ListItem>
            <ListItem>Item 3</ListItem>
            <ListItem>Item 4</ListItem>
          </List>
        </Slide>

        <Slide transition={['fade']} bgColor='secondary' textColor='primary'>
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite margin='10px 0 0 30px'>Author</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}
