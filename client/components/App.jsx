import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import {connect} from 'react-redux'

import './../styles/index.scss';

import GenerateRecipe from './GenerateRecipe'
import Nav from './Nav'


class App extends React.Component {
  render() {
    return (
      <div>
        <Nav />
      </div>
    )
  }
}


export default App
