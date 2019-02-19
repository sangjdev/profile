import React from "react";
import MainLeftContainer from "../MainLeftContainer";
import MainRightContainer from "../MainRightContainer";
import SignInModal from "../../Modal/SignInModal";
import SignCompModal from "../../Modal/SignCompModal";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as modalActions from "../../../reducers/modal";
import * as authActions from "../../../reducers/auth";

const index = props => {
  return (
    <div className="container">
      <MainLeftContainer modalActions={props.ModalActions} />
      <MainRightContainer
        modalActions={props.ModalActions}
        authActions={props.AuthActions}
        auth={props.auth}
      />
      <SignInModal modal={props.modal} modalActions={props.ModalActions} />
      <SignCompModal modal={props.modal} modalActions={props.ModalActions} />
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
      ...state
    };
  },
  dispatch => ({
    ModalActions: bindActionCreators(modalActions, dispatch),
    AuthActions: bindActionCreators(authActions, dispatch)
  })
)(index);
