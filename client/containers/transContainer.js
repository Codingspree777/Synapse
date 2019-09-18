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
    }, 1100);
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
    const convertDate = obj => {
      const a = new Date(obj);
      const b = a.toLocaleTimeString('en-US');
      const c = b.slice(9, 12);
      const d = a.toString().slice(4, 21);
      return d + ' ' + c;
    };

    const transColumns = this.props.transactions.trans.map(el => (
      <Transactions
        id={el._id}
        from={el.from.user.legal_names[0]}
        to={el.to.user.legal_names[0]}
        amount={el.amount.amount}
        curr={el.amount.currency}
        status={el.recent_status.status}
        date={convertDate(el.recent_status.date)}
      />
    ));

    return (
      <div className='transContainer'>
        <div className='profile_pic'>
          <img src='https://imgur.com/Lr5IybM.png'></img>
        </div>
        <div className='profile_name'>{this.props.user.client.name}</div>
        {transColumns}
      </div>
    );
  };

  render() {
    return (
      <div>
        <span>
          <button id={'logput'} onClick={this.logout}>
            logout
          </button>
        </span>
        <span>
          <button id={'goback'} onClick={this.goback}>
            goback
          </button>
        </span>
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
