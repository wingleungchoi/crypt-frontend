/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "React|Root|PriceBoxContainer" }] */
import React from 'react'
const PriceBox = (props) => {
  const { index } = props
  return (
    <div
      index={index}
      className="price-box"
    >
      <div
        className="price-box-header"
      >
        <span>Bitcoin</span>
        <span>$1315645.135156456</span>
      </div>
      <div
        className="price-box-content"
      >
        <div
          className="price-box-subcontent"
        >
          <span>volume</span>
          <span>2923232.23565444</span>
        </div>
        <div
          className="price-box-subcontent"
        >
          <span>change</span>
          <span>-11.7312321</span>
        </div>
      </div>
    </div>
  )
}

export default PriceBox
