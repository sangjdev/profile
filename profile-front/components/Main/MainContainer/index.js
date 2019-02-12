import React from 'react';
import MainLeftContainer from '../MainLeftContainer';
import MainRightContainer from '../MainRightContainer';
import Modal from '../../Modal';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as modalActions from '../../../reducers/modal';

const index = props => {
  return (
    <div className="container">
      <MainLeftContainer modalActions={props.ModalActions} />
      <MainRightContainer />
      <Modal modalOpen={props.modalOpen} modalActions={props.ModalActions} />
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
      modalOpen: state.modal.modalOpen
    };
  },
  dispatch => ({
    ModalActions: bindActionCreators(modalActions, dispatch)
  })
)(index);
