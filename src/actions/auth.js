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


// Load User
export const loadUser = (id) => async dispatch => {
  try {
    const res = await api.get(`users/${id}`);
    console.log(res);
    
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

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    });
    dispatch(loadUser());
  } catch (err) {
    console.log('Пароль не соответствует требованиям. Выберите другой пароль');
    if (err) {
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
    console.log(err.message);
    console.log('Электронный адрес или пароль введены неверно');
    if (err) {
     dispatch(setAlert('Электронный адрес или пароль введены неверно', 'danger'));
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
