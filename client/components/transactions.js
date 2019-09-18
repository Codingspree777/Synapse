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
      <table className='table'>
        <thead>
          <tr>
            <th className='th'>TRANSACTION_ID</th>
            <th className='th'>FROM</th>
            <th className='th'>TO</th>
            <th className='th'>AMOUNT</th>
            <th className='th'>STATUS</th>
            <th className='th'>DATE</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='td'>{props.id}</td>
            <td className='td'>{props.from}</td>
            <td className='td'>{props.to}</td>
            <td className='td'>
              {props.amount} {props.curr}
            </td>
            <td className='td' style={style}>{props.status}</td>
            <td className='td'>{props.date}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;
