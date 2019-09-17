import React, { Component } from 'react';

const Accounts = props => {

  return (
    <div className='accounts' >
    <ul>
       <li className='account' id={props.id} >Your {props.name} has a balance of {props.balance} {props.curr}</li>
       <li className='account' id={props.id}>Account Type: {props.type} Status: {props.status} </li>
    </ul>
    </div>
  );
};

export default Accounts