import React from 'react';

const Header2 = props => {
  return (
    <div className='header'>
      <div className='left-flex'>
        <h1 className='h1'> Simple Banking </h1>
        <p className='quote'>"Banking made simple"</p>
      </div>
      <div className='right-flex2'>
        <img className='profile_pic' src='https://imgur.com/Lr5IybM.png'></img>
        <p className='propName'>{props.name}</p>
      </div>
    </div>
  );
};

export default Header2;
