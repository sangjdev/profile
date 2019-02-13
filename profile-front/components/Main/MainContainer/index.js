import React from 'react';
import axios from 'axios';
import MainLeftContainer from '../MainLeftContainer';
import MainRightContainer from '../MainRightContainer';
import SignInModal from '../../Modal/SignInModal';
import SignCompModal from '../../Modal/SignCompModal';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as modalActions from '../../../reducers/modal';

const index = props => {
  console.log(props);
  return (
    <div className="container">
      <MainLeftContainer modalActions={props.ModalActions} />
      <MainRightContainer modalActions={props.ModalActions} />
      <SignInModal
        signInModalOpen={props.signInModalOpen}
        modalActions={props.ModalActions}
      />
      <SignCompModal
        signCompModalOpen={props.signCompModalOpen}
        modalActions={props.ModalActions}
      />
      <style jsx>{`
        .container {
          width: 100%;
          display: flex;
        }
      `}</style>
    </div>
  );
};

export default connect(
  state => {
    return {
      signInModalOpen: state.modal.signInModalOpen,
      signCompModalOpen: state.modal.signCompModalOpen
    };
  },
  dispatch => ({
    ModalActions: bindActionCreators(modalActions, dispatch)
  })
)(index);
