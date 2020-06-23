import api from '../utils/api';
import {
  WORD_LOADED,
  WORD_LOAD_ERROR,
  CHUNK_WORDS_LOADED,
  CHUNK_WORDS_LOAD_ERROR,
  NUMBER_WORDS_LOADED,
  NUMBER_WORDS_LOAD_ERROR,
  USER_WORDS_LOADED,
  USER_WORDS_LOAD_ERROR,
  USER_WORD_CREATED,
  USER_WORD_CREATE_ERORR,
  USER_WORD_LOADED,
  USER_WORD_LOAD_ERROR,
  USER_WORD_UPDATED,
  USER_WORD_UPDATE_ERROR,
  USER_WORD_DELETED,
  USER_WORD_DELETE_ERROR } from './types'
  
// Get word by id
export const getWordById = (wordId) => async dispatch => {
  try {
    const res = await api.get(`words/${wordId}`);

    dispatch({
      type: WORD_LOADED,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: WORD_LOAD_ERROR
    });
  }
};

// Get a chunk of words
export const getChunkOfWords = (group, page, wordsPerExampleSentenceLTE, wordsPerPage) => async dispatch => {
  try {
    const res = await api.get(`words?page=${page}&group=${group}&wordsPerExampleSentenceLTE=${wordsPerExampleSentenceLTE}&wordsPerPage=${wordsPerPage}`);

    dispatch({
      type: CHUNK_WORDS_LOADED,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: CHUNK_WORDS_LOAD_ERROR
    });
  }
};

// Get a total number of words. If wordsPerExampleSentenceLTE is specified then returns number of full pages.
export const getNumberOfWords = (group, wordsPerExampleSentenceLTE, wordsPerPage) => async dispatch => {
  try {
    const res = await api.get(`words/count?group=${group}&wordsPerExampleSentenceLTE=${wordsPerExampleSentenceLTE}&wordsPerPage=${wordsPerPage}`);

    dispatch({
      type: NUMBER_WORDS_LOADED,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: NUMBER_WORDS_LOAD_ERROR
    });
  }
};

// Gets all user words
export const getAllUserWords = userId => async dispatch => {
  try {
    const res = await api.get(`/users/${userId}/words`);

    dispatch({
      type: USER_WORDS_LOADED,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: USER_WORDS_LOAD_ERROR
    });
  }
};

// Create a user word
export const createUserWord = (userId, wordId, params) => async dispatch => {
  try {
    const res = await api.post(`/users/${userId}/words/${wordId}`, params);

    dispatch({
      type: USER_WORD_CREATED,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: USER_WORD_CREATE_ERORR
    });
  }
};

// Gets a user word by id
export const getUserWordById = (userId, wordId) => async dispatch => {
  try {
    const res = await api.get(`/users/${userId}/words/${wordId}`);

    dispatch({
      type: USER_WORD_LOADED,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: USER_WORD_LOAD_ERROR
    });
  }
};

// Updates a user word by id
export const updateUserWordById = (userId, wordId, params) => async dispatch => {
  try {
    const res = await api.put(`/users/${userId}/words/${wordId}`, params);

    dispatch({
      type: USER_WORD_UPDATED,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: USER_WORD_UPDATE_ERROR
    });
  }
};

// Deletes user words by id
export const deleteUserWordById = (userId, wordId) => async dispatch => {
  try {
    const res = await api.delete(`/users/${userId}/words/${wordId}`);

    dispatch({
      type: USER_WORD_DELETED,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: USER_WORD_DELETE_ERROR
    });
  }
};