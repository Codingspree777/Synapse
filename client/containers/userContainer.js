import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Header from '../components/header';
import UserProfile from '../components/userProfile';
import CreateButtons from '../components/buttons';

import { login } from '../actions/loginActions';
import { getUser } from '../actions/userActions.js';

import {
  USER_LOGOUT,
  USER_NAVIGATE,
  BUTTON_LOGOUT,
  BUTTON_VIEW_ACCOUNTS
} from '../constants/enConstants';

class UserDetails extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    this.props.getUser();
  };

  logout = () => {
    this.props.login(', ');
    this.props.history.push('/login');
  };

  //route to view accounts list and API call to Synapse get all nodes
  viewAccts = () => {
    this.props.history.push('/viewaccounts');
  };

  components = () => {
    const profileDetails = (
      <UserProfile
        name={this.props.user.client.name}
        id={this.props.user.client.id}
        email={this.props.user.logins[0].email}
        docId={this.props.user.documents[0].id}
        permission={this.props.user.documents[0].permission_scope}
      />
    );
    return (
      <div>
        <Header name={this.props.user.client.name} />
        <span>
          <CreateButtons
            type={USER_LOGOUT}
            onClick={this.logout}
            description={BUTTON_LOGOUT}
          />
        </span>
        <span>
          <CreateButtons
            type={USER_NAVIGATE}
            onClick={this.viewAccts}
            description={BUTTON_VIEW_ACCOUNTS}
          />
        </span>
        {profileDetails}
      </div>
    );
  };
  render() {
    return <div>{this.props.user.client ? this.components() : null}</div>;
  }
}

const mapStateToProps = store => {
  return {
    user: store.user.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUser: () => dispatch(getUser()),
    login: (email, password) => dispatch(login(email, password))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(UserDetails)
);
