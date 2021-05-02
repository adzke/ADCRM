import { GET_JOBS, ADD_JOB, DELETE_JOB, CLEAR_JOBS
} from '../actions/types';





const initialState = {
 jobs: [], 
 open: false,
};

export default function (state = initialState, action) {
 switch (action.type) {
   case GET_JOBS:
     return {
       ...state,
       jobs: action.payload,
     };
     case ADD_JOB:
       return {
         ...state,
         jobs: [...state.jobs, action.payload],
         open: false,
       };
     case DELETE_JOB:
         return {
           ...state,
           jobs: state.jobs.filter((job) => job.id !== action.payload),
         };
     case CLEAR_JOBS:
       return {
         ...state,
         jobs: [],
       };  
   default:
     return state;
 }
}