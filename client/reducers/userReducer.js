import * as types from "../constants/actionTypes";

const initialState = {
  user: [],
  view:[],
  str:''
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
        view: action.payload
      };
      case types.View_Transactions:
      return {
        ...state,
        str: action.payload
      };
    default:
      return state;
  }
}

