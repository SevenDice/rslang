import api from '../utils/api';
import {
   STATISTICS_LOADED,
   STATISTICS_LOAD_ERROR,
   STATISTICS_UPDATED,
   STATISTICS_UPDATE_ERROR
 } from './types'

 //Get stats
export const getStatistics = (userId) => async dispatch => {
  try {
    const res = await api.get(`/users/${userId}/statistics`);
    dispatch({
      type: STATISTICS_LOADED,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: STATISTICS_LOAD_ERROR
    });
  }
};

export const UpdateStatistics = (userId, params) => async dispatch => {
  try {
    const res = await api.put(`/users/${userId}/statistics`, params);

    dispatch({
      type: STATISTICS_UPDATED,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: STATISTICS_UPDATE_ERROR
    });
  }
};