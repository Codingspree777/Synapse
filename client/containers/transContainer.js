import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Transactions from '../components/transactions';
import Header from '../components/header';
import { Button } from 'reactstrap';
import { Container, Row, Col } from 'react-grid-system';

import {login} from '../actions/loginActions';

class TransDetails extends Component {
  constructor(props) {
    super(props);
  }

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
    //TODO: Better varible names
    const convertDate = obj => {
      const a = new Date(obj);
      const b = a.toLocaleTimeString('en-US');
      const c = b.slice(0, 5);
      const d = b.slice(9, 12);
      const e = a.toString().slice(4, 15);
      return `${e} ${c} ${d}`;
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
        <h3>Transactions Details</h3>
        <Container fluid style={{ lineHeight: '40px' }}>
          <Row className='rowHeader'>
            <Col debug>TRANSACTION_ID</Col>
            <Col debug>FROM</Col>
            <Col debug>TO</Col>
            <Col debug>AMOUNT</Col>
            <Col debug>STATUS</Col>
            <Col debug>DATE</Col>
          </Row>
        </Container>
        {transColumns}
      </div>
    );
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
        {this.props.transactions.trans ? this.content() : null}
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
    login: (email, password) => dispatch(login(email, password))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(TransDetails)
);
