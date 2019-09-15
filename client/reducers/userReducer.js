import * as types from "../constants/actionTypes";

const initialState = {
  user: []
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_USER:
      return {
        ...state,
        user: action.payload
      };
    default:
      return state;
  }
}
