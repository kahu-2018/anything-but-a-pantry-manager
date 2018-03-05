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
          <img className='headerImage' src="images/pantry-to-plate-sml.jpg" alt='header'/>
          <div className="col-sm-3">
            <label className="first_name font-p">First name:</label>
            <input type="first_name" className="form-control font-pLato backgroundForm" id="first_name" />
          </div>
          <div className="col-sm-3">
            <label className="last_name font-p">Last name:</label>
            <input type="last_name " className="form-control font-pLato backgroundForm" id="last_name" />
          </div>

          <div className="col-sm-3">
            <label className="dietary_restrictions font-p">Dietary requirements:</label>
            <input type="dietary_restrictions" className="form-control font-pLato backgroundForm" id="dietary_restrictions" />
          </div>
            <button type="edit" className="btn btn-lg btn-green btn-block text-center center-column mb-3" onClick={this.submitEdit}>Submit</button>
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
