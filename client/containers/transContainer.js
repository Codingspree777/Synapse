import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import * as actions from "../actions/index";
import Transactions from "../components/transactions";

class TransDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    };
  }

  componentDidMount = () => {
    //this.props.viewAccounts();
    setTimeout(() => {
      this.setState({ loaded: true });
    }, 1000);
  };

  goback = () => {
    const { history } = this.props;
    history.push("/viewaccounts");
  };

  logout = () => {
    this.props.login(", ");
    const { history } = this.props;
    history.push("/login");
  };

  content = () => {
    console.log(this.props.transactions);
    return (
      <div>
        <img src="https://imgur.com/Lr5IybM.png"></img>
        {this.props.user.client.name}
        <Transactions></Transactions>
      </div>
    );
  };

  render() {
    return (
      <div>
        {" "}
        <button id={"goback"} onClick={this.goback}>
          goback
        </button>
        <button id={"logput"} onClick={this.logout}>
          logout
        </button>
        {this.state.loaded ? this.content() : null}
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    user: store.user.user,
    isLoginSuccess: store.login.isLoginSuccess,
    transactions: store.transactions.transactions
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
