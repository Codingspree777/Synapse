import * as types from "../constants/actionTypes";
import axios from "axios";

// async action creator with redux thunk
//doing an API call local server apiRoutes
export const getUser = () => {
  return dispatch => {
    axios
      .get("/api/user")
      .catch(err => {
        console.log(err);
      })
      .then(response => {
        dispatch({
          type: types.GET_USER,
          payload: response.data
        });
      });
  };
};

export const viewAccounts = () => {
  return dispatch => {
    axios
      .get("/api/view")
      .catch(err => {
        console.log(err);
      })
      .then(response => {
        dispatch({
          type: types.View_Acct,
          payload: response.data
        });
      });
  };
};

//Need to do a POST instead of a GET, because to pass in the nodeId
export const viewTransactions = str => {
  return dispatch => {
    axios
      .post("/api/transactions", { str })
      .catch(err => {
        console.log(err);
      })
      .then(response => {
        dispatch({
          type: types.View_Acct,
          payload: response.data
        });
      });
  };
};
