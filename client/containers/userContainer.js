import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Header2 from '../components/header2';
import UserProfile from '../components/userProfile';
import { Button } from 'reactstrap';

import {login} from '../actions/loginActions';
import { getUser } from '../actions/userActions.js'


class UserDetails extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    this.props.getUser();
  };

  logout = () => {
    this.props.login(', ');
    const { history } = this.props;
    history.push('/login');
  };

  //route to view accounts list and API call to Synapse get all nodes
  viewAccts = () => {
    const { history } = this.props;
    history.push('/viewaccounts');
  };
  content = () => {
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
        <Header2 name={this.props.user.client.name} />
        <span>
          <Button color='danger' className='button' onClick={this.logout}>
            logout
          </Button>
        </span>
        <span>
          <Button color='primary' className='button' onClick={this.viewAccts}>
            View Accounts
          </Button>
        </span>
        {profileDetails}
      </div>
    );
  };
  render() {
    return <div>{this.props.user.client ? this.content() : null}</div>;
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
