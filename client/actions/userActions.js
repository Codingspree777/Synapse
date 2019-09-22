import axios from 'axios';

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

import {
  GET_USER_DETAILS_API,
  GET_USER_ACCOUNTS_API,
  GET_USER_TRANSACTIONS_API,
  CREATE_TRANSACTION_API
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
export const viewTransactions = nodeID => {
  return dispatch => {
    axios
      .post(GET_USER_TRANSACTIONS_API, { nodeID })
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
export const getNode = nodeID => {
  return {
    type: GET_NODE_ID,
    payload: nodeID
  };
};

export const inputRecipient = toRecipientID => {
  return {
    type: INPUT_RECIPIENT_ID,
    payload: toRecipientID
  };
};

export const inputAccountType = accountType => {
  return {
    type: INPUT_RECIPIENT_ACCT_TYPE,
    payload: accountType
  };
};

export const inputAmount = amount => {
  return {
    type: INPUT_AMOUNT,
    payload: amount
  };
};

export const inputCurrency = currency => {
  return {
    type: INPUT_CURRENCY,
    payload: currency
  };
};

export const submitTransaction = (
  nodeID,
  toRecipientID,
  accountType,
  amount,
  currency
) => {
  return dispatch => {
    axios
      .post(CREATE_TRANSACTION_API, {
        nodeID: nodeID,
        toRecipientID: toRecipientID,
        accountType: accountType,
        amount: amount,
        currency: currency
      })
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
