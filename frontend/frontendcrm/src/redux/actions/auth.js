import axios from 'axios';
import { returnErrors } from './messages';
import { API_URL } from '../proxy/proxy'
import {
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    LOGOUT_SUCCESS,
    USERNAME_CHANGE,
    PASSWORD_CHANGE,
} from './types';
import { createMessage } from './messages'

// CHECK TOKEN & LOAD USER
export const loadUser = () => (dispatch, getState) => {
    
    axios.get(`${API_URL}/api/auth/user`, tokenConfig(getState))
    .then(res => {
        dispatch({
            type: USER_LOADED,
            payload: res.data 
        });
    }).catch((err) => {
        dispatch(createMessage({ loadUser: 'Authorisation failed' }));
        dispatch(returnErrors(err.response.data, err.response.status));
        dispatch({
          type: AUTH_ERROR,
        });


    });
    
}


// LOGIN USER
export const login = (username, password) => dispatch => {

    // Headers
    const config ={
        headers: {
            'Content-Type': 'application/json'
        }
    };

    // Request Body 
    const body = JSON.stringify({ username, password });


    axios.post(`${API_URL}/api/auth/login`, body, config)
    .then(res => {
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data 
        });
    }).catch((err) => {
        dispatch(returnErrors(err.response.data, err.response.status));
        dispatch({
          type: LOGIN_FAIL,
        });


    });
    
}

// LOGOUT USER

export const logout = () => (dispatch, getState) => {
   
    axios.post(`${API_URL}/api/auth/logout`, null, tokenConfig(getState))
    .then(res => {
        dispatch({
            type: LOGOUT_SUCCESS,
        });
    }).catch((err) => {
        dispatch(returnErrors(err.response.data, err.response.status));
    });
    
}



// Setup Config with Token - helper function 

export const tokenConfig = getState => {

    // Get Token from State
    const token = getState().auth.token;



    // Headers
    const config ={

        headers: {
            'Content-Type': 'multipart/form-data'

        }
    }


    // If token, add to headers config
    if(token) {

        config.headers['Authorization'] = `Token ${token}`;
    }

    return config

}

export const passwordChange = (password) => {

    return {
      type: PASSWORD_CHANGE,
      payload: password,
    };
  };

export const usernameChange = (username) => {

    return {
      type: USERNAME_CHANGE,
      payload: username,
    };
  };