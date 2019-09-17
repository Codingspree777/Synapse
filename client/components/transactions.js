import React, { Component } from 'react';

const Transactions = props => {
  return (
    <div className="table-wrapper">
  <table>
   <thead>
    <tr>
      <th>TRANSACTION_ID</th>
      <th>FROM</th>
      <th>TO</th>
      <th>AMOUNT</th>
      <th>STATUS</th>
      <th>DATE</th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <td>{props.id}</td>
      <td>{props.from}</td>
      <td>{props.to}</td>
      <td>{props.amount} {props.curr}</td>
      <td>{props.status}</td>
      <td>{props.date}</td>
      </tr>
      </tbody>
    </table>
    </div>
  );
};

export default Transactions