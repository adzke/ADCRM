import axios from 'axios';
import { tokenConfig } from './auth';
import { GET_COMPANIES } from './types';
import { returnErrors } from './messages';
import { API_URL } from '../proxy/proxy'
// GET COMPANIES 

export const getCompanies = () => (dispatch, getState) =>  {

     axios.get(`${API_URL}/companies/`, tokenConfig(getState)).then( res => {
        dispatch({

            type: GET_COMPANIES,
            payload: res.data

        });

    }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));}