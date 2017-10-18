// import openSocket from 'socket.io-client'
// const socket = openSocket('http://localhost:8000')
// function subscribeToPriceTricker (cb) {
//   socket.on('prices', timestamp => cb(null, timestamp))
//   socket.emit('subscribeToPriceTricker')
// }
// export { subscribeToPriceTricker }
//

import CryptCurrencies from '../constants/CryptoCurrencies'
import _ from 'lodash/fp'

function getNameFromBase (base) {
  const crypt = _.find((c) => c.slug.toUpperCase() === base.toUpperCase(), CryptCurrencies)
  return _.get('name', crypt)
}

export { getNameFromBase }
