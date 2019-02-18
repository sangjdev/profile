import React, { Component } from 'react';
import RegisterForm from '../RegisterForm';

class index extends Component {
  submit = async values => {
    const { modalActions, authActions } = this.props;
    try {
      await authActions.setRegister(values.name, values.email, values.password);
      modalActions.openSignCompModal();
    } catch (e) {
      console.log(e);
    }
  };
  render() {
    const { auth } = this.props;
    return (
      <div className="formContainer">
        <h1>프로필을 만들어 보세요</h1>
        {/* <p>소셜 로그인 두개</p> */}
        <p>사용하실 이메일을 입력해주세요</p>
        <RegisterForm onSubmit={this.submit} auth={auth} />

        <style jsx>{`
          .formContainer {
            width: 60%;
            height: 70%;
            margin: 0 auto;
            text-align: center;
          }
          .formContainer h1 {
            font-size: 3rem;
            margin: 2rem 0;
            color: #10316b;
          }
          .formContainer p {
            font-size: 1.5rem;
            color: #10316b;
            line-height: 1.8;
          }
        `}</style>
      </div>
    );
  }
}

export default index;
