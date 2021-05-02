import { GET_COMPANIES } from '../actions/types';

const initialState = {
  companies: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_COMPANIES:
      return {
        ...state,
        companies: action.payload,
      };

    default:
      return state;
  }
}