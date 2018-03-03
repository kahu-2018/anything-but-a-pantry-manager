import React from 'react'
import {connect} from 'react-redux'
import EditProfile from './EditProfile'
import request from '../utils/api'
import {getUserProfile} from '../actions/user'

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
        <h1>Profile</h1>
        <button type="edit" className="btn btn-primary" onClick={this.toggleButton}>{buttonText}</button>

        {this.state.editVisible && <EditProfile />}
        <h3>Welcome {this.state.first_name} {this.state.last_name}</h3>

        <h3>Dietary Requirements:</h3>
        {this.state.dietary_restrictions}

        <h3>Favourite Food:</h3> 

        <h3>Favourite Recipes:</h3> 

        <h3>Food I don't like:</h3>

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
