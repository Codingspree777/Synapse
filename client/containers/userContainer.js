import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import * as actions from "../actions/index";
import UserProfile from "../components/userProfile";

class UserDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      id: "",
      email: "",
      docId: "",
      permission: ""
    };
    this.getProfile = this.getProfile.bind(this);
    this.viewAccts = this.viewAccts.bind(this);
  }

  componentDidMount() {
    this.props.getUser();
    setTimeout(() => {
      this.getProfile();
    }, 1000);
  }

  getProfile() {
    this.setState({
      name: this.props.user.client.name,
      id: this.props.user.client.id,
      email: this.props.user.logins[0].email,
      docId: this.props.user.documents[0].id,
      permission: this.props.user.documents[0].permission_scope
    });
  }
  //route to view accounts list and API call to Synapse get all nodes
  viewAccts() {
    const { history } = this.props;
    history.push("/viewaccounts");
  }
  render() {
    let { name, id, email, docId, permission } = this.state;
    const profileDetails = (
      <UserProfile
        name={name}
        id={id}
        email={email}
        docId={docId}
        permission={permission}
      />
    );
    if (name) {
      return (
        <div>
          {profileDetails}
          <button onClick={this.viewAccts}>View Accounts</button>
        </div>
      );
    }
    return <div></div>;
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
