import React from 'react'
import {connect} from 'react-redux'
import EditProfile from './EditProfile'

import {getUserProfile} from '../actions/user'

class Profile extends React.Component {
  constructor(props){
    super(props)
    this.state={
      editVisible:false
    }
    this.toggleButton = this.toggleButton.bind(this)
  }

  toggleButton(){
    this.setState({editVisible: !this.state.editVisible
    })
  }
  render() {
    const buttonText = this.state.editVisible ? 'Close' : 'Edit'
    return (
      <div>
        <h1>Profile</h1>
        <button type="edit" className="btn btn-primary" onClick={this.toggleButton}>{buttonText}</button>

        {this.state.editVisible && <EditProfile />}
        <h3>Welcome {this.props.user.first_name} {this.props.user.last_name}</h3>

        <h3>Dietary Requirements:</h3>
        {this.props.user.dietary_restrictions}

        <h3>Favourite Food:</h3> 

        <h3>Favourite Recipes:</h3> 

        <h3>Food I don't like:</h3>

      </div>
    )
  }
}

const mapStateToProps = (props) => {
  console.log('props', props)
  return {
    user_id: props.auth.user.id
  }
}

export default connect(mapStateToProps)(Profile)
