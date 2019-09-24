import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Header from '../components/header';
import Accounts from '../components/accounts';
import CreateButtons from '../components/buttons';
import { login } from '../actions/loginActions';
import {
  getNode,
  viewAccounts,
  viewTransactions
} from '../actions/userActions.js';
import {
  USER_LOGOUT,
  USER_NAVIGATE,
  BUTTON_LOGOUT,
  BUTTON_GO_BACK,
  BUTTON_VIEW_TRANSACTIONS,
  BUTTON_CREATE_TRANSACTIONS
} from '../constants/enConstants';

class ViewDetails extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    this.props.viewAccounts();
  };

  goback = () => {
    this.props.history.push('/user');
  };

  logout = () => {
    this.props.login(', ');
    this.props.history.push('/login');
  };

  goToTransactions = e => {
    e.preventDefault();
    this.props.viewTransactions(e.target.value);
    this.props.history.push('/transactions');
  };

  goToCreateTransaction = e => {
    e.preventDefault();
    this.props.getNode(e.target.value);
    this.props.history.push('/createtransaction');
  };

  components = () => {
    const accountsList = this.props.view.nodes.map(el => (
      <Accounts
        id={el._id}
        value={el._id}
        account_type={el.type}
        name={el.info.nickname}
        status={el.allowed}
        balance={el.info.balance.amount}
        currency={el.info.balance.currency}
        onClick={this.goToTransactions}
        description={BUTTON_VIEW_TRANSACTIONS}
        onClick2={this.goToCreateTransaction}
        description2={BUTTON_CREATE_TRANSACTIONS}
      />
    ));
    return <div className='view-container'>{accountsList}</div>;
  };

  render() {
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
            onClick={this.goback}
            description={BUTTON_GO_BACK}
          />
        </span>
        {this.props.view.nodes ? this.components() : null}
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    user: store.user.user,
    view: store.view.view,
    nodeID: store.nodeID.nodeID
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: (email, password) => dispatch(login(email, password)),
    viewAccounts: () => dispatch(viewAccounts()),
    viewTransactions: nodeID => dispatch(viewTransactions(nodeID)),
    getNode: nodeID => dispatch(getNode(nodeID))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ViewDetails)
);
