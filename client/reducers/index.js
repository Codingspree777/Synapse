// Merges all of our reducers, tells us how our stores accesses them
import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import userReducer from './userReducer';

const reducers = combineReducers({
  login: loginReducer,
  user: userReducer,
  view: userReducer,
  transactions: userReducer,
  nodeID: userReducer,
  accountType: userReducer,
  toRecipientID: userReducer,
  amount: userReducer,
  currency: userReducer
});

export default reducers;
