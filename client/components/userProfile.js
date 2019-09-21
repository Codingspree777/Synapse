import React from 'react';
import { USER_PERMISSION } from '../constants/enConstants';

const UserProfile = ({ permission, name, id, email, docId }) => {
  const style = {
    color: permission === USER_PERMISSION ? 'green' : 'red'
  };
  return (
    <div className='profile'>
      <h2 className='welcome'>Welcome, {name} to Simple Banking!</h2>
      <ul className='profileList'>
        <li className='list'> Customer ID: {id} </li>
        <li className='list'> Email: {email} </li>
        <li className='list'> Doc_ID: {docId} </li>
        <li className='list' style={style}>
          Status: {permission}
        </li>
      </ul>
    </div>
  );
};

export default UserProfile;
