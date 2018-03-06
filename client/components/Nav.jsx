import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logoutUser } from '../actions/logout'


import Login from './Login'
import Home from './Home'
import Profile from './Profile'
import GenerateRecipe from './GenerateRecipe'
import Recipe from './Recipe'
import Register from './Register'
import EditProfile from './EditProfile'
import ShoppingList from './ShoppingList'

class Nav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
    this.mainMenu = this.mainMenu.bind(this)
    this.loginLink = this.loginLink.bind(this)
    this.logoutLink = this.logoutLink.bind(this)
  }

  mainMenu() {
    return (
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link to='/profile' className="nav-link">Profile </Link>
        </li>
        <li className="nav-item">
          <Link to='/generateRecipe' className="nav-link">Generate Recipe</Link>
        </li>
        <li className="nav-item">
          <Link to='/shoppinglist' className="nav-link">Shopping List</Link>
        </li>
      </ul>
    )
  }

  loginLink() {
    return (<Link to='/login' className="nav-link"><i className="fas fa-user-circle faFaFont"></i>Login/Register</Link>)
  }

  logoutLink() {
    return (<Link to='/login' className="nav-link" onClick={
      () => {
        this.props.dispatch(logoutUser())
      }
    }><i className="fas fa-user-circle faFaFont"></i>Logout</Link>)
  }

  render() {
    const { auth } = this.props

    return (
      <Router>
        <div>
          <nav className="navbar navbar-expand-md navbar-light bg-light navBar textColourNav">
            <Link to='/' className="navbar-brand"><i className="fas fa-home faFaFont"></i></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              {auth.isAuthenticated && this.mainMenu()}
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  {auth.isAuthenticated && this.logoutLink()}
                  {!auth.isAuthenticated && this.loginLink()}
                </li>
              </ul>
              <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-green my-2 my-sm-0" type="submit">Search</button>
              </form>
            </div>
          </nav>

          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/profile' component={Profile} />
          <Route exact path='/generateRecipe' component={GenerateRecipe} />
          <Route exact path='/recipe' component={Recipe} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/editProfile' component={EditProfile} />
          <Route exact path='/shoppinglist' component={ShoppingList} />

        </div>

      </Router>
    )
  }
}

const mapStateToProps = ({ auth }) => {
  return {
    auth
  }
}

export default connect(mapStateToProps)(Nav)
