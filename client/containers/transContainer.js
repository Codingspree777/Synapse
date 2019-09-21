import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Transactions from '../components/transactions';
import Header from '../components/header';
import CreateButtons from '../components/buttons';
import { Container, Row, Col } from 'react-grid-system';
import { USER_PAGE } from '../constants/pathConstants';
import {login} from '../actions/loginActions';
import {
  USER_LOGOUT,
  USER_NAVIGATE,
  BUTTON_LOGOUT,
  BUTTON_GO_BACK
} from '../constants/enConstants';


class TransDetails extends Component {
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

  components = () => {
    const convertDate = unixTime => {
      const timeDate = new Date(unixTime);
      const time = timeDate.toLocaleTimeString('en-US');
      const hoursMins = time.slice(0, 5);
      const amPm = time.slice(9, 12);
      const date = timeDate.toString().slice(4, 15);
      return `${date} ${hoursMins} ${amPm}`;
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
        {this.props.transactions.trans ? this.components() : null}
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
