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
  Text,
  ComponentPlayground,
  CodePane,
  Code
} from 'spectacle';

import createTheme from 'spectacle/lib/themes/default';

import Highlight, { defaultProps } from 'prism-react-renderer';
import vsDarkPlus from 'prism-react-renderer/themes/vsDarkPlus';

// Import code highlighting css
import '../highlight.css';

// Require CSS
require('normalize.css');

import { code } from './code';

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
  }

  render() {
    return (
      <Deck
        transition={['slide']}
        transitionDuration={500}
        theme={theme}
        progress='bar'
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
          <Heading size={5} textColor='primary'>
            Last week...
          </Heading>
          <CodePane
            lang='jsx'
            source={code.html_form_1}
            theme='external'
            overflow='overflow'
            textSize='20'
          />
        </Slide>

        <Slide transition={['fade']} bgColor='primary' textColor='tertiary'>
          <Heading size={4} textColor='secondary' caps>
            JSX
          </Heading>
          <Text textSize='32'>
            Consider the following...
          </Text>
          <CodePane
            lang='jsx'
            source={code.jsx_example}
            theme='external'
            overflow='scroll'
            textSize='32'
          />
          <List textColor='tertiary'>
            <ListItem>XML/HTML-like markup language</ListItem>
            <ListItem>Not entirely a string, nor is it HTML</ListItem>
            <ListItem>Produces React "elements", rendered by the DOM</ListItem>
          </List>
        </Slide>

        <Slide transition={['fade']} bgColor='secondary' textColor='primary'>
          <ComponentPlayground theme='external' previewBackgroundColor='black' />
        </Slide>
      </Deck>
    );
  }
}
