import * as types from '../constants/actionTypes';

const initialState = {
  isLoginSuccess: false,
  isLoginPending: false,
  loginError: null
};

export default function Loginreducer(state = initialState, action) {
  switch (action.type) {
    case types.SET_LOGIN_PENDING:
      return  {
         ...state,
        isLoginPending: action.payload
      };

    case types.SET_LOGIN_SUCCESS:
      return {
        ...state,
        isLoginSuccess: action.payload
      };

    case types.SET_LOGIN_ERROR:
      return {
        ...state,
        loginError: action.payload
      };

    default:
      return state;
  }
}