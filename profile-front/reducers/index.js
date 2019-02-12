import { combineReducers } from 'redux';
import members from './members';
import modal from './modal';

export default combineReducers({
  members,
  modal
});
