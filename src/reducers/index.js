import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import profile from './profile';
import words from './words';
import statistics from './statistics';

export default combineReducers({
  alert,
  auth,
  profile,
  words,
  statistics
});
