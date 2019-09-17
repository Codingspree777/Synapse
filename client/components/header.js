import React from 'react';

const Header = () => {
  return (
    <div className="header">
    <div class="left-flex">
      <h1 className='h1'>
        {' '}
        Simple Banking{' '}
      </h1>
      <p className='quote'>"Banking made simple"</p>
      </div>
      <div class="right-flex">
      <img id='gif' src='https://media.giphy.com/media/3o7WIEvTxAPgOg9b3y/giphy.gif'></img>
      </div>
    </div>
  );
};

export default Header;
