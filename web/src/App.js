import React, { Component } from 'react';
import './style.css';

import Header from './components/Header';
import Main from './pages/Main';

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
