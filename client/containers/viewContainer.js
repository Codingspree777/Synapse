import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import * as actions from "../actions/index";
import Accounts from "../components/accounts";

class ViewDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    };
  }

  componentDidMount = () => {
    this.props.viewAccounts();
    setTimeout(() => {
      this.setState({ loaded: true });
    }, 1000);
  };
  goback = () => {
    const { history } = this.props;
    history.push("/user");
  };

  logout = () => {
    this.props.login(", ");
    const { history } = this.props;
    history.push("/login");
  };

  handleClick = e => {
    e.preventDefault();
    this.props.viewTransactions(e.target.value);
    const { history } = this.props;
    history.push("/transactions");
  };

  content = () => {
    const accountsList = [];
    for (let i = 0; i < this.props.view.nodes.length; i++) {
      let el = this.props.view.nodes[i];
      accountsList.push(
        <Accounts
          id={el._id}
          value={el._id}
          type={el.type}
          name={el.info.nickname}
          status={el.allowed}
          balance={el.info.balance.amount}
          curr={el.info.balance.currency}
        />
      );
      accountsList.push(
        <button id={el._id} value={el._id} onClick={this.handleClick}>
          View Transactions
        </button>
      );
    }

    return (
      <div>
        <img src="https://imgur.com/Lr5IybM.png"></img>
        {this.props.user.client.name}
        {accountsList}
      </div>
    );
  };

  render() {
    return (
      <div>
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
    view: store.view.view
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: (email, password) => dispatch(actions.login(email, password)),
    viewAccounts: () => dispatch(actions.viewAccounts()),
    viewTransactions: val => dispatch(actions.viewTransactions(val))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ViewDetails)
);
