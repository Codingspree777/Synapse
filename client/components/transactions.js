import React, { Component } from 'react';

const Transactions = props => {
  return (
    <div className='transactions'>
    <ul>
      <li className='transaction' id={props.id}>Transaction ID {props.id}, </li>
    </ul>
    </div>
  );
};

export default Transactions