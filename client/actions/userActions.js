import * as types from '../constants/actionTypes';
import axios from 'axios';

export const getUser = () => {
  return (dispatch) => {
    axios.get('/api/user')
      .catch(err => {
        console.log(err);
      })
      .then(response => {
        dispatch({
          type: types.GET_USER,
          payload: response.data
        })
      });
  }
};

export const viewAccts = (str) => {
  return (dispatch) => {
    axios.post('/api/view', {
      "refresh_token": str
    }).catch(err => {
      console.log(err);
    })
    .then(response => {
      dispatch({
        type: types.View_Acct,
        payload: response.data
      })
    });
  }
}
