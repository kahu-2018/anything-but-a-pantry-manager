import React from 'react'
import { connect } from 'react-redux'
import { loginUser, loginError } from '../actions/login'
import { Link } from 'react-router-dom'


class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user_name: '',
            password: ''
        }
        this.updateDetails = this.updateDetails.bind(this)
        this.submit = this.submit.bind(this)
    }

    componentDidMount() {
        this.props.dispatch(loginError(''))
    }

    updateDetails(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    submit(e) {
        e.preventDefault()
        let { user_name, password } = this.state
        this.props.dispatch(loginUser({user_name, password}))
    }

    render() {
        const { auth } = this.props

        return (
          <div>
            <img className='headerImage' src="images/pantry-to-plate-sml.jpg" alt='header'/>
            <div className="center-column text-center">
                <form onSubmit={this.submit}>
                    <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                    {auth.message && <div className="text-danger display-5 mb-1">{auth.message}</div>}
                    <label htmlFor="inputUsername" className="sr-only inputBackground font-p">Email address</label>
                    <input id="inputUsername" className="form-control mb-1 font-pLato" placeholder="User name" name="user_name" type="text" required autoFocus="" onChange={this.updateDetails} />
                    <label htmlFor="inputPassword" className="sr-only font-p">Password</label>
                    <input id="inputPassword" className="form-control mb-3 font-pLato" placeholder="Password" name="password" type="password" required onChange={this.updateDetails} />
                    <input className="btn btn-lg btn-green btn-block mb-3" value='Login' type="submit" />
                </form>
                <div className="mb-5"><a href='#'><p>Forgot Password</p></a></div>
                <div className="mb-5"><Link to='/register' className="btn btn-lg btn-outline-green">Create a new account</Link></div>
            </div>
          </div>
        )
    }
}

const mapStateToProps = ({ auth }) => {
    return {
        auth
    }
}

export default connect(mapStateToProps)(Login)
