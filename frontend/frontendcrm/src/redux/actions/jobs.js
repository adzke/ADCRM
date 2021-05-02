import axios from 'axios';

import { GET_JOBS } from './types';
import { returnErrors } from './messages';
import { tokenConfig } from './auth';
import { API_URL } from '../proxy/proxy'

// GET JOBS 

export const getJobs = () => (dispatch, getState) =>  {

     axios.get(`${API_URL}/jobs`, tokenConfig(getState)).then( res => {
        dispatch({

            type: GET_JOBS,
            payload: res.data

        });

    }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));}
 