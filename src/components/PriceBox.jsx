/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "React|Root|PriceBoxContainer" }] */
import React from 'react'
import { getNameFromBase } from '../utils/CryptoName'

function getPriceClass (priceChange) {
  return priceChange === '0'
    ? ''
    : priceChange.substring(0, 1) === '-'
      ? 'price-box-subcontent-decresing-price'
      : 'price-box-subcontent-increasing-price'
}

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
        <h1>{getNameFromBase(price.base)}</h1>
        <span className="price-box-header-price">{price.price}</span>
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
          <span className={getPriceClass(price.change)}>{price.change}</span>
        </div>
      </div>
    </div>
  )
}

export default PriceBox
