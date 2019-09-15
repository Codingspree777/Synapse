import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import * as actions from '../actions/index';
import UserProfile from '../components/userProfile';

class UserDetails extends Component {

    constructor(props) {
      super(props);
      this.state = {
       name: '',
       id: '',
       email: '',
       docId: '',
       permission: ''
      };
      this.getProfile = this.getProfile.bind(this);
    }
  

    componentDidMount() {
        this.props.getUser();
        setTimeout(()=>{
          this.getProfile()
        }, 1000)
      }

      getProfile(){
        this.setState(
          { name: this.props.user.client.name,
            id: this.props.user.client.id,
            email: this.props.user.logins[0].email,
            docId: this.props.user.documents[0].id,
            permission: this.props.user.documents[0].permission_scope
          }
        )
      }
  
    render() {
      let {name, id, email, docId, permission} = this.state
      const profileDetails =  <UserProfile name={name} id={id} email={email} docId={docId} permission={permission}/>
      if(name){
      return (
        <div>
          {profileDetails}
        <button onClick={this.viewAccts}>view accounts</button>
        </div>
      )
      }
      return (
        <div></div>
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
        viewAccts: (value) => dispatch(actions.viewAccts(value))
    };
  }
  
  export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserDetails));