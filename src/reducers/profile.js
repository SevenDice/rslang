import {
  GET_PROFILE,
  PROFILE_ERROR,
  CLEAR_PROFILE,
  UPDATE_PROFILE,
  USER_SETTINGS_LOADED,
  USER_SETTINGS_LOAD_ERROR,
} from '../actions/types';

const initialState = {
  profile: null,
  loading: true,
  settings: {
    wordsPerDay: 10,
    optional: {
      level: 1,
      newWords: 5,
      wordTranslate: true,
      sentenceWithMeaning: false,
      sentenceWithCurrentWord: true,
      wordTranscription: false,
      wordPicture: true,
      wordAutoPlay: false,
      currentWordTranslate: true,
      translateSentenceWithWord: false,
      skipToNextCard: false,
      deleteFromTrainList: true,
      moveToHardWordsGroup: false,
      getCustomWordsForTrain: true,
      moveToGroups: true,
    },
  },
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_PROFILE:
    case UPDATE_PROFILE:
      return {
        ...state,
        profile: payload,
        loading: false,
      };
    case PROFILE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
        profile: null,
      };
    case CLEAR_PROFILE:
      return {
        ...state,
        profile: null,
      };
    case USER_SETTINGS_LOADED:
      return {
        ...state,
        settings: payload,
      };
    case USER_SETTINGS_LOAD_ERROR:
      return {
        ...state,
        settings: {
          wordsPerDay: 10,
          optional: {
            level: 1,
            newWords: 5,
            wordTranslate: true,
            sentenceWithMeaning: false,
            sentenceWithCurrentWord: true,
            wordTranscription: false,
            wordPicture: true,
            wordAutoPlay: false,
            currentWordTranslate: true,
            translateSentenceWithWord: false,
            skipToNextCard: false,
            deleteFromTrainList: true,
            moveToHardWordsGroup: false,
            getCustomWordsForTrain: true,
            moveToGroups: true,
          },
        },
      };

    default:
      return state;
  }
}
