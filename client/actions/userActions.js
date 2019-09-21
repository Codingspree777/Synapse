import axios from 'axios';

import {
  GET_USER,
  VIEW_ACCT,
  VIEW_TRANSACTIONS,
  GET_NODE_ID,
  SUBMIT_TRANS
} from '../constants/actionTypes';

import {
  GET_USER_DETAILS_API,
  GET_USER_ACCOUNTS_API,
  GET_USER_TRANSACTIONS_API
} from '../constants/apiConstants';

// async action creator with redux thunk
//doing an API call local server apiRoutes
export const getUser = () => {
  return dispatch => {
    axios
      .get(GET_USER_DETAILS_API)
      .then(response => {
        dispatch({
          type: GET_USER,
          payload: response.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const viewAccounts = () => {
  return dispatch => {
    axios
      .get(GET_USER_ACCOUNTS_API)
      .then(response => {
        dispatch({
          type: VIEW_ACCT,
          payload: response.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
};

//Need to do a POST instead of a GET, because to pass in the nodeId
export const viewTransactions = str => {
  return dispatch => {
    axios
      .post(GET_USER_TRANSACTIONS_API, { str })
      .then(response => {
        dispatch({
          type: VIEW_TRANSACTIONS,
          payload: response.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
};

//Need to have NodeID in store to post transaction
export const getNode = str => {
  return {
    type: GET_NODE_ID,
    payload: str
  };
};

//TODO: RENAME VARIABLES
export const submitTransaction = (str, obj) => {
  return dispatch => {
    axios
      .post(CREATE_TRANSACTION_API, { string: str, info: obj })
      .then(response => {
        dispatch({
          type: SUBMIT_TRANS,
          payload: response.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
};
