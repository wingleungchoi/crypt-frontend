import openSocket from 'socket.io-client'
const socket = openSocket('http://localhost:8000')
function subscribeToPriceTricker (cb) {
  socket.on('prices', timestamp => cb(null, timestamp))
  socket.emit('subscribeToPriceTricker')
}
export { subscribeToPriceTricker }
