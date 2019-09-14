import * as types from "../constants/actionTypes";

function login(email, password) {
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
  }
}
const initialState = {
  isLoginSuccess: false,
  loginError: null
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_LOGIN_SUCCESS:
      return {
        ...state,
        isLoginSuccess: action.isLoginSuccess
      };
    case types.SET_LOGIN_ERROR:
      return {
        ...state,
        loginError: action.loginError
      };
    default:
      return state;
  }
};

export default {loginReducer,login};
