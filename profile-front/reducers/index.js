import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import members from './members';
import modal from './modal';
import auth from './auth';
export default combineReducers({
  members,
  modal,
  auth,
  form: formReducer
});
