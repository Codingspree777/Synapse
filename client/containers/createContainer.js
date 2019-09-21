import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Header from '../components/header';
import CreateTransaction from '../components/createTransaction';
import { Button } from 'reactstrap';

import {
  viewAccounts,
  viewTransactions,
  submitTransaction,
} from '../actions/userActions';

import { login } from '../actions/loginActions'

class CreateForm extends Component {
  constructor(props) {
    super(props);
    //TODO: use redux
    this.state = {
      to: { id: '', type: '' },
      amount: { amount: 0, curr: '' }
    };
  }

  //TODO: Write a utility function to handle history
    // const handleHistory = (path) => {
          //get history
          //push path into history
    // }

  goback = () => {
    const { history } = this.props;
    history.push('/viewaccounts');
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

  changeID = e => {
    e.preventDefault();
    this.setState({
      to: {
        ...this.state.to,
        id: e.target.value
      }
    });
  };

  changeType = e => {
    e.preventDefault();
    this.setState({
      to: {
        ...this.state.to,
        type: e.target.value
      }
    });
  };

  changeAmt = e => {
    e.preventDefault();
    this.setState({
      amount: {
        ...this.state.amount,
        amount: e.target.value
      }
    });
  };

  changeCurr = e => {
    e.preventDefault();
    this.setState({
      amount: {
        ...this.state.amount,
        curr: e.target.value
      }
    });
  };

  submit = () => {
    const obj = this.state.to;
    const obj2 = this.state.amount;
    const copyObj = Object.assign(obj, obj2);
    this.props.submitTransaction(this.props.str, copyObj);
  };

  render() {
    const Form = (
      <CreateTransaction
        changeID={this.changeID}
        changeType={this.changeType}
        changeAmt={this.changeAmt}
        changeCurr={this.changeCurr}
      />
    );
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
        {Form}
        <Button color='primary' className='goback_button' onClick={this.submit}>
          Submit
        </Button>
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
    submitTransaction: (val1, val2) =>
      dispatch(submitTransaction(val1, val2))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(CreateForm)
);
