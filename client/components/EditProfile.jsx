import React from 'react'
import { connect } from 'react-redux'

import { getUserProfile } from '../actions/user'
import { editProfileRequest } from '../actions/user'
import {getPantry} from '../actions/pantry'
import {removePantryIngredient} from '../actions/pantry'
import {addPantryItem} from '../actions/pantry'

import { Link } from 'react-router-dom'

class EditProfile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      dietaryRestrictions: ['Dairy-free', 'Vegan', 'Gluten-free', 'Vegetarian', 'Paleo', 'Egg-free', 'Nut-allergy', 'Peanut-allergy', 'Soy-free'],
      favoriteFoods: [],
      pantry: []
    }

    this.user = {}
    this.props = props
    this.updateProfileDetails = this.updateProfileDetails.bind(this)
    this.submitEdit = this.submitEdit.bind(this)
    this.handleFavoriteFoods = this.handleFavoriteFoods.bind(this)
    this.handlePantryFoods = this.handlePantryFoods.bind(this)
    this.removePantryItem = this.removePantryItem.bind(this)

  }

   componentWillMount() {
    this.props.dispatch(getPantry())
    if (this.props.auth.user) {
      this.props.dispatch(getUserProfile(this.props.auth.user.user_id))
    }
  }

  updateProfileDetails(e) {
    this.user[e.target.name] = e.target.value
  }

  submitEdit(e) {
    e.preventDefault()
    if (this.props.user) {
      this.props.dispatch(editProfileRequest(this.props.user.id, this.user))
    }
    this.props.history.push('/Profile')
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
    let item = target.value
    this.props.dispatch(addPantryItem(item))
    target.value = ''
  }

  removePantryItem(ingredient){
    this.props.dispatch(removePantryIngredient(ingredient))
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
              <Link to='/profile'><input className="btn btn-md btn-green float-right" value="save" type="submit" onClick={this.submitEdit}/></Link>
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
                <input id="editFirstName" type="first_name" className="form-control font-pLato backgroundForm" name="first_name" defaultValue={firstName} onChange={this.updateProfileDetails} />
                <label className="last_name font-p">Last name:</label>
                <input id="editLastName" type="last_name " className="form-control font-pLato backgroundForm" name="last_name" defaultValue={lastName} onChange={this.updateProfileDetails}/>
              </form>
              <form>
                <br />
                <h4 className="greenText">Dietary Restrictions</h4>
                {dietaryRestrictions.map((item, idx) => {
                  return <div className="checkbox" key={idx}>
                    <label><input type="checkbox" value={item} />&nbsp;{item}</label>
                  </div>
                })
                }
              </form>
            </div>
            <div className="col-sm-3">
              <h4 className="greenText centered">Favorite Foods</h4>
              <form >
                <div className="container-fluid">
                  <div className="row">
                    <div className='col-sm-9 marginZero'>
                      <input autoComplete="off" id="favoriteFood" className="form-control mb-1 font-pLato" placeholder="Stuff you love" type="text" autoFocus="" />
                    </div>
                    <div className='col-md-3 marginZero'>
                      <input className="btn btn-md btn-green btn-block mb-3" value="Add" type="submit" onClick={this.handleFavoriteFoods}/>
                    </div>
                  </div>
                </div>

                {this.state.favoriteFoods.map(item => {
                  return <p className='centered font-p'>{item}</p>
                })
                }
              </form>
            </div>
            <div className="col-sm-3">
              <h4 className="greenText centered">Pantry</h4>
              <form onSubmit={(e) =>e.preventDefault()}>
                {this.props.pantry.length > 0 ? this.props.pantry.map((ingredient, index) =><p className='centered'>{ingredient.name_of_food[0].toUpperCase()+ingredient.name_of_food.substring(1)} &nbsp;
                  <button className='btn btn-sm mb-1 font-pLato btn-green-x' onClick={() => this.removePantryItem(ingredient)}>X</button></p>) : <p className='centered'>Pantry is empty</p>}

                    <div className="container-fluid">
                      <div className="row">
                        <div className='col-sm-9 marginZero'>
                          <input autoComplete="off" id="pantry" className="form-control mb-1 font-pLato" placeholder="Add Pantry Item" type="text" required autoFocus=""  />
                        </div>
                        <div className='col-md-3 marginZero'>
                          <input className="btn btn-md btn-green btn-block mb-3" value="Add" type="submit" onClick={this.handlePantryFoods}/>
                        </div>
                      </div>
                    </div>
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
    dietaryRestrictions: state.dietaryRestrictions,
    pantry: state.pantry

  }
}

export default connect(mapStateToProps)(EditProfile)
