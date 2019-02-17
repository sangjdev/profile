import { handleActions, createAction } from 'redux-actions';

// action type
const OPEN_SIGNIN_MODAL = 'modal/OPEN_SIGNIN_MODAL';
const CLOSE_SIGNIN_MODAL = 'modal/CLOSE_SIGNIN_MODAL';
const OPEN_SIGNCOMP_MODAL = 'modal/OPEN_SIGNCOMP_MODAL';
const CLOSE_SIGNCOMP_MODAL = 'modal/CLOSE_SIGNCOMP_MODAL';

// action creator
export const openSignInModal = createAction(OPEN_SIGNIN_MODAL);
export const closeSignInModal = createAction(CLOSE_SIGNIN_MODAL);
export const openSignCompModal = createAction(OPEN_SIGNCOMP_MODAL);
export const closeSignCompModal = createAction(CLOSE_SIGNCOMP_MODAL);

// init state
const initialState = {
  signInModalOpen: false,
  signCompModalOpen: false
};

// reducer
export default handleActions(
  {
    [OPEN_SIGNIN_MODAL]: (state, action) => {
      return {
        ...state,
        signInModalOpen: true
      };
    },
    [CLOSE_SIGNIN_MODAL]: (state, action) => {
      return {
        ...state,
        signInModalOpen: false
      };
    },
    [OPEN_SIGNCOMP_MODAL]: (state, action) => {
      return {
        ...state,
        signCompModalOpen: true
      };
    },
    [CLOSE_SIGNCOMP_MODAL]: (state, action) => {
      return {
        ...state,
        signCompModalOpen: false
      };
    }
  },
  initialState
);
