import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import * as actions from '../actions/index';
import Transactions from '../components/transactions';

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
    history.push('/viewaccounts');
  };

  logout = () => {
    this.props.login(', ');
    const { history } = this.props;
    history.push('/login');
  };

  content = () => {
    const transColumns = this.props.transactions.trans.map(el => (
      <Transactions
        id={el._id}
        from={el.from.user.legal_names[0]}
        to={el.to.user.legal_names[0]}
        amount={el.amount.amount}
        curr={el.amount.currency}
        status={el.timeline[3].status}
        date={el.timeline[3].date}
      />
    ));
    return (
      <div>
        <img src='https://imgur.com/Lr5IybM.png'></img>
        {this.props.user.client.name}
        {transColumns}
      </div>
    );
  };

  render() {
    return (
      <div>
        {' '}
        <button id={'goback'} onClick={this.goback}>
          goback
        </button>
        <button id={'logput'} onClick={this.logout}>
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
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(TransDetails)
);
