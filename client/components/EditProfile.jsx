import React from 'react'
import {connect} from 'react-redux'

import {editProfileRequest} from '../actions/user'

import profile from './Profile'
import { Link } from 'react-router-dom'

import { getUserProfile } from '../actions/user'
import request from '../utils/api'

class EditProfile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      oldProfile: props.profile,
      newProfile: props.profile,
      dietaryRestrictions: ['Dairy-free', 'Vegan', 'Gluten-free', 'Vegetarian', 'Paleo', 'Egg-free', 'Nut-allergy', 'Peanut-allergy', 'Soy-free']
    }
    this.updateProfileDetails = this.updateProfileDetails.bind(this)
    this.submitEdit = this.submitEdit.bind(this)
  }
  updateProfileDetails(event) {
    let {newProfile} = this.state
    newProfile[event.target.name] = event.target.value
    this.setState({newProfile})
  }
  submitEdit(event) {
    event.preventDefault()
    this.props.dispatch(editProfileRequest(this.state.oldProfile, this.state.newProfile))
    this.props.submit()
  }
  render() {
    return (
      <div>
        <img className='headerImage' src="images/pantry-to-plate-sml.jpg" alt='header'/>

          <div className="container-fluid full-width">
            <div className="row">
              <div className='col-sm-3'>
              </div>
              <div className='col-sm-6'>
                <h1 className='greenText'>Welcome {this.props.user.first_name} {this.props.user.last_name}</h1>
              </div>
              <div className='col-sm-3'>
                <Link to='/profile'><input className="btn btn-sm btn-green btn-block text-center center-column mb-3" value="Save" type="submit" /></Link>
          </div>
        </div>
            <div className="row">

                <div className="col-sm-3">
                  <img className='profileImage' src='./images/kubz.jpg' alt='profile image'/>
                  <div className="form-group">
                    <label for="exampleInputFile"></label>
                    <input type="file" className="form-control-file centered" id="imageUpload" aria-describedby="fileHelp"></input>
                    <small id="fileHelp" className="form-text text-muted">Please upload your profile image here</small>
                  </div>
                  <h3 className='greenText centered'>{this.props.auth.user.user_name}</h3>
                  <p className='centered'>{this.props.auth.user.email}</p>
                  <form>
                    <h4 className="greenText">Dietary Restrictions</h4>
                    {this.state.dietaryRestrictions.map(item => {
                      return <div className="checkbox">
                        <label><input type="checkbox" value=""/>{item}</label>
                      </div>
                    })
                  }
                </form>
                </div>
              <div className="col-sm-3">
                <form>
                  <label className="first_name font-p">First name:</label>
                  <input type="first_name" className="form-control font-pLato backgroundForm" id="first_name"/>
                  <label className="last_name font-p">Last name:</label>
                  <input type="last_name " className="form-control font-pLato backgroundForm" id="last_name"/>
                </form>
              <br/>
                <h4 className="greenText centered">Favorite Recipes</h4>
                <button className="btn btn-sm btn-outline-green btn-block mb-3">Apple Salad</button>
                <button className="btn btn-sm btn-outline-green btn-block mb-3">Raw Apple Pie</button>
                <button className="btn btn-sm btn-outline-green btn-block mb-3">Pizza Crusts</button>
              </div>
                <div className="col-sm-3">
                  <h4 className="greenText centered">Favorite Foods</h4>
                  <form onSubmit={this.handleClick}>
                    <input autoComplete="off" id="inputfood" className="form-control mb-1 font-pLato" placeholder="Stuff you love" type="text" required autoFocus=""  />
                    <input className="btn btn-lg btn-green btn-block mb-3" value="Add Ingredient" type="submit" />
                  </form>
            </div>
          <div className="col-sm-3">
            <h4 className="greenText centered">Pantry</h4>
            <form onSubmit={this.handleClick}>
              <input autoComplete="off" id="inputfood" className="form-control mb-1 font-pLato" placeholder="Whats in your Pantry?" type="text" required autoFocus=""  />
              <input className="btn btn-lg btn-green btn-block mb-3" value="Add Ingredient" type="submit" />
            </form>
              </div>
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    user: state.user,
    dietaryRestrictions: state.dietaryRestrictions
  }
}
export default connect(mapStateToProps)(EditProfile)
