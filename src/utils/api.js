import axios from 'axios';
import store from '../store';
import { LOGOUT, CLEAR_PROFILE } from '../actions/types';

const api = axios.create({
  baseURL: 'https://cors-anywhere.herokuapp.com/https://afternoon-falls-25894.herokuapp.com',
  //baseURL: 'https://cors-anywhere.herokuapp.com/http://pacific-castle-12388.herokuapp.com',
  //baseURL: 'https://cors-anywhere.herokuapp.com/https://rslang-api.herokuapp.com',
  headers: {
    'Content-Type': 'application/json',
  },
});
/**
 intercept any error responses from the api
 and check if the token is no longer valid.
 ie. Token has expired
 logout the user if the token has expired
**/

api.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response.data.msg === 'Token is not valid') {
      store.dispatch({ type: LOGOUT });
      store.dispatch({ type: CLEAR_PROFILE });
    }
    return Promise.reject(err);
  },
);

export default api;
