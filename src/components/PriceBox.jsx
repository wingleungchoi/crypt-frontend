/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "React|Root|PriceBoxContainer" }] */
import React from 'react'
const PriceBox = (props) => {
  const { index, price } = props
  return (
    <div
      index={index}
      className="price-box"
    >
      <div
        className="price-box-header"
      >
        <span>{index}</span>
        <span>{price.base}</span>
        <span>{price.price}</span>
      </div>
      <div
        className="price-box-content"
      >
        <div
          className="price-box-subcontent"
        >
          <span>volume</span>
          <span>{price.volume}</span>
        </div>
        <div
          className="price-box-subcontent"
        >
          <span>change</span>
          <span>{price.change}</span>
        </div>
      </div>
    </div>
  )
}

export default PriceBox
