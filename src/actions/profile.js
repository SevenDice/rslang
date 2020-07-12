import api from '../utils/api';
import { setAlert } from './alert';

import {
  GET_PROFILE,
  PROFILE_ERROR,
  CLEAR_PROFILE,
  ACCOUNT_DELETED,
  USER_SETTINGS_LOADED,
  USER_SETTINGS_LOAD_ERROR,
  USER_SETTINGS_UPDATED,
  USER_SETTINGS_UPDATE_ERROR,
  STATISTICS_LOADED,
  STATISTICS_LOAD_ERROR,
  STATISTICS_UPDATED,
  STATISTICS_UPDATE_ERROR
} from './types';

//import store from '../store';

// Get user statistics
export const getUserStats = (userId) => async (dispatch) => {
  try {
    const res = await api.get(`/users/${userId}/statistics`);
    console.log(res.data);

    dispatch({
      type: STATISTICS_LOADED,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: STATISTICS_LOAD_ERROR,
    });
  }
};

// Upserts new user statistics
export const updateUserStats = (userId, params) => async (dispatch) => {
  try {
    const res = await api.put(`/users/${userId}/statistics`, JSON.stringify(params));
    console.log(res.data);

    dispatch({
      type: STATISTICS_UPDATED,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: STATISTICS_UPDATE_ERROR,
    });
  }
};


// Get user settings
export const getUserSettings = (userId) => async (dispatch) => {
  try {
    console.log(`getUserSettings for ${userId}`);
    const res = await api.get(`/users/${userId}/settings`);
    console.log(res.data);

    dispatch({
      type: USER_SETTINGS_LOADED,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: USER_SETTINGS_LOAD_ERROR,
    });
  }
};

// Set user settings
export const updateUserSettings = (userId, params) => async (dispatch) => {
  try {
    const res = await api.put(`/users/${userId}/settings`, JSON.stringify(params));

    //store.dispatch(getUserSettings(userId));

    dispatch({
      type: USER_SETTINGS_UPDATED,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: USER_SETTINGS_UPDATE_ERROR,
    });
  }
};

// Get current users profile
export const getCurrentProfile = (id) => async (dispatch) => {
  try {
    const res = await api.get(`/users/${id}`);
    
    dispatch({
      type: GET_PROFILE,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      /* payload: { msg: err.response.statusText, status: err.response.status }, */
    });
  }
};

// Create or update profile
export const createProfile = (formData, history, edit = false) => async (dispatch) => {
  try {
    const res = await api.post('/users', formData);

    dispatch({
      type: GET_PROFILE,
      payload: res.data,
    });

    dispatch(setAlert(edit ? 'Profile Updated' : 'Profile Created', 'success'));

    if (!edit) {
      history.push('/dashboard');
    }
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Delete account & profile
export const deleteAccount = (id) => async (dispatch) => {
  if (window.confirm('Вы уверены? Данное действие НЕ может быть отменено')) {
    try {
      await api.delete(`/users/${id}`);

      dispatch({ type: CLEAR_PROFILE });
      dispatch({ type: ACCOUNT_DELETED });

      dispatch(setAlert('Ваш аккаунт был удален навсегда'));
    } catch (err) {
      dispatch({
        type: PROFILE_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  }
};
