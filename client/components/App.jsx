import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import {connect} from 'react-redux'

import GenerateRecipe from './GenerateRecipe'
import Nav from './Nav'


class App extends React.Component {
  
  // componentDidMount() {
  //   if (this.props.auth.isAuthenticated) {
  //     //do api request stuff for user data
  //     console.log("you are already logged in");
  //     this.requestUserData()
  //   }
  // }
  // requestUserData() {
  //   //dispatch a bunc of async actions
  //   console.log("gotta get that user data");
  // }
  // componentWillReceiveProps(nextProps) {
  //   if (!this.props.auth.isAuthenticated && nextProps.auth.isAuthenticated) this.requestUserData()
  // }
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
