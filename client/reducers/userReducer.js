import * as types from "../constants/actionTypes";

const initialState = {
  user: [],
  refresher_token: ''
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_USER:
      return {
        ...state,
        user: action.payload
      };
      case types.View_Acct:
      return {
        ...state,
        refresher_token: action.payload
      };
    default:
      return state;
  }
}
