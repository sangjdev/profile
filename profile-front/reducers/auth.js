import { handleActions, createAction } from 'redux-actions';
import axios from 'axios';

// action type
const SET_REGISTER = 'auth/SET_REGISTER';
const SET_REGISTER_PENDING = 'auth/SET_REGISTER_PENDING';
const SET_REGISTER_FULFILLED = 'auth/SET_REGISTER_FULFILLED';
const SET_REGISTER_REJECTED = 'auth/SET_REGISTER_REJECTED';

// action creator
export const setRegister = postId => ({
  type: SET_REGISTER,
  payload: getPostAPI(postId)
});

// api call
function getPostAPI(postId) {
  return axios.get(`http://jsonplaceholder.typicode.com/posts/${postId}`);
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
