import './App.css';
import News from './Component/News';
import React, { Component } from 'react'
import Navbar from './Component/Navbar';

export default class App extends Component {
  render() {
    return (
      <div>
  <Navbar/>
  <News/>
      </div>
    )
  }
}

