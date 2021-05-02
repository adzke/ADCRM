import { GET_EMPLOYEES, ADD_EMPLOYEE, FORM_EMPLOYEE_UPDATE, EMPLOYEE_ID, OPEN_EMPLOYEE_DETAIL_FROM, DELETE_EMPLOYEE, OPEN_EMPLOYEE_DELETE_FROM, OPEN_EMPLOYEE_CREATE_FROM,CHECKBOX_CHANGE} from '../actions/types';

const initialState = {
  employees: [],
  open: false,
  id: null,
  detailopen: false,
  deleteopen: false,
  createopen: false,
  checkboxstate: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_EMPLOYEES:
      return {
        ...state,
        employees: action.payload,
      };
    case ADD_EMPLOYEE:
       return {
         ...state,
         employees: [...state.employees, action.payload],
         open: false,
       };

    case DELETE_EMPLOYEE:
       return {
         ...state,
        
       };
    case FORM_EMPLOYEE_UPDATE:
        return {
          ...state,
          open: action.payload,
        };

     case EMPLOYEE_ID:
        return {
          ...state,
          id: action.payload,
        };

      case OPEN_EMPLOYEE_DETAIL_FROM:
        return {
          ...state,
          detailopen: action.payload,
        };
      case OPEN_EMPLOYEE_DELETE_FROM:
        return {
          ...state,
          deleteopen: action.payload,
        };  

      case OPEN_EMPLOYEE_CREATE_FROM:
        return {
          ...state,
          createopen: action.payload,
        }; 

      case CHECKBOX_CHANGE:
        return {
          ...state,
          createopen: action.payload,
        }; 

    default:
      return state;
  }
}