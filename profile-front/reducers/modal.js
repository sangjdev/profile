import { handleActions, createAction } from 'redux-actions';

const OPEN_MODAL = 'modal/OPEN_MODAL';
const CLOSE_MODAL = 'modal/CLOSE_MODAL';

export const openModal = createAction(OPEN_MODAL);
export const closeModal = createAction(CLOSE_MODAL);

const initialState = {
  modalOpen: false
};

export default handleActions(
  {
    [OPEN_MODAL]: (state, action) => {
      return {
        modalOpen: true
      };
    },
    [CLOSE_MODAL]: (state, action) => {
      return {
        modalOpen: false
      };
    }
  },
  initialState
);
