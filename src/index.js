/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "React|Root" }] */
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Root from './containers/RootContainer'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<Root />, document.getElementById('root'))
registerServiceWorker()
