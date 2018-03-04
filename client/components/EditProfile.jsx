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
      <div className="justify-content-center px-4">
        <form onSubmit={this.submitEdit}>

        <div className="row">
          <div className="col-sm-3 left">
              <label className="font-p"
               htmlFor="InputFirstName">First Name</label>
              <div>
                  <input id="inputFirstName"
                  className="form-control font-pLato backgroundForm" placeholder="First Name" type="text" required name="first_name" onChange={this.updateProfileDetails} />
              </div>
          </div>

        <div className="row">
          <div className="col-sm-3 left">
              <label className="font-p" htmlFor="InputLastName">Last Name</label>
            <div>
                <input id="inputLastName"
                className="form-control font-pLato backgroundForm" placeholder="Last Name" type="text" required name="last_name" onChange={this.updateProfileDetails} />
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-md-5 offset-md-1 mb-3">
            <label className="font-p" htmlFor="InputLastName font-p">Email</label>
            <div>
                <input id="inputLastName"
                className="form-control font-pLato backgroundForm" placeholder="Last Name" type="text" required name="last_name" onChange={this.updateProfileDetails} />
            </div>
          </div>

          <div className="row justify-content-around">
       <div className="col-4">
            <label className="font-p dietary_restrictions">Dietary requirements:</label>
            <input type="dietary_restrictions" className="form-control" id="dietary_restrictions" />
          </div>
            <button type="submit" className="btn btn-primary">Submit</button><br />
          <br />
            <button type="edit" className="btn btn-primary" onClick={this.submitEdit}>Edit</button>
          <br />
          <br />
       </div>
       <div className="row justify-content-around">

  </div>
</div>
</div>
</div>
</form>
</div>
    )
  }
}
const mapStateToProps = ({userDetails}) => {
  return {userDetails}
}

export default connect(mapStateToProps)(EditProfile)
