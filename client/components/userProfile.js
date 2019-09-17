import React, { Component } from 'react';

const UserProfile = props => {
  return (
    <div className='profile'>
      <h2 className="welcome">Welcome, {props.name} to Simple Banking!</h2>
      <img className='profile_pic' src='https://imgur.com/Lr5IybM.png'></img>
      <ul className='profileList'>
        <li className='list'> Customer ID: {props.id} </li>
        <li className='list'> Email: {props.email} </li>
        <li className='list'> Doc_ID: {props.docId} </li>
        <li className='list'> Status: {props.permission} </li>
      </ul>
    </div>
  );
};

export default UserProfile;
