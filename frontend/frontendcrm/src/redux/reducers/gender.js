import { GET_GENDER } from '../actions/types';

const initialState = {
  gender: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_GENDER:
      return {
        ...state,
        gender: action.payload,
      };

    default:
      return state;
  }
}