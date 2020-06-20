import api from '../utils/api';
import { setAlert } from './alert';

import {
  GET_PROFILE,
  GET_PROFILES,
  PROFILE_ERROR,
  CLEAR_PROFILE,
  ACCOUNT_DELETED
} from './types';

// Get current users profile
export const getCurrentProfile = (id) => async dispatch => {
  try {
    const res = await api.get(`/users/${id}`);
    console.log(res);
    localStorage.setItem('email', res.data.email);
    dispatch({
      type: GET_PROFILE,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Get all profiles
export const getProfiles = () => async dispatch => {
  dispatch({ type: CLEAR_PROFILE });

  try {
    const res = await api.get('/users');

    dispatch({
      type: GET_PROFILES,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Get profile by ID
export const getProfileById = userId => async dispatch => {
  try {
    const res = await api.get(`/users/${userId}`);

    dispatch({
      type: GET_PROFILE,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Create or update profile
export const createProfile = (
  formData,
  history,
  edit = false
) => async dispatch => {
  try {
    const res = await api.post('/users', formData);

    dispatch({
      type: GET_PROFILE,
      payload: res.data
    });

    dispatch(setAlert(edit ? 'Profile Updated' : 'Profile Created', 'success'));

    if (!edit) {
      history.push('/dashboard');
    }
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};





// Delete account & profile
export const deleteAccount = (id) => async dispatch => {
  if (window.confirm('Вы уверены? Данное действие НЕ может быть отменено')) {
    try {
      await api.delete(`/users/${id}`);

      dispatch({ type: CLEAR_PROFILE });
      dispatch({ type: ACCOUNT_DELETED });

      dispatch(setAlert('Ваш аккаунт был удален навсегда'));
    } catch (err) {
      dispatch({
        type: PROFILE_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }
  }
};
