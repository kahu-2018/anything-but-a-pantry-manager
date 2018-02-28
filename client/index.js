import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'

import App from './components/App'


document.addEventListener('DOMContentLoaded', () => {
  render(
   <App />,
    document.getElementById('app')
  )
})