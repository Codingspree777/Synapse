import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import * as actions from '../actions/index';
import Accounts from '../components/accounts';

class ViewDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    };
  }

  componentDidMount() {
    this.props.viewAccounts();
    setTimeout(() => {
      this.setState({ loaded: true });
    }, 1000);
  }

  content() {
   console.log(this.props.view.nodes)
    const accountsList = this.props.view.nodes.map(el => (
      <Accounts type={el.type} name={el.info.nickname} status={el.allowed} balance={el.info.balance.amount} curr={el.info.balance.currency}
      />
    ))

    return (
      <div>
        <img src='https://imgur.com/Lr5IybM.png'></img>
        {this.props.user.client.name}
        { accountsList }
      </div>
    );
  }

  render() {
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
    viewAccounts: () => dispatch(actions.viewAccounts())
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ViewDetails)
);
