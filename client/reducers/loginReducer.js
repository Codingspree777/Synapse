import {
  SET_LOGIN_PENDING,
  SET_LOGIN_SUCCESS,
  SET_LOGIN_ERROR,
} from '../constants/actionTypes';

const initialState = {
  isLoginSuccess: false,
  isLoginPending: false,
  loginError: null
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOGIN_PENDING:
      return {
        ...state,
        isLoginPending: action.payload
      };

    case SET_LOGIN_SUCCESS:
      return {
        ...state,
        isLoginSuccess: action.payload
      };

    case SET_LOGIN_ERROR:
      return {
        ...state,
        loginError: action.payload
      };

    default:
      return state;
  }
}

export default loginReducer;
