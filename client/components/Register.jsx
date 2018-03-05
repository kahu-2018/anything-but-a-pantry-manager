import React from 'react'
import { connect } from 'react-redux'
import { registerUser, registerRetype, registerFailure } from '../actions/register'
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
        this.modalPopup = this.modalPopup.bind(this)
    }

    componentDidMount() {
        this.props.dispatch(registerRetype())
    }

    updateDetails(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onFocusing(e) {
        this.props.dispatch(registerRetype()) // clear error message
    }

    showModal() {
        $('#regModal').modal('show') // note: jQuery code to launch bootstrap modal
    }

    modalPopup() { // note: bootstrap modal
        let title = 'SUCCESS'
        let msg = 'Account Created!!  Please proceed to Sign In';

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
                            $('#regModal').modal('hide')
                            this.props.history.push('/Login')
                        }}>&nbsp;Ok&nbsp;</button>
                    </div>
                </div>
            </div>
        </div>)
    }


    submit(e) {
        e.preventDefault()

        let { first_name, last_name, user_name, email, password, confirm_password } = this.state

        if (confirm_password != password) {
            this.props.dispatch(registerFailure("Passwords do not match"))
            this.setState({
                password: '',
                confirm_password: ''
            })
            e.target.password.value = ''
            e.target.confirm_password.value = ''
            return
        }

        this.props.dispatch(registerUser(this.state))

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
                {auth.newAccountDone && this.showModal()}
                {this.modalPopup()}

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
