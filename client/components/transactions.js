import React, { Component } from 'react';

const Transactions = props => {
  let style;
  if (props.status === 'SETTLED') {
    style = {
      color: 'green'
    };
  } else {
    style = {
      color: 'red'
    };
  }
  return (
    <div className='tableWrapper'>
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
            <td>
              {props.amount} {props.curr}
            </td>
            <td style={style}>{props.status}</td>
            <td>{props.date}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;
