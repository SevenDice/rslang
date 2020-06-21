import api from '../utils/api';
import setAuthToken from '../utils/setAuthToken';
import { setAlert } from './alert';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT
} from './types';
//import { Redirect } from 'react-router-dom';


// Load User
export const loadUser = (id) => async dispatch => {
  try {
    const res = await api.get(`users/${id}`);
    //const settings = await api.get(`users/${id}/settings`);
    console.log(res.data);
    //console.log(settings.data);
    
    dispatch({
      type: USER_LOADED,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR
    });
  }
};

// Register User
export const register = ({email, password }) => async dispatch => {
  const body = JSON.stringify({email, password });

  try {
    const res = await api.post('/users', body);
    console.log(res);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    });
    dispatch(loadUser());
  } catch (err) {
    console.log(err.response.statusText, err.response.status);
    if (err.response.status === 417) {
      dispatch(setAlert('Пользователь с данным элекронным адресом уже зарегистрирован', 'danger'));
    } else if (err.response.status === 422) {
      dispatch(setAlert('Пароль не соответствует требованиям. Выберите другой пароль', 'danger'));
    }
    dispatch({
      type: REGISTER_FAIL
    });
  }
};

// Login User
export const login = (email, password) => async dispatch => {
  const body = JSON.stringify({ email, password });

  try {
    const res = await api.post('/signin', body);
    console.log(res.data);
    const token = res.data.token;
    const id = res.data.userId;
    localStorage.setItem('token', token);
    localStorage.setItem('id', id);
    setAuthToken(token);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    });

    // dispatch(loadUser());
  } catch (err) {
    console.log(err.response.statusText, err.response.status);
    if (err.response.status === 403) {
     dispatch(setAlert('Неверный пароль', 'danger'));
    } else if (err.response.status === 404) {
      dispatch(setAlert('Пользователь с таким электронным адресом не зарегистрирован', 'danger'));
    }

    dispatch({
      type: LOGIN_FAIL
    });
  }
};

// Logout / Clear Profile
export const logout = () => dispatch => {
  dispatch({ type: LOGOUT });
  localStorage.clear();
  
};
