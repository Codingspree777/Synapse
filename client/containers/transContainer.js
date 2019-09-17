import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Redirect } from 'react-router-dom';
import * as actions from '../actions/index';
import Transactions from '../components/transactions';

class TransDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      redirect: false
    };
    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    //this.props.viewAccounts();
    setTimeout(() => {
      this.setState({ loaded: true });
    }, 1000);
  }

  logout() {
    this.props.login(', ');
    this.setState({
      redirect: true
    });
  }

  content() {
    return (
      <div>
        <button id={'logput'} onClick={this.logout}>
          logout
        </button>
        <img src='https://imgur.com/Lr5IybM.png'></img>
        {this.props.user.client.name}
        <Transactions></Transactions>
      </div>
    );
  }

  render() {
    if (this.state.redirect) {
      return <Redirect strict to='/login' />;
    }
    return <div> {this.state.loaded ? this.content() : null}</div>;
  }
}

const mapStateToProps = store => {
  return {
    user: store.user.user,
    view: store.view.view,
    isLoginSuccess: store.login.isLoginSuccess
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: (email, password) => dispatch(actions.login(email, password))
    //viewAccounts: () => dispatch(actions.viewAccounts())
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(TransDetails)
);
