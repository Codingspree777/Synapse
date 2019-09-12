import * as types from '../constants/actionTypes';

const initialState = {
  wood: [],
  stain: [],
  customerData: []
};

const catalogReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_WOOD:
      return {
        ...state,
        wood: action.payload
      };
    case types.GET_STAIN:
      return {
        ...state,
        stain: action.payload
      };
    case types.GET_DATA:
      return {
        ...state,
        customerData: action.payload
      }
    default:
      return state;
  }
};

export default catalogReducer;
