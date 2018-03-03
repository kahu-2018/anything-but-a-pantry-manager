import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'
import {connect} from 'react-redux'


import Auth from './Auth'
import Home from './Home'
import Profile from './Profile'
import GenerateRecipe from './GenerateRecipe'
import Recipe from './Recipe'
import Register from './Register'

const Nav = (props) => {
  return (
    <Router>
      <div>
      <nav className="navbar navbar-expand-md navbar-light bg-light navBar textColourNav">
        <Link to='/' className="navbar-brand"><i className="fas fa-home"></i></Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to='/profile' className="nav-link">Profile </Link>
              </li>
          <li className="nav-item">
            <Link to='/generateRecipe' className="nav-link">Generate Recipe</Link>
          </li>
        </ul>
          <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to='/login' className="nav-link"><i className="fas fa-user-circle">&nbsp;</i>Login/Register</Link>
            </li>
          </ul>
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>

    <Route exact path='/' component={Home} />
    <Route exact path='/login' component={Auth} />
    <Route exact path='/profile' component={Profile} />
    <Route exact path='/generateRecipe' component={GenerateRecipe} />
    <Route exact path='/recipe' component={Recipe} />
    <Route exact path='/register' component={Register} />

    </div>

  </Router>
  )
}

// const mapStateToProps = (state) => {
//   return (
//
//   )
// }
export default Nav
// export default connect(mapStateToProps)(Nav)
