import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import * as actions from '../actions/index';
import UserProfile from '../components/userProfile';
import AccountsList from '../components/accountsList';

class ViewDetails extends Component {

    constructor(props) {
      super(props);
      this.state = {
      
      };
     
    }

    componentDidMount() {
      this.props.viewAccounts();
      }
  
    render() {
      return (
          <div>
             <img src="https://imgur.com/Lr5IybM.png"></img>
              <p>View Details</p>
              </div>
      )
    }
  }
  
  
  const mapStateToProps = (store) => {
    return {
      
    };
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
        viewAccounts: () => dispatch(actions.viewAccounts()),
        
    };
  }
  
  export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ViewDetails));