import { GET_RELATIONSHIPSTATUS } from '../actions/types';

const initialState = {
    realtionshiphealth: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_RELATIONSHIPSTATUS:
      return {
        ...state,
        realtionshiphealth: action.payload,
      };

    default:
      return state;
  }
}