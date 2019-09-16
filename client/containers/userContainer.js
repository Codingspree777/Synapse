import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import * as actions from '../actions/index';
import UserProfile from '../components/userProfile';

class UserDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    };
    this.viewAccts = this.viewAccts.bind(this);
  }

  componentDidMount() {
    this.props.getUser();
    setTimeout(() => {
      this.setState({ loaded: true });
    }, 1200);
  }

  //route to view accounts list and API call to Synapse get all nodes
  viewAccts() {
    const { history } = this.props;
    history.push('/viewaccounts');
  }
  content() {
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
        {profileDetails}
        <button onClick={this.viewAccts}>View Accounts</button>
      </div>
    );
  }
  render() {
    return <div>{this.state.loaded ? this.content() : null}</div>;
  }
}

const mapStateToProps = store => {
  return {
    user: store.user.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUser: () => dispatch(actions.getUser())
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(UserDetails)
);
