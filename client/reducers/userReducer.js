import {
  GET_USER,
  VIEW_ACCT,
  VIEW_TRANSACTIONS,
  GET_NODE_ID,
  SUBMIT_TRANS
} from '../constants/actionTypes';

const initialState = {
  user: [],
  view: [],
  transactions: [],
  //rename refractor
  str: '',
  obj: {}
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        user: action.payload
      };
    case VIEW_ACCT:
      return {
        ...state,
        view: action.payload
      };
    case VIEW_TRANSACTIONS:
      return {
        ...state,
        transactions: action.payload
      };
    case GET_NODE_ID:
      return {
        ...state,
        str: action.payload
      };
    case SUBMIT_TRANS:
      return {
        ...state,
        str: action.payload,
        obj: action.payload
      };
    default:
      return state;
  }
};

export default userReducer;
