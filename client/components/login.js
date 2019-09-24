import React from 'react';

const LoginForm = ({ emailChange, passwordChange, email, password, submit }) => {
  return (
    <form name='loginForm'>
      <div className='form-group-collection'>
        <div className='form-group'>
          <label>Email:</label>
          <input type='email' name='email' onChange={emailChange} value={email} />
        </div>
        <div className='form-group'>
          <label>Password:</label>
          <input
            type='password'
            name='password'
            onChange={passwordChange}
            value={password}
          />
        </div>
      </div>
      <button className='button' id='button' onClick={submit}>
        Login
      </button>
    </form>
  );
};

export default LoginForm;
