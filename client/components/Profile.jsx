import React from 'react'
import {connect} from 'react-redux'

import EditProfile from './EditProfile'
import { Link } from 'react-router-dom'

import {getPantry} from '../actions/pantry'
import { getUserProfile } from '../actions/user'


class Profile extends React.Component {
  constructor(props){
    super(props)
    this.state={
      editVisible:false,
    }
    this.props = props
    this.toggleButton = this.toggleButton.bind(this)
  }

  componentWillMount() {
    if (this.props.auth.user) {
      this.props.dispatch(getUserProfile(this.props.auth.user.user_id))
    }
    this.props.dispatch(getPantry())
  }

  toggleButton(){
    this.setState({editVisible: !this.state.editVisible
    })
  }

  render() {
    let username = ''
    let email = ''
    if (this.props.auth.user) {
      username = this.props.auth.user.user_name
      email = this.props.auth.user.email
    }

    let splitDietaryReq = []
    if (this.props.dietaryRestrictions) {
      splitDietaryReq = this.props.dietaryRestrictions.split(' ')
    }

    const buttonText = this.state.editVisible ? 'Close' : 'Edit'
    return (
      <div>
        <img className='headerImage' src="images/pantry-to-plate-xsml.jpg" alt='header'/>
          <div className="container-fluid full-width">
            <div className="row">
              <div className='col-sm-3'>
            </div>
              <div className='col-sm-6'>
            <h1 className='greenText'>Welcome {this.props.user.first_name} {this.props.user.last_name}</h1>
            </div>
            <div className='col-sm-3'>
              <Link to='/editProfile'><input className="btn btn-md btn-green float-right" value="Edit" type="submit" /></Link>
          </div>
        </div>

          <div className="row">
              <div className="col-sm-3 centered">
                <img className='profileImage' src={this.props.user.image} alt='profile image'/>
                <h3 className='greenText'>{this.props.auth.user.user_name}</h3>
                <p>{this.props.auth.user.email}</p>
                <h3 className='greenText'>Friends</h3>
                <input className="btn btn-lg btn-green btn-block mb-3" value="Go to Shopping List" type="submit" />
                <input className="btn btn-lg btn-green btn-block mb-3" value="History" type="submit" />
              </div>
              <div className="col-sm-3">
                <button className="btn btn-lg btn-green btn-block mb-3">Favourite Recipes</button>
                <button className="btn btn-sm btn-outline-green btn-block mb-3">Apple Salad</button>
                <button className="btn btn-sm btn-outline-green btn-block mb-3">Raw Apple Pie</button>
                <button className="btn btn-sm btn-outline-green btn-block mb-3">Pizza Crusts</button>
              </div>

              <div className="col-sm-3 centered">
                <button className="btn btn-lg btn-green btn-block mb-3">Dietary Requirements</button>
                {splitDietaryReq.map((food, idx) =>
                  <p className="centered font-p" key={idx}>{food}</p>
                )}

                  <h4 className ='greenText'>Food I Love</h4>
                  <p className="centered font-p">{this.props.user.favourite_food}</p>


              </div>
              <div className="col-sm-3 centered">
                <button className="btn btn-lg btn-green btn-block mb-3">My Pantry</button>
                {this.props.pantry ? this.props.pantry.map((ingredient, index) => <p className="font-p">{ingredient.name_of_food[0].toUpperCase()+ingredient.name_of_food.substring(1)}</p>) : <p>Pantry loading</p>}
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

export default connect(mapStateToProps)(Profile)
