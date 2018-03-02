import React from 'react'
import {connect} from 'react-redux'

import {editProfileRequest} from '../actions/user'


class EditProfile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      oldProfile: props.profile,
      newProfile: props.profile
    }
    this.updateProfileDetails = this.updateProfileDetails.bind(this)
    this.submitEdit = this.submitEdit.bind(this)
  }
  updateProfileDetails (event) {
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
        <form>
          <div className="form-group">
            <label className="first_name">First name:</label>
            <input type="first_name" className="form-control" id="first_name" />
          </div>
          <div className="form-group">
            <label className="last_name">Last name:</label>
            <input type="last_name" className="form-control" id="last_name" />
          </div>
          <div className="form-group">
            <label className="dietary_restrictions">Dietary requirements:</label>
            <input type="dietary_restrictions" className="form-control" id="dietary_restrictions" />
          </div>
            <button type="submit" className="btn btn-primary">Submit</button><br />
          <br />
            <button type="edit" className="btn btn-primary" onClick={this.submitEdit}>Edit</button>
          <br />
          <br />

        </form>
      </div>
    )
  }
}
const mapStateToProps = ({userDetails}) => {
  return {userDetails}
}

export default connect(mapStateToProps)(EditProfile)
