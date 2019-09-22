import {
  GET_USER,
  VIEW_ACCT,
  VIEW_TRANSACTIONS,
  GET_NODE_ID,
  INPUT_RECIPIENT_ID,
  INPUT_RECIPIENT_ACCT_TYPE,
  INPUT_AMOUNT,
  INPUT_CURRENCY,
  SUBMIT_TRANS
} from '../constants/actionTypes';

const initialState = {
  user: [],
  view: [],
  transactions: [],
  nodeID: '',
  accountType: '',
  toRecipientID: '',
  amount: '',
  currency: ''
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
        nodeID: action.payload
      };
    case INPUT_RECIPIENT_ID:
      return {
        ...state,
        toRecipientID: action.payload
      };
    case INPUT_RECIPIENT_ACCT_TYPE:
      return {
        ...state,
        accountType: action.payload
      };
    case INPUT_AMOUNT:
      return {
        ...state,
        amount: action.payload
      };
    case INPUT_CURRENCY:
      return {
        ...state,
        currency: action.payload
      };
    case SUBMIT_TRANS:
      return {
        ...state,
        nodeID: action.payload
      };
    default:
      return state;
  }
};

export default userReducer;
