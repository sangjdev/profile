import { combineReducers } from 'redux';
import members from './members';
import modal from './modal';
import auth from './auth';
export default combineReducers({
  members,
  modal,
  auth
});
