import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'

import Detail from './app/detail'
import List from './app/list'

import '../css/index.css';


export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <Route path='/' exact component={List} />
          <Route path='/detail' exact component={Detail} />
        </Fragment>
      </BrowserRouter>
    );
  }
}

render(<App />, document.getElementById('app'));
