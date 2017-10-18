/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "React|Root|PriceBoxContainer" }] */
import React from 'react'
import logo from '../icons/loading.svg'

const LoadingPlaceholder = () => {
  return (
    <div>
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  )
}

export default LoadingPlaceholder
