import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import {connect} from 'react-redux'

import Nav from './Nav'


class App extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <h1>Hello World from App.jsx</h1>
      </div>
    )
  }
}

export default App
