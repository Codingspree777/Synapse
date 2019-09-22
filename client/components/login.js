import React from 'react';

const LoginForm = ({
  onChange,
  onChange2,
  email,
  password,
  onCLick,
}) => {
  return (
    <form name='loginForm'>
      <div className='form-group-collection'>
        <div className='form-group'>
          <label>Email:</label>
          <input type='email' name='email' onChange={onChange} value={email} />
        </div>
        <div className='form-group'>
          <label>Password:</label>
          <input
            type='password'
            name='password'
            onChange={onChange2}
            value={password}
          />
        </div>
      </div>
      <button className='button' id='button' onClick={onCLick}>
        Login
      </button>
    </form>
  );
};

export default LoginForm;
