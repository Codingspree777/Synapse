import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Header from '../components/header';
import CreateButtons from '../components/buttons';
import CreateTransaction from '../components/createTransaction';
import { Button } from 'reactstrap';
import { USER_PAGE } from '../constants/pathConstants';
import { login } from '../actions/loginActions';
import {
  inputRecipient,
  inputAccountType,
  inputAmount,
  inputCurrency,
  submitTransaction
} from '../actions/userActions';
import {
  USER_LOGOUT,
  USER_NAVIGATE,
  BUTTON_LOGOUT,
  BUTTON_GO_BACK
} from '../constants/enConstants';

class CreateForm extends Component {
  constructor(props) {
    super(props);
  }

  goback = () => {
    this.props.history.push('/viewaccounts');
  };

  logout = () => {
    this.props.login(', ');
    this.props.history.push('/login');
  };

  recipientIDchange = e => {
    e.preventDefault();
    this.props.inputRecipient(e.target.value);
  };

  accounttypeChange = e => {
    e.preventDefault();
    this.props.inputAccountType(e.target.value);
  };

  amtChange = e => {
    e.preventDefault();
    this.props.inputAmount(e.target.value);
  };

  currencyChange = e => {
    e.preventDefault();
    this.props.inputCurrency(e.target.value);
  };

  submit = () => {
    const { nodeID, toRecipientID, accountType, amount, currency } = this.props;
    this.props.submitTransaction(
      nodeID,
      toRecipientID,
      accountType,
      amount,
      currency
    );
  };

  render() {
    const Form = (
      <CreateTransaction
        toRecipientID={this.recipientIDchange}
        changeType={this.accounttypeChange}
        changeAmt={this.amtChange}
        changeCurr={this.currencyChange}
        submit={this.submit}
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
            path={USER_PAGE}
            onClick={this.goback}
            description={BUTTON_GO_BACK}
          />
        </span>
        {Form}
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    user: store.user.user,
    view: store.view.view,
    nodeID: store.nodeID.nodeID,
    accountType: store.accountType.accountType,
    toRecipientID: store.toRecipientID.toRecipientID,
    amount: store.amount.amount,
    currency: store.currency.currency
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: (email, password) => dispatch(login(email, password)),
    inputRecipient: nodeID => dispatch(inputRecipient(nodeID)),
    inputAccountType: accountType => dispatch(inputAccountType(accountType)),
    inputAmount: amount => dispatch(inputAmount(amount)),
    inputCurrency: currency => dispatch(inputCurrency(currency)),
    submitTransaction: (nodeID, toRecipientID, accountType, amount, currency) =>
      dispatch(
        submitTransaction(nodeID, toRecipientID, accountType, amount, currency)
      )
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(CreateForm)
);
