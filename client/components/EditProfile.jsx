import React from 'react'
import { connect } from 'react-redux'

import { getUserProfile } from '../actions/user'
import { editProfileRequest } from '../actions/user'

import { Link } from 'react-router-dom'

class EditProfile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      dietaryRestrictions: ['Dairy-free', 'Vegan', 'Gluten-free', 'Vegetarian', 'Paleo', 'Egg-free', 'Nut-allergy', 'Peanut-allergy', 'Soy-free'],
      favoriteFoods: [],
      pantry: []
    }

    console.log('EditProfile:props: ', props)
    this.props = props
    this.user = {}
    this.updateProfileDetails = this.updateProfileDetails.bind(this)
    this.submitEdit = this.submitEdit.bind(this)
    this.handleFavoriteFoods = this.handleFavoriteFoods.bind(this)
    this.handlePantryFoods = this.handlePantryFoods.bind(this)

  }

  componentWillMount() {
    if (this.props.auth.user) {
      this.props.dispatch(getUserProfile(this.props.auth.user.user_id))
    }   
  }

  updateProfileDetails(e) {
    if (!this.user) {
      this.user = {...this.props.user}
    }
    this.user[e.target.name] = e.target.value
    console.log('updateProfileDetails: e.target.name=', e.target.name, ' value=', this.user[e.target.name])
  }

  submitEdit(event) {
    event.preventDefault()
    this.props.dispatch(editProfileRequest(this.state.profile))
  }

  handleFavoriteFoods(e) {
    e.preventDefault()
    let target = document.getElementById('favoriteFood')
    let selectedIngredient = target.value
    target.value = ''
    const newState = { ...this.state }
    newState.favoriteFoods.push(selectedIngredient)
    this.setState(newState)
  }

  handlePantryFoods(e) {
    e.preventDefault()
    let target = document.getElementById('pantry')
    let selectedPantryIngredient = target.value
    target.value = ''
    const newState = { ...this.state }
    newState.pantry.push(selectedPantryIngredient)
    this.setState(newState)
  }

  render() {
    let username = ''
    let email = ''
    if (this.props.auth.user) {
      username = this.props.auth.user.user_name
      email = this.props.auth.user.email
    }

    let firstName = ''
    let lastName = ''
    if (this.props.user) {
      firstName = this.props.user.first_name
      lastName = this.props.user.last_name
    }

    const {user} = this.props
    let dietaryRestrictions = ['Dairy-free', 'Vegan', 'Gluten-free', 'Vegetarian', 'Paleo', 'Egg-free', 'Nut-allergy', 'Peanut-allergy', 'Soy-free']
    return (
      user !== undefined &&
      <div>
        <img className='headerImage' src="images/pantry-to-plate-xsml.jpg" alt='header' />

        <div className="container-fluid full-width">
          <div className="row">
            <div className='col-sm-3'>
            </div>
            <div className='col-sm-6'>
              <h1 className='greenText'>Edit Profile </h1>
            </div>
            <div className='col-sm-3'>
              <Link to='/profile'><input className="btn btn-md btn-green float-right" value="save" type="submit" /></Link>
            </div>
          </div>
          <div className="row">

            <div className="col-sm-3">
              <img className='profileImage' src='./images/kubz.jpg' alt='profile image' />
              <div className="form-group">
                <label htmlFor="exampleInputFile"></label>
                <input type="file" className="form-control-file centered" id="imageUpload" aria-describedby="fileHelp"></input>
                <small id="fileHelp" className="form-text text-muted">Please upload your profile image here</small>
              </div>
              <h3 className='greenText centered'>{username}</h3>
              <p className='centered'>{email}</p>
              <h4 className="greenText centered">Favorite Recipes</h4>
              <button className="btn btn-sm btn-outline-green btn-block mb-3">Apple Salad</button>
              <button className="btn btn-sm btn-outline-green btn-block mb-3">Raw Apple Pie</button>
              <button className="btn btn-sm btn-outline-green btn-block mb-3">Pizza Crusts</button>

            </div>
            <div className="col-sm-3">
            <br/>
              <form>
                <label className="first_name font-p">First name:</label>
                <input type="first_name" className="form-control font-pLato backgroundForm" id="first_name" defaultValue={firstName} onChange={this.updateProfileDetails} />
                <label className="last_name font-p">Last name:</label>
                <input type="last_name " className="form-control font-pLato backgroundForm" id="last_name" defaultValue={lastName} onChange={this.updateProfileDetails}/>
              </form>
              <form>
                <br />
                <h4 className="greenText">Dietary Restrictions</h4>
                {dietaryRestrictions.map((item, idx) => {
                  return <div className="checkbox" key={idx}>
                    <label><input type="checkbox" value="" />{item}</label>
                  </div>
                })
                }
              </form>
            </div>
            <div className="col-sm-3">
              <h4 className="greenText centered">Favorite Foods</h4>
              <form onSubmit={this.handleFavoriteFoods}>
                <input autoComplete="off" id="favoriteFood" className="form-control mb-1 font-pLato" placeholder="Stuff you love" type="text" required autoFocus="" />
                <input className="btn btn-lg btn-green btn-block mb-3" value="Add Ingredient" type="submit" />
                {this.state.favoriteFoods.map(item => {
                  return <p className='centered font-p'>{item}</p>
                })
                }
              </form>
            </div>
            <div className="col-sm-3">
              <h4 className="greenText centered">Pantry</h4>
              <form onSubmit={this.handlePantryFoods}>
                <input autoComplete="off" id="pantry" className="form-control mb-1 font-pLato" placeholder="Whats in your Pantry?" type="text" required autoFocus="" />
                <input className="btn btn-lg btn-green btn-block mb-3" value="Add Ingredient" type="submit" />
                {this.state.pantry.map(item => {
                  return <p className='centered font-p'>{item}</p>
                })
                }
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
