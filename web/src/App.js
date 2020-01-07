import React, { Component } from 'react';
import './style.css';

import Header from './components/Header';

import Main from './pages/Main'
import Routes from './routes';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
      </div>
    )
  }
}
