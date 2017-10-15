/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "React|PriceBox" }] */
import PropTypes from 'prop-types'
import React, { Component } from 'react'

import _map from 'lodash/fp/map'
import PriceBox from '../components/PriceBox'

const propTypes = {
  index: PropTypes.number.isRequired
}

class PriceBoxContainer extends Component {
  render () {
    const { index } = this.props
    const pricelist = new Array(4)
    return (
      _map(() => <PriceBox index={index}/>, pricelist)
    )
  }
}

PriceBoxContainer.propTypes = propTypes

export default PriceBoxContainer
