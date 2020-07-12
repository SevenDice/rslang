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
  USER_WORD_DELETE_ERROR,
  USER_AGGREGATED_NEW_WORDS_LOADED,
  USER_AGGREGATED_NEW_WORDS_LOAD_ERROR,
  USER_AGGREGATED_EASY_WORDS_LOADED,
  USER_AGGREGATED_EASY_WORDS_LOAD_ERROR,
  USER_AGGREGATED_MEDIUM_WORDS_LOADED,
  USER_AGGREGATED_MEDIUM_WORDS_LOAD_ERROR,
  USER_AGGREGATED_HARD_WORDS_LOADED,
  USER_AGGREGATED_HARD_WORDS_LOAD_ERROR,
  USER_AGGREGATED_DELETED_WORDS_LOADED,
  USER_AGGREGATED_DELETED_WORDS_LOAD_ERROR
} from '../actions/types';

const initialState = {
  words: {},
  newwords: {},
  easywords: {},
  mediumwords: {},
  hardwords: {},
  deletedwords: {}
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case WORD_LOADED:
    case CHUNK_WORDS_LOADED:
    case NUMBER_WORDS_LOADED:  
    case USER_WORDS_LOADED:
    case USER_WORD_CREATED:
    case USER_WORD_LOADED:  
    case USER_WORD_UPDATED:
    case USER_WORD_DELETED:          
      return {
        ...state,
        words: payload
      };  
    case USER_AGGREGATED_NEW_WORDS_LOADED:
      return {
        ...state,
        newwords: payload
      };
    case USER_AGGREGATED_EASY_WORDS_LOADED:
      return {
        ...state,
        easywords: payload
      };
    case USER_AGGREGATED_MEDIUM_WORDS_LOADED:
      return {
        ...state,
        mediumwords: payload
      };
    case USER_AGGREGATED_HARD_WORDS_LOADED:
      return {
        ...state,
        hardwords: payload
      };
    case USER_AGGREGATED_DELETED_WORDS_LOADED:
      return {
        ...state,
        deletedwords: payload
      };      
    case USER_WORD_LOAD_ERROR:
    case WORD_LOAD_ERROR:
    case CHUNK_WORDS_LOAD_ERROR:
    case NUMBER_WORDS_LOAD_ERROR:
    case USER_WORDS_LOAD_ERROR:
    case USER_WORD_CREATE_ERORR:
    case USER_WORD_UPDATE_ERROR:
    case USER_WORD_DELETE_ERROR:    
      return {
        ...state,
        words: {}  
      };
    case USER_AGGREGATED_NEW_WORDS_LOAD_ERROR:
      return {
        ...state,
        newwords: {}
      };
    case USER_AGGREGATED_EASY_WORDS_LOAD_ERROR:
      return {
        ...state,
        easywords: {}
      };
    case USER_AGGREGATED_MEDIUM_WORDS_LOAD_ERROR:
      return {
        ...state,
        mediumwords: {}
      };
    case USER_AGGREGATED_HARD_WORDS_LOAD_ERROR:
      return {
        ...state,
        hardwords: {}
      };
    case USER_AGGREGATED_DELETED_WORDS_LOAD_ERROR:
      return {
        ...state,
        deletedwords: {}
      };   
    default:
      return state;
  }
}