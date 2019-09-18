import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import * as actions from '../actions/index';
import Header2 from '../components/header2';
import CreateTransaction from '../components/createTransaction';
import { Button } from 'reactstrap';

class CreateForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
        to: {type: 'test', id: 'test1'},
        amount: {amount: 0, currency:'USD'}
    }
  }

  componentDidMount = () => {
    
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

  handleClick = e => {
    e.preventDefault();
    this.props.viewTransactions(e.target.value);
    const { history } = this.props;
    history.push('/transactions');
  };
  // test = () => {
  //   let newProperty= {...this.state.to}
  //   this.setState({newProperty:'test'})
  // }

  submit = () => {
    const obj = this.state.to;
    const obj2 = this.state.amount;
    const copyObj = Object.assign(obj, obj2)
    this.props.submitTransaction(this.props.str, copyObj)
  }

  render() {
    return (
      <div>
        <Header2 name={this.props.user.client.name} />
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
        <CreateTransaction></CreateTransaction>
        <Button
            color='primary'
            className='goback_button'
            onClick={this.submit}
          >
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
    str: store.str.str,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: (email, password) => dispatch(actions.login(email, password)),
    viewAccounts: () => dispatch(actions.viewAccounts()),
    viewTransactions: val => dispatch(actions.viewTransactions(val)),
    submitTransaction:(val1, val2) => dispatch(actions.submitTransaction(val1, val2))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(CreateForm)
);
