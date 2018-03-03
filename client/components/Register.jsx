import React from 'react'
import { connect } from 'react-redux'
import { registerUserRequest } from '../actions/register'
import { loginError } from '../actions/login'
import { Link } from 'react-router-dom'


class Register extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user_name: '',
            first_name: '',
            last_name: '',
            password: '',
            confirm_password: ''
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
        e.target.reset()
        let { user_name, password, confirm_password, first_name, last_name } = this.state
        // if (confirm_password != password) return this.props.dispatch(loginError("Passwords don't match"))
        // this.props.dispatch(registerUserRequest(this.state))
    }
    render() {
        const { auth } = this.props

        return (
            <div className="justify-content-center px-4 font-p">
                <form onSubmit={this.submit}>
                    {auth.errorMessage && <span className="text-danger display-4">{auth.errorMessage}</span>}

                    <div className="row mt-5">
                        <div className="col-md-5 offset-md-1 mb-3">
                            <label htmlFor="inputFirstName">First Name</label>
                            <div>
                                <input id="inputFirstName" className="font-p form-control" placeholder="First Name" type="text" required name="first_name" onChange={this.updateDetails} />
                            </div>
                        </div>
                        <div className="col-md-5 mb-3">
                            <label htmlFor="inputLastname">Last Name</label>
                            <div>
                                <input id="inputLastname" className="form-control" placeholder="Last Name" type="text" required name="last_name" onChange={this.updateDetails} />
                            </div>
                        </div>
                    </div>

                    <div className="row mb-3">
                        <div className="col-md-5 offset-md-1">
                            <label htmlFor="inputUsername">Username</label>
                            <div>
                                <input id="inputUsername" className="form-control" placeholder="User Name" type="text" required name="user_name" onChange={this.updateDetails} />
                            </div>
                        </div>
                    </div>

                    <div className="row mb-3">
                        <div className="col-md-5 offset-md-1">
                            <label htmlFor="inputEmail">Email</label>
                            <div>
                                <input id="inputEmail" className="form-control" placeholder="Email" type="email" required name="email" onChange={this.updateDetails} />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-5  offset-md-1 mb-3">
                            <label htmlFor="inputPassword">Password</label>
                            <div>
                                <input id="inputPassword" className="form-control" placeholder="Password" type="password" required name="password" onChange={this.updateDetails} />
                            </div>
                        </div>
                        <div className="col-md-5 mb-5">
                            <label htmlFor="inputConfirmPassword">Confirm Password</label>
                            <div>
                                <input id="inputConfirmPassword" className="form-control" placeholder="Confirm password" type="password" required name="confirm_password" onChange={this.updateDetails} />
                            </div>
                        </div>
                    </div>

                    <input className="btn btn-lg btn-green btn-block text-center center-column mb-3" value="Register" type="submit" />
                    <div className="text-center mb-5" >
                    <Link to ='./login' className="text-green" href='#'>Already have an account? Sign in here</Link>
                    </div>

                </form>
            </div>
        )
    }
}

const mapStateToProps = ({ auth }) => {
    return {
        auth
    }
}

export default connect(mapStateToProps)(Register)
