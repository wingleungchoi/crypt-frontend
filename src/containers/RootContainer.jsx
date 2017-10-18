/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "React|Root|PriceListContainer" }] */
import React, { Component } from 'react'
import PriceListContainer from '../containers/PriceListContainer.jsx'
import '../App.css'

class Root extends Component {
  render () {
    return (
      <div className="App">
        <header>
          <h1 className="App-title">Cryptocurrency Realtime Price</h1>
        </header>
        <div className="App-body">
          <PriceListContainer />
        </div>
      </div>
    )
  }
}

export default Root
