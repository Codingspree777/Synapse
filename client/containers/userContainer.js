import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import * as actions from '../actions/index';
import DashBoard from '../components/dashBoard';

class UserDetails extends Component {

    constructor(props) {
      super(props);
      this.state = {
    
      };

    }
  
    componentDidMount() {
        this.props.getUser();
      }
  
    render() {
      console.log(this.props.user)
      return (
        <h1>user</h1>
      )
    }
  }
  
  
  const mapStateToProps = (store) => {
    return {
      user: store.user.user
    };
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
        getUser: () => dispatch(actions.getUser()),
    };
  }
  
  export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserDetails));