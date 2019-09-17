import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Redirect } from 'react-router-dom';
import * as actions from '../actions/index';
import Accounts from '../components/accounts';

class ViewDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      redirect: false
    };
    this.content = this.content.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    this.props.viewAccounts();
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

  handleClick(e) {
    e.preventDefault();
    this.props.viewTransactions(e.target.value);
    const { history } = this.props;
    history.push('/transactions');
  }

  content() {
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
        <button id={'logput'} onClick={this.logout}>
          logout
        </button>
        <img src='https://imgur.com/Lr5IybM.png'></img>
        {this.props.user.client.name}
        {accountsList}
      </div>
    );
  }

  render() {
    if (this.state.redirect) {
      return <Redirect strict to='/login' />;
    }
    return <div>{this.state.loaded ? this.content() : null}</div>;
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
