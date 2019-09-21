import React from 'react';


const LoginForm = ({onChange, onChange2, email, password }) => {
  
  return (
     <form name='loginForm'>
        <div className='form-group-collection'>
          <div className='form-group'>
            <label>Email:</label>
            <input
              type='email'
              name='email'
            onChange={onChange}
              value={email}
            />
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
        <button className='button' 
        // onClick={this.submitLogin}
        >
          Login
        </button>
        <div className='message'>
          {/* {isLoginPending && <div>Please wait...</div>}
          {isLoginSuccess && <div>Success.</div>}
          {loginError && <div>{loginError.message}</div>} */}
        </div>
      </form> 
  );
};

export default LoginForm;