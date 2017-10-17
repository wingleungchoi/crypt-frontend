/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "React|PriceBox" }] */
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import _map from 'lodash/fp/map'

import { subscribeToPriceTricker } from '../utils/socket'
import LoadingPage from '../components/LoadingPage'
import PriceBox from '../components/PriceBox'

const propTypes = {
  index: PropTypes.number.isRequired
}

class PriceBoxContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      prices: []
    }

    subscribeToPriceTricker((err, pricesFromSocket) => {
      if (err) {
        console.log('err', err)
        this.setState({
          timestamp: 'backend does not work'
        })
      } else {
        this.setState({
          prices: pricesFromSocket
        })
      }
    })
  }

  render () {
    // const { index } = this.props
    return (this.state.prices.length > 0)
      ? _map((price, i) => <PriceBox index={i} price={price}/>, this.state.prices)
      : <LoadingPage/>
  }
}

PriceBoxContainer.propTypes = propTypes

export default PriceBoxContainer
