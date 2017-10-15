/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "React|Root|PriceListContainer" }] */
import React, { Component } from 'react'
import PriceListContainer from '../containers/PriceListContainer.jsx'
import logo from '../logo.svg'
import '../App.css'

class Root extends Component {
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Cryptocurrency Realtime Price</h1>
        </header>
        <p className="App-intro">
          <PriceListContainer />
        </p>
      </div>
    )
  }
}

export default Root
