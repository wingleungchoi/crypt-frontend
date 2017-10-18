/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "React|PriceBox|PriceList|LoadingPlaceholder" }] */
import React, { Component } from 'react'

import { subscribeToPriceTricker } from '../utils/socket'
import LoadingPlaceholder from '../components/LoadingPlaceholder'
import PriceList from '../components/PriceList'

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
          prices: []
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
      ? <PriceList prices={this.state.prices}/>
      : <LoadingPlaceholder/>
  }
}

export default PriceBoxContainer
