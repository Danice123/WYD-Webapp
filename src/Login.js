import React from 'react';
import Auth from './AuthHandler';

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            page: 'login',
            loginEmail: '',
            loginPassword: '',
            registerEmail: '',
            registerPassword: '',
            registerPasswordCheck: ''
        };
    }

    openRegisterPage = (event) => {
        event.preventDefault();
        this.setState({page: 'register' });
    }

    openLoginPage = (event) => {
        event.preventDefault();
        this.setState({page: 'login' });
    }

    handleInputChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        switch (this.state.page) {
            case 'login':
                return (
                    <div className="mt-4" style={{ marginLeft: "auto", marginRight: "auto" }}>
                        <div className="form-group">
                            <input 
                                type="email"
                                className="form-control form-control-lg"
                                name="loginEmail"
                                value={this.state.loginEmail}
                                onChange={this.handleInputChange}
                                placeholder="Email address" />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control form-control-lg"
                                name="loginPassword"
                                value={this.state.loginPassword}
                                onChange={this.handleInputChange}
                                placeholder="Password" />
                        </div>
                        <div className="mb-2">
                            <button
                                type="submit"
                                className="btn btn-primary mb-2"
                                onClick={this.login}
                            >Login</button>
                        </div>
                        <div>
                            <button
                                type="button"
                                className="btn btn-outline-primary"
                                onClick={this.openRegisterPage}
                            >Register a new account!</button>
                        </div>
                    </div>
                );
            case 'register':
                return (
                    <div className="mt-4" style={{ marginLeft: "auto", marginRight: "auto" }}>
                        <div className="form-group">
                            <input
                                type="email"
                                className="form-control form-control-lg"
                                name="registerEmail"
                                value={this.state.registerEmail}
                                onChange={this.handleInputChange}
                                placeholder="Email address" />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control form-control-lg"
                                name="registerPassword"
                                value={this.state.registerPassword}
                                onChange={this.handleInputChange}
                                placeholder="Password" />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control form-control-lg"
                                name="registerPasswordCheck"
                                value={this.state.registerPasswordCheck}
                                onChange={this.handleInputChange}
                                placeholder="Retype Password" />
                        </div>
                        <div className="mb-2">
                            <button
                                type="submit"
                                className="btn btn-primary"
                                onClick={this.register}
                                disabled={this.state.registerPassword !== this.state.registerPasswordCheck}
                            >Register</button>
                        </div>
                        <div>
                            <button
                                type="button"
                                className="btn btn-outline-primary"
                                onClick={this.openLoginPage}
                            >Back to login</button>
                        </div>
                    </div>
                );
            default:
                return (
                    <h1>How did you get here?</h1>
                );
        }
    }

    login = () => {
        if (this.state.loginEmail && this.state.loginPassword) {
            Auth.signIn({
                username: this.state.loginEmail,
                password: this.state.loginPassword
            }).then(user => {
                console.log(user);
            })
            .catch(err => console.log(err));
        }
    }

    register = () => {
        if (this.state.registerEmail && this.state.registerPassword) {
            Auth.signUp({
                username: this.state.registerEmail,
                password: this.state.registerPassword
            }).then(data => console.log(data))
            .catch(err => console.log(err));
        }
    }
}

export default Login;