import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Header from '../components/header';
import Accounts from '../components/accounts';
import { Button } from 'reactstrap';

import {login} from '../actions/loginActions';
import { 
  getNode,
  viewAccounts,
  viewTransactions,
 } from '../actions/userActions.js'

class ViewDetails extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    this.props.viewAccounts();
  };

  goback = () => {
    const { history } = this.props;
    history.push('/user');
  };

  logout = () => {
    this.props.login(', ');
    const { history } = this.props;
    history.push('/login');
  };

  handleClick = e => {
    e.preventDefault();
    this.props.viewTransactions(e.target.value);
    const { history } = this.props;
    history.push('/transactions');
  };

  handleClick2 = e => {
    e.preventDefault();
    this.props.getNode(e.target.value);
    const { history } = this.props;
    history.push('/createtransaction');
  };

  // TODO: Refactor
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
          //handleClick={this.handleClick.bind(this)}
        />
      );
      accountsList.push(
        <Button
          color='primary'
          size='sm'
          className='viewTransaction'
          id={el._id}
          value={el._id}
          onClick={this.handleClick}
        >
          View Transactions
        </Button>
      );
      accountsList.push(
        <Button
          color='primary'
          size='sm'
          className='viewTransaction'
          id={el._id}
          value={el._id}
          onClick={this.handleClick2}
        >
          Create Transaction
        </Button>
      );
    }

    return <div className='viewContainer'>{accountsList}</div>;
  };

  render() {
    return (
      <div>
        <Header name={this.props.user.client.name} />
        <span>
          <Button color='danger' className='button' onClick={this.logout}>
            logout
          </Button>
        </span>
        <span>
          <Button
            color='primary'
            className='goback_button'
            onClick={this.goback}
          >
            goback
          </Button>
        </span>
        {this.props.view.nodes ? this.content() : null}
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    user: store.user.user,
    view: store.view.view,
    str: store.str.str
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: (email, password) => dispatch(login(email, password)),
    viewAccounts: () => dispatch(viewAccounts()),
    viewTransactions: val => dispatch(viewTransactions(val)),
    getNode: val => dispatch(getNode(val))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ViewDetails)
);
