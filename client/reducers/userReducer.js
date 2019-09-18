import * as types from '../constants/actionTypes';

const initialState = {
  user: [],
  view:[],
  transactions: [],
  str: '',
  obj: {}
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
        transactions: action.payload
      };
      case types.GET_NODE_ID:
      return {
        ...state,
        str: action.payload
      };
      case types.SUBMIT_TRANS:
      return {
        ...state,
        str: action.payload,
        obj: action.payload
      };
    default:
      return state;
  }
}

