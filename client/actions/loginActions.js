import * as types from '../constants/actionTypes';

export const login = (email, password) => {
  return dispatch => {
    dispatch(setLoginPending(true));
    dispatch(setLoginSuccess(false));
    dispatch(setLoginError(null));

    callLoginApi(email, password, error => {
      dispatch(setLoginPending(false));
      if (!error) {
        dispatch(setLoginSuccess(true));
      } else {
        dispatch(setLoginError(error));
      }
    });
  };
};

const setLoginPending = value => {
  return {
    type: types.SET_LOGIN_PENDING,
    payload: value
  };
};

export const setLoginSuccess = value => {
  return {
    type: types.SET_LOGIN_SUCCESS,
    payload: value
  };
};

const setLoginError = value => {
  return {
    type: types.SET_LOGIN_ERROR,
    payload: value
  };
};

const callLoginApi = (email, password, callback) => {
  setTimeout(() => {
    if (email === 'admin@example.com' && password === 'admin') {
      return callback(null);
    } else {
      return callback(new Error('Invalid email and password'));
    }
  }, 1000);
};
