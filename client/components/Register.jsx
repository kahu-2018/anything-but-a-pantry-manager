import React from 'react'
import { connect } from 'react-redux'
import { registerUserRequest } from '../actions/register'
import { loginError } from '../actions/login'
import { Link } from 'react-router-dom'
//import {get, set, remove} from '../utils/localstorage'


class Register extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            first_name: '',
            last_name: '',
            user_name: '',
            email: '',
            password: '',
            confirm_password: ''
        }
        this.updateDetails = this.updateDetails.bind(this)
        //this.saveToLocal = this.saveToLocal.bind(this)
        this.submit = this.submit.bind(this)
    }

    componentDidMount() {
        this.props.dispatch(loginError(''))
    }

    updateDetails(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    // saveToLocal() {
    //     let { first_name, last_name, user_name, email} = this.state
    //     set('reg_first_name', first_name)
    //     set('reg_last_name', last_name)
    //     set('reg_user_name', user_name)
    //     set('reg_email', email)
    // }

    submit(e) {
        e.preventDefault()
        e.target.reset()
        
        //this.saveToLocal()
        let { first_name, last_name, user_name, email, password, confirm_password } = this.state
        
        
        console.log('Register submit:',
            '\n\tfist_name: ', first_name,
            '\n\tlast_name: ', last_name,
            '\n\tuser_name: ', user_name,
            '\n\temail: ', email, 
            '\n\tpassword:', password,
            '\n\confirm_password:', confirm_password)
        if (confirm_password != password) return this.props.dispatch(loginError("Passwords do not match"))
        //this.props.dispatch(registerUserRequest(this.state))
    }

    render() {
        const { auth } = this.props

        return (
            <div className="text-center px-4">
                <form onSubmit={this.submit}>
                    <div className="row mt-5">
                        <div className="col-md-5 offset-md-1 mb-3">
                            <label className="font-p" htmlFor="inputFirstName">First Name</label>
                            <div>
                                <input id="inputFirstName" className="form-control font-pLato backgroundForm" placeholder="First Name" type="text" required name="first_name" onChange={this.updateDetails} />
                            </div>
                        </div>
                        <div className="col-md-5 mb-3">
                            <label className="font-p" htmlFor="inputLastname font-p">Last Name</label>
                            <div>
                                <input id="inputLastname" className="form-control font-pLato backgroundForm" placeholder="Last Name" type="text" required name="last_name" onChange={this.updateDetails} />
                            </div>
                        </div>
                    </div>

                    <div className="row mb-3">
                        <div className="col-md-5 offset-md-1">
                            <label className="font-p" htmlFor="inputUsername">Username</label>
                            <div>
                                <input id="inputUsername" className="form-control font-pLato backgroundForm" placeholder="User Name" type="text" required name="user_name" onChange={this.updateDetails} />
                            </div>
                        </div>
                    </div>

                    <div className="row mb-3">
                        <div className="col-md-5 offset-md-1">
                            <label className="font-p" htmlFor="inputEmail">Email</label>
                            <div>
                                <input id="inputEmail" className="form-control font-pLato backgroundForm" placeholder="Email" type="email" required name="email" onChange={this.updateDetails} />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-5  offset-md-1 mb-3">
                            <label className="font-p" htmlFor="inputPassword">Password</label>
                            <div>
                                <input id="inputPassword" className="form-control font-pLato backgroundForm backgroundForm" placeholder="Password" type="password" required name="password" onChange={this.updateDetails} />
                            </div>
                        </div>
                        <div className="col-md-5 mb-5">
                            <label className="font-p" htmlFor="inputConfirmPassword">Confirm Password</label>
                            <div>
                                <input id="inputConfirmPassword" className="form-control font-pLato backgroundForm" placeholder="Confirm password" type="password" required name="confirm_password" onChange={this.updateDetails} />
                            </div>
                        </div>
                    </div>
                    {auth.message && <div className="text-danger display-5 mb-2">{auth.message}</div>}
                    <input className="btn btn-lg btn-green btn-block text-center center-column mb-3" value="Register" type="submit" />
                    <div className="text-center mb-5">
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
