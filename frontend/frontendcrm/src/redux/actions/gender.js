import axios from 'axios';
import { tokenConfig } from './auth';
import { GET_GENDER } from './types';
import { returnErrors } from './messages';
import { API_URL } from '../proxy/proxy'
// GET COMPANIES 

export const getGender = () => (dispatch, getState) =>  {

     axios.get(`${API_URL}/gender/`, tokenConfig(getState)).then( res => {
        dispatch({

            type: GET_GENDER,
            payload: res.data

        });

    }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));}