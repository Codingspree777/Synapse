import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Header from '../components/header';
import LoginForm from '../components/login';
import { LOGIN_PAGE } from '../constants/pathConstants';

import { verifyEmail, verifyPassword, login } from '../actions/loginActions';

class LoginPage extends Component {
  constructor(props) {
    super(props);
  }

  emailChange = e => {
    e.preventDefault();
    this.props.verifyEmail(e.target.value);
  };

  passwordChange = e => {
    e.preventDefault();
    this.props.verifyPassword(e.target.value);
  };

  submitLogin = e => {
    e.preventDefault();
    this.props.login(this.props.email, this.props.password);
  };

  render() {
    let { isLoginSuccess, isLoginPending, loginError, history } = this.props;
    const formInput = (
      <LoginForm
        onChange={this.emailChange}
        onChange2={this.passwordChange}
        onCLick={this.submitLogin}
        loginError={loginError}
        isLoginPending={isLoginPending}
        isLoginSuccess={isLoginSuccess}
      />
    );
    if (isLoginSuccess) {
      history.push('/user');
    }
    return (
      <div className='background'>
        <Header route={LOGIN_PAGE} />
        {formInput}
        <div className='message'>
          {isLoginPending ? <div>Please wait...</div> : null}
          {loginError ? <div>Invalid Login</div> : null}
        </div>
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
    login: (email, password) => dispatch(login(email, password)),
    verifyEmail: email => dispatch(verifyEmail(email)),
    verifyPassword: password => dispatch(verifyPassword(password))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(LoginPage)
);
