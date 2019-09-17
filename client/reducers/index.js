// Merges all of our reducers, tells us how our stores accesses them
import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import userReducer from "./userReducer";

const reducers = combineReducers({
  user: userReducer,
  login: loginReducer,
  view: userReducer,
  transactions: userReducer
});

export default reducers;
