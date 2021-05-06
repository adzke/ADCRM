import axios from 'axios';
import { tokenConfig } from './auth';
import { 
  GET_COMPANIES, 
  ADD_COMPANY, 
  OPEN_COMPANY_CREATE_FROM, 
  COMPANY_ID, PUT_COMPANY, 
  OPEN_COMPANY_DETAIL_FROM,
  DELETE_COMPANY,
  OPEN_COMPANY_DELETE_FROM,
} from './types';
import { returnErrors } from './messages';
import { API_URL } from '../proxy/proxy'
import { createMessage } from './messages'

// GET COMPANIES 

export const getCompanies = () => (dispatch, getState) =>  {

     axios.get(`${API_URL}/companies/`, tokenConfig(getState)).then( res => {
        dispatch({

            type: GET_COMPANIES,
            payload: res.data

        });

    }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));}


    // ADD COMPANIES
    export const postCompanies = (company) => (dispatch, getState) => {
        axios
          .post(`${API_URL}/companies/`, company, tokenConfig(getState))
          .then((res) => {
            dispatch(createMessage({ postCompanies: 'Company Added' }));
            dispatch({
              type: ADD_COMPANY,
              payload: res.data,
            });
            dispatch(companiesCreateOpen(false));
            dispatch(getCompanies(dispatch, getState));
           
          })
          .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
      };

      // PUT COMPANY
    
export const putCompany = (id, company) => (dispatch, getState) => {
  
  axios
    .put(`${API_URL}/companies/${id}/`, company, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ putCompany: 'Company Updated' }));
      dispatch({
        type: PUT_COMPANY,
        payload: res.data,
      });
      dispatch(companyDetailOpen(false))
      dispatch(getCompanies(dispatch, getState));
      // dispatch(employeeDetailOpen(false));
    })
    .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
};

 // Delete Company
    
 export const deleteCompany = (id) => (dispatch, getState) => {
  
  axios
    .delete(`${API_URL}/companies/${id}/`, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ deleteCompany: 'Company Deleted' }));
      dispatch({
        type: DELETE_COMPANY,
        payload: res.data,
      });
      dispatch(getCompanies(dispatch, getState));
      dispatch(companyDeleteOpen(false));
      dispatch(companyDetailOpen(false));
    })
    .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
};

    

      

export const companiesCreateOpen = (createopen) => {
  return {
    type: OPEN_COMPANY_CREATE_FROM,
    payload: createopen,
  };
};
    

export const companyID = (id) => {
  return {
    type: COMPANY_ID,
    payload: id,
  };
};


export const companyDetailOpen = (formstatus) => {
  return {
    type: OPEN_COMPANY_DETAIL_FROM,
    payload: formstatus,
  };
};

export const companyDeleteOpen = (deleteopen) => {
  return {
    type: OPEN_COMPANY_DELETE_FROM,
    payload: deleteopen,
  };
};

