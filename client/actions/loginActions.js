import * as types from '../constants/actionTypes';
import { withRouter } from 'react-router';

export function login(email, password) {
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
}

function setLoginPending(value) {
  return {
    type: types.SET_LOGIN_PENDING,
    payload: value
  };
}

export function setLoginSuccess(value) {
  return {
    type: types.SET_LOGIN_SUCCESS,
    payload: value
  };
}

function setLoginError(value) {
  return {
    type: types.SET_LOGIN_ERROR,
    payload: value
  };
}

function callLoginApi(email, password, callback) {
  setTimeout(() => {
    if (email === "admin@example.com" && password === "admin") {
      return callback(null);
    } else {
      return callback(new Error("Invalid email and password"));
    }
  }, 1000);
}
