import React from 'react'
import { connect } from 'react-redux'
import { registerUserRequest } from '../actions/register'
import { loginError, loginRetype } from '../actions/login'
import { Link } from 'react-router-dom'

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
        this.submit = this.submit.bind(this)
        this.onFocusing = this.onFocusing.bind(this)
        this.showModal = this.showModal.bind(this)
    }

    componentDidMount() {
        this.props.dispatch(loginError(''))
    }

    updateDetails(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onFocusing(e) {
        $('#regModal').modal() // note: jQuery code
        this.props.dispatch(loginRetype()) // clear error message
    }

    showModal() { // note: bootstrap modal
        let title = 'Account successfully created'
        let msg = 'Please proceed to Sign In';

        return (
        <div className="modal fade" id="regModal" tabIndex="-1" role="dialog" aria-labelledby="registrationModalTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="regModalTitle">{title}</h5>
                    </div>
                    <div className="modal-body">
                        {msg}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-lg btn-green btn-center" data-dismiss="modal" onClick={()=>{
                            this.props.history.push('/Login')
                        }}>&nbsp;Ok&nbsp;</button>
                    </div>
                </div>
            </div>
        </div>)
    }


    submit(e) {
        e.preventDefault()
        console.log('e.target.password: ', e.target.password)
        //e.target.reset()

        let { first_name, last_name, user_name, email, password, confirm_password } = this.state

        console.log('Register submit:',
            '\n\tfist_name: ', first_name,
            '\n\tlast_name: ', last_name,
            '\n\tuser_name: ', user_name,
            '\n\temail: ', email,
            '\n\tpassword:', password,
            '\n\confirm_password:', confirm_password)

        if (confirm_password != password) {
            this.props.dispatch(loginError("Passwords do not match"))
            this.setState({
                password: '',
                confirm_password: ''
            })
            e.target.password.value = ''
            e.target.confirm_password.value = ''
            return
        }

        this.props.dispatch(registerUserRequest(this.state))

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
                                <input id="inputFirstName" className="form-control font-pLato backgroundForm" placeholder="First Name" type="text" required name="first_name" onChange={this.updateDetails} onFocus={this.onFocusing} />
                            </div>
                        </div>
                        <div className="col-md-5 mb-3">
                            <label className="font-p" htmlFor="inputLastname font-p">Last Name</label>
                            <div>
                                <input id="inputLastname" className="form-control font-pLato backgroundForm" placeholder="Last Name" type="text" required name="last_name" onChange={this.updateDetails} onFocus={this.onFocusing} />
                            </div>
                        </div>
                    </div>

                    <div className="row mb-3">
                        <div className="col-md-5 offset-md-1">
                            <label className="font-p" htmlFor="inputUsername">Username</label>
                            <div>
                                <input id="inputUsername" className="form-control font-pLato backgroundForm" placeholder="User Name" type="text" required name="user_name" onChange={this.updateDetails} onFocus={this.onFocusing} />
                            </div>
                        </div>
                    </div>

                    <div className="row mb-3">
                        <div className="col-md-5 offset-md-1">
                            <label className="font-p" htmlFor="inputEmail">Email</label>
                            <div>
                                <input id="inputEmail" className="form-control font-pLato backgroundForm" placeholder="Email" type="email" required name="email" onChange={this.updateDetails} onFocus={this.onFocusing} />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-5  offset-md-1 mb-3">
                            <label className="font-p" htmlFor="inputPassword">Password</label>
                            <div>
                                <input id="inputPassword" className="form-control font-pLato backgroundForm backgroundForm" placeholder="Password" type="password" required name="password" onChange={this.updateDetails} onFocus={this.onFocusing} />
                            </div>
                        </div>
                        <div className="col-md-5 mb-5">
                            <label className="font-p" htmlFor="inputConfirmPassword">Confirm Password</label>
                            <div>
                                <input id="inputConfirmPassword" className="form-control font-pLato backgroundForm" placeholder="Confirm password" type="password" required name="confirm_password" onChange={this.updateDetails} onFocus={this.onFocusing} />
                            </div>
                        </div>
                    </div>
                    {auth.message && <div className="text-danger display-5 mb-2">{auth.message}</div>}
                    <input className="btn btn-lg btn-green btn-block text-center center-column mb-3" value="Register" type="submit" />
                </form>
                <div className="text-center mb-5">
                    <Link to='./login' className="text-green" href='#'>Already have an account? Sign in here</Link>
                </div>

                {this.showModal()}

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
