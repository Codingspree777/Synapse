// Merges all of our reducers, tells us how our stores accesses them
import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import userReducer from './userReducer';

const reducers = combineReducers({
  login: loginReducer,
  //password: loginReducer,
  user: userReducer,
  view: userReducer,
  nodeID: userReducer,
  obj: userReducer,
  transactions: userReducer
});

export default reducers;
