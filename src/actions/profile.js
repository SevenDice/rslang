import api from '../utils/api';
import { setAlert } from './alert';

import {
  GET_PROFILE,
  PROFILE_ERROR,
  CLEAR_PROFILE,
  ACCOUNT_DELETED
} from './types';

// // User Settings
// export const loadSettings = (id) => async dispatch => {
//   try {
//     const res = await api.get(`users/${id}/settings`);
//     console.log(res.data);
    
//     dispatch({
//       type: USER_LOADED, //Сделать редьюсеры
//       payload: res.data
//     });
//   } catch (err) {
//     dispatch({
//       type: AUTH_ERROR
//     });
//   }
// };

// // Set user settings
// export const setUserSettings = (id) => async dispatch => {
//   try {
//     const res = await api.put(`users/${id}`);
//     console.log(res.data);
    
//     dispatch({
//       type: USER_LOADED, //Сделать редьюсеры
//       payload: res.data
//     });
//   } catch (err) {
//     dispatch({
//       type: AUTH_ERROR
//     });
//   }
// };

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
