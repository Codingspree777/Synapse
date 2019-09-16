import React, { Component } from 'react';

const Accounts = props => {
  return (
    <div className="accounts">
    <ul>
       <li className="account" >Your {props.name} has a balance of {props.balance} {props.curr}</li>
       <li className="account">Account Type: {props.type} Status: {props.status} <span><button>view details</button></span></li>
    </ul>
    </div>
  );
};

export default Accounts