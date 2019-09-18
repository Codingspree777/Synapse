import React, { Component } from 'react';

const Accounts = props => {
  let style;
  if (props.status === 'CREDIT-AND-DEBIT') {
    style = {
      color: 'green'
    };
  } else {
    style = {
      color: 'red'
    };
  }
  return (
    <div className='accounts'>
      <ul>
        <li className='list' id={props.id}>
          Your '{props.name}' has a balance of {props.balance} {props.curr}
        </li>
        <li className='list' id={props.id} style={style}>
          Acc. Type: {props.type} Status: {props.status}{' '}
        </li>
      </ul>
    </div>
  );
};

export default Accounts;
