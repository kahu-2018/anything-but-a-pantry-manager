import React from 'react'
import { Link } from 'react-router-dom'

class Home extends React.Component {
  render() {
    return (
      <div>
        <img className='headerImage' src="images/pantry-manager-header.jpg" alt='header'/>
        <div>
          <div className="container-fluid full-width">
            <div className="row">
              <div className="col-sm-3">
                <Link to='/login'><input className="btn btn-lg btn-green btn-block mb-3" value="Login" type="submit" /></Link>
              </div>
              <div className="col-sm-3">
                <Link to='/register'><input className="btn btn-lg btn-green btn-block mb-3" value="Register" type="submit" /></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default Home
