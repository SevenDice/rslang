import {
  STATISTICS_LOADED,
  STATISTICS_LOAD_ERROR,
  STATISTICS_UPDATED,
  STATISTICS_UPDATE_ERROR
} from '../actions/types'

const initialState = {
  statistic: {}
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case STATISTICS_LOADED:
      return {
        ...state,
        statistic: payload
      };
    case STATISTICS_LOAD_ERROR:
      return {
        ...state,
        statistic: {
          learnedWords: 0,
          optional: { 
            wordsSucces: 0,
            wordsErrors: 0,
            wordsLearnedDay: 0,
            wordsSuccesDay: 0,
            wordsErrorDay: 0
          }
        }    
      };
    case STATISTICS_UPDATED:
      return {
        ...state,
        statistic: payload
      };
    case STATISTICS_UPDATE_ERROR:
      return {
        ...state,
        statistic: {
          learnedWords: 0,
          optional: { 
            wordsSucces: 0,
            wordsErrors: 0,
            wordsLearnedDay: 0,
            wordsSuccesDay: 0,
            wordsErrorDay: 0
          }
        }    
      };
  default:
    return state;  
  }
}      