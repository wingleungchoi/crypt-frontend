/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "React|Root|PriceBoxContainer|PriceBox" }] */
import React from 'react'
import _map from 'lodash/fp/map'
import PriceBox from '../components/PriceBox'

const PriceList = (props) => {
  const { prices } = props
  return (
    <div
      className="price-list"
    >
      { _map((price, i) => <PriceBox
        key={price.base}
        index={i}
        price={price}
      />, prices) }
    </div>
  )
}

export default PriceList
