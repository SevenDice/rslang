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
      sentenceWithMeaning: true,
      sentenceWithCurrentWord: true,
      wordTranscription: true,
      wordPicture: true,
      wordAutoPlay: true,
      currentWordTranslate: true,
      translateSentenceWithWord: true,
      skipToNextCard: false,
      deleteFromTrainList: false,
      moveToHardWordsGroup: false,
      getCustomWordsForTrain: false,
      moveToGroups: false,
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
            sentenceWithMeaning: true,
            sentenceWithCurrentWord: true,
            wordTranscription: true,
            wordPicture: true,
            wordAutoPlay: true,
            currentWordTranslate: true,
            translateSentenceWithWord: true,
            skipToNextCard: false,
            deleteFromTrainList: false,
            moveToHardWordsGroup: false,
            getCustomWordsForTrain: false,
            moveToGroups: false,
          },
        },
      };

    default:
      return state;
  }
}
