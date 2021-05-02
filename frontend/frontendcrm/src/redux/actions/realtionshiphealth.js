import axios from 'axios';
import { tokenConfig } from './auth';
import { GET_RELATIONSHIPSTATUS } from './types';
import { returnErrors } from './messages';
import { API_URL } from '../proxy/proxy'
// GET COMPANIES 

export const getRealtionshiphealth = () => (dispatch, getState) =>  {

     axios.get(`${API_URL}/realtionshiphealth/`, tokenConfig(getState)).then( res => {
        dispatch({

            type: GET_RELATIONSHIPSTATUS,
            payload: res.data

        });

    }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));}