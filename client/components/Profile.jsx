import React from 'react'
import {connect} from 'react-redux'

import EditProfile from './EditProfile'
import { Link } from 'react-router-dom'

import { getUserProfile } from '../actions/user'
import request from '../utils/api'


class Profile extends React.Component {
  constructor(props){
    super(props)
    this.state={
      editVisible:false,
      first_name: 'visitor',
      last_name: '',
      dietary_restrictions: ''
    }
    this.props = props
    this.toggleButton = this.toggleButton.bind(this)
  }

  // componentWillMount() {
  //   console.log('profile mount ', this.props)
  //   console.log('profile props.auth ', this.props.user_id)
  //   console.log('profile props.user 0: ', this.props.user)
  //   this.props.dispatch(getUserProfile(this.props.user_id))
  // }

  componentDidMount() {
    const endpoint = 'users/' + this.props.user_id
    request('get', endpoint)
      .then(res => {
        if (res.body.user) {
          console.log("Profile res.body.user: ", res.body.user)
          this.setState({
            first_name: res.body.user.first_name,
            last_name: res.body.user.last_name,
            dietary_restrictions: res.body.user.dietary_restrictions
          })
        }
      })
  }

  toggleButton(){
    this.setState({editVisible: !this.state.editVisible
    })
  }
  render() {
    console.log('profile props.user 2: ', this.props.user)
    const buttonText = this.state.editVisible ? 'Close' : 'Edit'
    return (
      <div>
<!--         <img className='headerImage' src="images/pantry-to-plate-sml.jpg" alt='header'/>
          <div className="container-fluid full-width">
            <div className="row">
              <div className='col-sm-3'>
            </div>
              <div className='col-sm-6'>
            <h1 className='greenText'>Welcome Kubo Mepham{this.props.user.first_name} {this.props.user.last_name}</h1>
            </div>
            <div className='col-sm-3'>
              <Link to='/editProfile'><input className="btn btn-md btn-green float-right" value="Edit" type="submit" /></Link>
          </div>
        </div>

          <div className="row">
              <div className="col-sm-3 centered">
                <img className='profileImage' src='./images/kubz.jpg' alt='profile image'/>
                <h3 className='greenText'>Kubz17{this.props.user.user_name}</h3>
                <p>kubz-is-my-fav@gmail.com {this.props.user.email}</p>
                <h3 className='greenText'>Friends</h3>
                <input className="btn btn-lg btn-green btn-block mb-3" value="Go to Shopping List" type="submit" />
                <input className="btn btn-lg btn-green btn-block mb-3" value="History" type="submit" />
              </div> -->

        <h1>Profile</h1>
        <button type="edit" className="btn btn-primary" onClick={this.toggleButton}>{buttonText}</button>

        {this.state.editVisible && <EditProfile />}
        <h3>Welcome {this.state.first_name} {this.state.last_name}</h3>

        <h3>Dietary Requirements:</h3>
        {this.state.dietary_restrictions}


              <div className="col-sm-3">
                <input className="btn btn-lg btn-green btn-block mb-3" value="Favorite Recipes" type="submit" />
                <input className="btn btn-sm btn-outline-green btn-block mb-3" type='submit' value='Apple Salad'/>
                <input className="btn btn-sm btn-outline-green btn-block mb-3" type='submit' value='Raw Apple Pie'/>
                <input className="btn btn-sm btn-outline-green btn-block mb-3" type='submit' value='Pizza Crusts'/>
              </div>

              <div className="col-sm-3 centered">
                <input className="btn btn-lg btn-green btn-block mb-3" value="Dietary Requirements" />
                <p>Gluten Free <br /> Nut Allergy</p>
                  <h4 className ='greenText'>I Love</h4>
                  <p>Apples</p>
                  <h4 className ='greenText'>I don't Like</h4>
                  <p>Rice</p>


              </div>
              <div className="col-sm-3 centered">
                <input className="btn btn-lg btn-green btn-block mb-3" value="My Pantry"/>
                <h4 className ='greenText'>Fresh</h4>
                <p>Food</p>
                <h4 className ='greenText'>Dairy</h4>
                <p>Food</p>
              </div>
          </div>
        </div>
    </div>
    )
  }
}

const mapStateToProps = (props) => {
  console.log('profile as props: ', props)
  return {
    user_id: props.auth.user.user_id,
    user: props.user
  }
}

export default connect(mapStateToProps)(Profile)
