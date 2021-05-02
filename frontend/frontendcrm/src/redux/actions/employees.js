import axios from 'axios';
import { tokenConfig } from './auth';
import { GET_EMPLOYEES } from './types';
import { EMPLOYEE_ID } from './types';
import { OPEN_EMPLOYEE_DETAIL_FROM } from './types';
import { ADD_EMPLOYEE } from './types';
import { OPEN_EMPLOYEE_DELETE_FROM } from './types';
import { DELETE_EMPLOYEE } from './types';
import { FORM_EMPLOYEE_UPDATE } from './types';
import { PUT_EMPLOYEE } from './types';
import { returnErrors } from './messages';
import { API_URL } from '../proxy/proxy'
import { createMessage } from './messages'
import { OPEN_EMPLOYEE_CREATE_FROM } from './types';
import { CHECKBOX_CHANGE } from './types';

// GET EMPLOYEES 

export const getEmployees = () => (dispatch, getState) =>  {

   axios.get(`${API_URL}/employee/`, tokenConfig(getState)).then( res => {
        dispatch(createMessage({ getEmployees: 'Get Request Sucessful' }));
        dispatch({

            type: GET_EMPLOYEES,
            payload: res.data

        });

    }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));}
    // ADD Employee
    export const postEmployees = (employee) => (dispatch, getState) => {
        axios
          .post(`${API_URL}/employee/`, employee, tokenConfig(getState))
          .then((res) => {
            dispatch(createMessage({ postEmployees: 'Employee Added' }));
            dispatch({
              type: ADD_EMPLOYEE,
              payload: res.data,
            });
            dispatch(employeeCreateOpen(false));
            dispatch(getEmployees(dispatch, getState));
           
          })
          .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
      };

      // Update Employee
    
export const putEmployee = (id, employee) => (dispatch, getState) => {
  
  axios
    .put(`${API_URL}/employee/${id}/`, employee, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ putEmployee: 'Employee Updated' }));
      dispatch({
        type: PUT_EMPLOYEE,
        payload: res.data,
      });
      dispatch(getEmployees(dispatch, getState));
      dispatch(employeeDetailOpen(false));
    })
    .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
};

      // Delete Employee
    
      export const deleteEmployee = (id) => (dispatch, getState) => {
  
        axios
          .delete(`${API_URL}/employee/${id}/`, tokenConfig(getState))
          .then((res) => {
            dispatch(createMessage({ deleteEmployee: 'Employee Deleted' }));
            dispatch({
              type: DELETE_EMPLOYEE,
              payload: res.data,
            });
            dispatch(getEmployees(dispatch, getState));
            dispatch(employeeDeleteOpen(false));
            dispatch(employeeDetailOpen(false));
          })
          .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
      };
      


export const formEmployeeUpdate = (formstatus) => {
  return {
    type: FORM_EMPLOYEE_UPDATE,
    payload: formstatus,
  };
};

export const employeeID = (id) => {
  return {
    type: EMPLOYEE_ID,
    payload: id,
  };
};


export const employeeDetailOpen = (formstatus) => {
  return {
    type: OPEN_EMPLOYEE_DETAIL_FROM,
    payload: formstatus,
  };
};


export const employeeDeleteOpen = (deleteopen) => {
  return {
    type: OPEN_EMPLOYEE_DELETE_FROM,
    payload: deleteopen,
  };
};


export const employeeCreateOpen = (createopen) => {
  return {
    type: OPEN_EMPLOYEE_CREATE_FROM,
    payload: createopen,
  };
};


export const checkboxChange = (dispatch, checkbox) => {

  return {
    type: CHECKBOX_CHANGE,
    payload: checkbox,
  };
};

