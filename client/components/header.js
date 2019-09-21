import React from 'react';
import { LOGIN_PAGE } from '../constants/pathConstants';

const Header = ({ route, name }) => {
  const isLoginMode = route === LOGIN_PAGE;
  return (
    <div className='header'>
      <div className='left-flex'>
        <h1 className='h1'> Simple Banking </h1>
        <p className='quote'>"Banking made simple"</p>
      </div>
      {isLoginMode ? (
        <div className='right-flex'>
          <img
            id='gif'
            src='https://media.giphy.com/media/3o7WIEvTxAPgOg9b3y/giphy.gif'
          ></img>
        </div>
      ) : (
        <div className='right-flex2'>
          <img
            className='profile_pic'
            src='https://imgur.com/Lr5IybM.png'
          ></img>
          <p className='propName'>{name}</p>
        </div>
      )}
    </div>
  );
};

export default Header;
