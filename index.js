import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import Redbox from 'redbox-react';
import { AppContainer } from 'react-hot-loader';

// import { BrowserRouter, Route } from 'react-router-dom';

import Presentation from './TOPIC_2';

const CustomErrorReporter = ({ error }) => <Redbox error={error} />;

CustomErrorReporter.propTypes = {
  error: PropTypes.instanceOf(Error).isRequired
};

class Disambiguation extends Component {
  constructor () {
    super();

    this.state = {
      topic: 0
    };
  }

  render () {
    return (
      <div id="main">
        <div class="inner">
          <section class="tiles">
            <article class="style1">
              <span class="image">
                <img src="images/pic01.jpg" alt="" />
              </span>
              <a href="generic.html">
                <h2>Magna</h2>
                <div class="content">
                  <p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
                </div>
              </a>
            </article>
            <article class="style2">
              <span class="image">
                <img src="images/pic02.jpg" alt="" />
              </span>
              <a href="generic.html">
                <h2>Lorem</h2>
                <div class="content">
                  <p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
                </div>
              </a>
            </article>
            <article class="style3">
              <span class="image">
                <img src="images/pic03.jpg" alt="" />
              </span>
              <a href="generic.html">
                <h2>Feugiat</h2>
                <div class="content">
                  <p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
                </div>
              </a>
            </article>
            <article class="style4">
              <span class="image">
                <img src="images/pic04.jpg" alt="" />
              </span>
              <a href="generic.html">
                <h2>Tempus</h2>
                <div class="content">
                  <p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
                </div>
              </a>
            </article>
            <article class="style5">
              <span class="image">
                <img src="images/pic05.jpg" alt="" />
              </span>
              <a href="generic.html">
                <h2>Aliquam</h2>
                <div class="content">
                  <p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
                </div>
              </a>
            </article>
            <article class="style6">
              <span class="image">
                <img src="images/pic06.jpg" alt="" />
              </span>
              <a href="generic.html">
                <h2>Veroeros</h2>
                <div class="content">
                  <p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
                </div>
              </a>
            </article>
            <article class="style2">
              <span class="image">
                <img src="images/pic07.jpg" alt="" />
              </span>
              <a href="generic.html">
                <h2>Ipsum</h2>
                <div class="content">
                  <p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
                </div>
              </a>
            </article>
            <article class="style3">
              <span class="image">
                <img src="images/pic08.jpg" alt="" />
              </span>
              <a href="generic.html">
                <h2>Dolor</h2>
                <div class="content">
                  <p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
                </div>
              </a>
            </article>
            <article class="style1">
              <span class="image">
                <img src="images/pic09.jpg" alt="" />
              </span>
              <a href="generic.html">
                <h2>Nullam</h2>
                <div class="content">
                  <p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
                </div>
              </a>
            </article>
            <article class="style5">
              <span class="image">
                <img src="images/pic10.jpg" alt="" />
              </span>
              <a href="generic.html">
                <h2>Ultricies</h2>
                <div class="content">
                  <p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
                </div>
              </a>
            </article>
            <article class="style6">
              <span class="image">
                <img src="images/pic11.jpg" alt="" />
              </span>
              <a href="generic.html">
                <h2>Dictum</h2>
                <div class="content">
                  <p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
                </div>
              </a>
            </article>
            <article class="style4">
              <span class="image">
                <img src="images/pic12.jpg" alt="" />
              </span>
              <a href="generic.html">
                <h2>Pretium</h2>
                <div class="content">
                  <p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
                </div>
              </a>
            </article>
          </section>
        </div>
      </div>
    );
  }
}

class Router extends Component {
  constructor () {
    super();

    this.state = {
      topic: 0
    };
  }

  render () {
    return (
      <BrowserRouter onUpdate={() => window.scrollTo(0, 0)}>
        <Route exact path='/' component={Disambiguation} />
        <Route exact path='/lesson01' />
      </BrowserRouter>
    );
  }
}

ReactDOM.render(
  <AppContainer errorReporter={CustomErrorReporter}>
    <Presentation />
  </AppContainer>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./TOPIC_2', () => {
    const NextPresentation = require('./TOPIC_2').default;
    ReactDOM.render(
      <AppContainer errorReporter={CustomErrorReporter}>
        <NextPresentation />
      </AppContainer>,
      document.getElementById('root')
    );
  });
}
