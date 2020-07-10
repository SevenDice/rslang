import api from '../utils/api';
import { setAlert } from './alert';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from './types';
import store from '../store';
import { getUserSettings } from '../actions/profile';

// Load User
export const loadUser = userId => async (dispatch) => {
  try {
    const res = await api.get(`/users/${userId}`);

    store.dispatch(getUserSettings(userId));

    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

// Register User
export const register = ({ name, email, password }) => async (dispatch) => {
  const body = JSON.stringify({ name, email, password });

  try {
    const res = await api.post('/users', body);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
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
      type: REGISTER_FAIL,
    });
  }
};

// Login User
export const login = (email, password) => async (dispatch) => {
  const body = { email, password };

  try {
    const res = await api.post('/signin', body);
    localStorage.setItem('id', res.data.userId);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
    dispatch(loadUser(res.data.userId))


  } catch (err) {
    console.log(err.response.statusText, err.response.status);
    if (err.response.status === 403) {
      dispatch(setAlert('Неверный пароль', 'danger'));
    } else if (err.response.status === 404) {
      dispatch(setAlert('Пользователь с таким электронным адресом не зарегистрирован', 'danger'));
    }
    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

// Logout / Clear Profile
export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT });
  localStorage.clear();
};
