import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Header from '../components/header';
import LoginForm from '../components/login';
import {LOGIN_PAGE} from '../constants/pathConstants'

import {verifyEmail, verifyPassword} from '../actions/loginActions';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   email: '',
    //   password: ''
    // };
  }

    emailChange = e => {
    e.preventDefault();
    this.props.verifyEmail(e.target.value);
    };

    passwordChange = e => {
    e.preventDefault();
    this.props.verifyPassword(e.target.value);
    };
  // emailChange = e => {
  //   e.preventDefault();
  //   this.setState({ email: e.target.value });
  // };

  // passwordChange = e => {
  //   e.preventDefault();
  //   this.setState({ password: e.target.value });
  // };

  // submitLogin = e => {
  //   e.preventDefault();
  //   this.props.login(this.state.email, this.state.password);
  // };

  render() {
    // let { email, password } = this.state;
    const formInput = <LoginForm onChange={this.emailChange} onChange2={this.passwordChange}/>
    // let { isLoginPending, isLoginSuccess, loginError, history } = this.props;
    // if (isLoginSuccess) {
    //   history.push('/user');
    // }
    return (
      <div className='background'>
      <Header route={LOGIN_PAGE}/>
      {/* <div>
      <input onChange={this.emailChange}></input>
      <input onChange={this.passwordChange}></input>
      </div> */}
      
      {/* <form name='loginForm'>
        <div className='form-group-collection'>
          <div className='form-group'>
            <label>Email:</label>
            <input
              type='email'
              name='email'
              onChange={this.emailChange}
              value={email}
            />
          </div>

          <div className='form-group'>
            <label>Password:</label>
            <input
              type='password'
              name='password'
              onChange={this.passwordChange}
              value={password}
            />
          </div>
        </div>
        <button className='button' onClick={this.submitLogin}>
          Login
        </button>
        <div className='message'>
          {isLoginPending && <div>Please wait...</div>}
          {isLoginSuccess && <div>Success.</div>}
          {loginError && <div>{loginError.message}</div>}
        </div>
      </form> */}
      {formInput}
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    isLoginPending: store.login.isLoginPending,
    isLoginSuccess: store.login.isLoginSuccess,
    loginError: store.login.loginError,
    email: store.login.email,
    password: store.login.password
  };
};

const mapDispatchToProps = dispatch => {
  return {
    //login: (email, password) => dispatch(login(email, password))
    verifyEmail: (email) => dispatch(verifyEmail(email)),
    verifyPassword: (password) => dispatch(verifyPassword(password))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(LoginPage)
);
