import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import {connect} from 'react-redux'

import GenerateRecipe from './GenerateRecipe'
import Nav from './Nav'


class App extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <h1>Hello World from App.jsx</h1>

//adding here for testing
<GenerateRecipe />

      </div>
    )
  }
}

export default App
