import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import * as actions from "../actions/index";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.submitLogin = this.submitLogin.bind(this);
    this.emailChange = this.emailChange.bind(this);
    this.passwordChange = this.passwordChange.bind(this);
  }

  emailChange(e) {
    e.preventDefault();
    this.setState({ email: e.target.value });
  }

  passwordChange(e) {
    e.preventDefault();
    this.setState({ password: e.target.value });
  }

  submitLogin(e) {
    e.preventDefault();
    this.props.login(this.state.email, this.state.password);
  }

  render() {
    let { email, password } = this.state;
    let { isLoginPending, isLoginSuccess, loginError, history } = this.props;
    if (isLoginSuccess) {
      history.push("/user");
    }
    return (
      <form name="loginForm">
        <div className="form-group-collection">
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              onChange={this.emailChange}
              value={email}
            />
          </div>

          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              name="password"
              onChange={this.passwordChange}
              value={password}
            />
          </div>
        </div>
        <button className="button" onClick={this.submitLogin}>
          Login
        </button>
        <div className="message">
          {isLoginPending && <div>Please wait...</div>}
          {isLoginSuccess && <div>Success.</div>}
          {loginError && <div>{loginError.message}</div>}
        </div>
      </form>
    );
  }
}

const mapStateToProps = store => {
  return {
    isLoginPending: store.login.isLoginPending,
    isLoginSuccess: store.login.isLoginSuccess,
    loginError: store.login.loginError
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: (email, password) => dispatch(actions.login(email, password)),
    getUser: () => dispatch(actions.getUser())
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(LoginPage)
);
