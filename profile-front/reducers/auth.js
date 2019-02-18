import { handleActions, createAction } from 'redux-actions';
import axios from '../lib/request';

// action type
const SET_REGISTER = 'auth/SET_REGISTER';
const SET_REGISTER_PENDING = 'auth/SET_REGISTER_PENDING';
const SET_REGISTER_FULFILLED = 'auth/SET_REGISTER_FULFILLED';
const SET_REGISTER_REJECTED = 'auth/SET_REGISTER_REJECTED';

// action creator
export const setRegister = (name, email, password) => ({
  type: SET_REGISTER,
  payload: setRegisterAPI(name, email, password)
});

// api call
function setRegisterAPI(name, email, password) {
  return axios.post('/auth/register', {
    name: name,
    email: email,
    password: password
  });
}

// init state
const initialState = {
  pending: false,
  success: false,
  error: false
};

// reducer
export default handleActions(
  {
    [SET_REGISTER_PENDING]: (state, action) => {
      return {
        ...state,
        pending: true
      };
    },
    [SET_REGISTER_FULFILLED]: (state, action) => {
      return {
        ...state,
        pending: false,
        success: true
      };
    },
    [SET_REGISTER_REJECTED]: (state, action) => {
      return {
        pending: false,
        success: false,
        error: true
      };
    }
  },
  initialState
);
