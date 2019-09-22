import {
  VERIFY_EMAIL,
  VERIFY_PASSWORD,
  SET_LOGIN_PENDING,
  SET_LOGIN_SUCCESS,
  SET_LOGIN_ERROR
} from '../constants/actionTypes';

export const verifyEmail = email => {
  return {
    type: VERIFY_EMAIL,
    payload: email
  };
};

export const verifyPassword = password => {
  return {
    type: VERIFY_PASSWORD,
    payload: password
  };
};

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

const setLoginPending = boolean => {
  return {
    type: SET_LOGIN_PENDING,
    payload: boolean
  };
};

const setLoginSuccess = boolean => {
  return {
    type: SET_LOGIN_SUCCESS,
    payload: boolean
  };
};

const setLoginError = boolean => {
  return {
    type: SET_LOGIN_ERROR,
    payload: boolean
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
