import React, { Component } from 'react';
import SignInModal from '../SignInModal';

class SignInModalContainer extends Component {
  submit = async value => {
    const { modalActions } = this.props;
    try {
      // 비동기 로그인 요청
      modalActions.closeSignInModal();
    } catch (e) {
      console.log(e);
    }
  };
  render() {
    const { modal, modalActions } = this.props;
    return (
      <SignInModal
        onSubmit={this.submit}
        modal={modal}
        modalActions={modalActions}
      />
    );
  }
}

export default SignInModalContainer;
