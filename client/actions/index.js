// ACTIONS
import axios from 'axios';

import * as types from '../constants/actionTypes';

// async action creator
export const getWood = () => {
  return (dispatch) => {
    axios.get('/api/wood')
      .catch(err => {
        console.log(err);
      })
      .then(response => {
        dispatch({
          type: types.GET_WOOD,
          payload: response.data
        })
      });
  }
};

export const getStain = () => {
  return (dispatch) => {
    axios.get('/api/stain')
      .catch(err => {
        console.log(err);
      })
      .then(response => {
        dispatch({
          type: types.GET_STAIN,
          payload: response.data
        })
      });
  }
};

export const getData = () => {
  return (dispatch) => {
    axios.get('/api/analytics')
      .catch(err=> {
        console.log(err);
      })
      .then(response => {
        dispatch({
          type:types.GET_DATA,
          payload: response.data
        })
      })
  }
}
export const submitOrder = (value) => {
  return {
    type: types.SUBMIT_ORDER,
    payload: value
  }
};

export const selectWood = (value) => {
  // console.log('value', value);
  return {
    type: types.SELECT_WOOD,
    payload: value
  }
};
export const selectStain = (value) => {
  console.log(value);
  return {
    type: types.SELECT_STAIN,
    payload: value
  }
};