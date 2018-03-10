

import { 
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER
} from './types';

export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    };
};

export const passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    };
};

export const loginRequest = ({ email, password }) => {
    return {
        type: LOGIN_USER,
        payload: { email, password }
        
    };
};

export const loginUserFail = function loginUserFail() {
    return {
        type: LOGIN_USER_FAIL,
        payload: 'Authenication fail' 
    };
};

export const loginUserSuccess = function loginUserSuccess(user) {
    return {
        type: LOGIN_USER_SUCCESS,
        payload: user 
    };   
};
