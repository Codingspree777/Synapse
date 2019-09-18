import React, { Component } from 'react';

const UserProfile = props => {
  //status color change
  let style;
  if (props.permission === 'SEND|RECEIVE') {
    style = {
      color: 'green'
    };
  } else {
    style = {
      color: 'red'
    };
  }
  return (
    <div className='profile'>
      <h2 className='welcome'>Welcome, {props.name} to Simple Banking!</h2>
      <ul className='profileList'>
        <li className='list'> Customer ID: {props.id} </li>
        <li className='list'> Email: {props.email} </li>
        <li className='list'> Doc_ID: {props.docId} </li>
        <li className='list' style={style}>
          {' '}
          Status: {props.permission}{' '}
        </li>
      </ul>
    </div>
  );
};

export default UserProfile;
