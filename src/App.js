import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import NewsComponents from './components/NewsComponents';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar title="NewsChamps" aboutText="About Us"/>
        <NewsComponents/>
      </div>
    )
  }
}

