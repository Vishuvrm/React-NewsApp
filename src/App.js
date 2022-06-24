import './App.css';

import React, { Component } from 'react'
import NavBar from './components/navbar';
import News from './components/News';

export default class App extends Component {
  render() {
    return (
      <>
      <div>
        <NavBar/>
        <div className='float'>
        <News/>
        </div>
      </div>
      </>
    )
  }
}
