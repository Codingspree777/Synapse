// Merges all of our reducers, tells us how our stores accesses them
import { combineReducers } from 'redux'
import {loginReducer} from './loginReducer'

const reducers = combineReducers({
  login: loginReducer
});

export default reducers;
