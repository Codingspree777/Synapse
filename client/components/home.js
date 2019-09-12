import React from 'react';
import {Link} from 'react-router-dom';

const Home = () => (
  <div>
    <div id="containerHome">
    <h1>A keyboard wrist rest that compliments your style</h1>
    <Link id="woodLink" to="/wood">Check out our wood </Link>
    </div>
    <img className='yosemite' src='https://media.giphy.com/media/rUrPxeIxcwZTq/giphy.gif' alt="yosemite" /> 

  </div>
);

export default Home;