import React, { Component } from 'react';
import Router from 'next/router';
// import * as joi from 'joi';

// const schema = Joi.object()
//   .keys({
//     username: Joi.string()
//       .alphanum()
//       .min(3)
//       .max(30)
//       .required(),
//     email: Joi.string().email({ minDomainAtoms: 2 }),
//     password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/)
//   })
//   .with('username', 'email', 'password');

// const result = Joi.validate(
//   { username: 'abc', email: 'abc@naver.com', password: '12512bddsg' },
//   schema
// );

class index extends Component {
  state = {
    name: '',
    email: '',
    password: ''
  };
  onChangeName = e => {
    this.setState({
      name: e.target.value
    });
  };
  onChangeEmail = e => {
    this.setState({
      email: e.target.value
    });
  };
  onChangePassword = e => {
    this.setState({
      password: e.target.value
    });
  };
  onAlert = () => {
    // console.log(this.state);
    // console.log(this.props);
    const { modalActions } = this.props;
    modalActions.openSignCompModal();
    // alert('회원가입이 완료되었습니다. 프로필 페이지로 이동합니다');
    // Router.push('/profile');
  };
  render() {
    return (
      <div className="formContainer">
        <h1>프로필을 만들어 보세요</h1>
        {/* <p>소셜 로그인 두개</p> */}
        <p>사용하실 이메일을 입력해주세요</p>
        <div className="formInputContainer">
          <div className="formInput">
            <input type="text" placeholder="Name" onChange={this.onChangeName} />
          </div>
          <div className="formInput">
            <input type="email" placeholder="Email" onChange={this.onChangeEmail} />
          </div>
          <div className="formInput">
            <input
              type="password"
              placeholder="Password"
              onChange={this.onChangePassword}
            />
          </div>
        </div>
        <button onClick={this.onAlert}>회원가입</button>
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
          .formInputContainer {
            margin: 2rem 0;
          }
          .formContainer .formInput {
            width: 100%;
          }
          .formContainer .formInput input {
            border: none;
            outline: none;
            width: 80%;
            height: 4rem;
            background-color: #dee1ec;
            margin: 1rem;
            padding: 0 2rem;
            border-radius: 8px;
            font-size: 1.3rem;
            font-weight: 700;
            color: #10316b;
          }
          .formContainer .formInput input:focus::placeholder {
            transition: all 0.1s ease-in;
            color: transparent;
          }
          .formContainer .formInput input::placeholder {
            color: #5d7baf;
          }
          .formContainer button {
            border: 1px solid white;
            border-radius: 50px;
            padding: 1rem 4rem;
            background: #10316b;
            outline: none;
            cursor: pointer;

            color: white;
            font-size: 1.5rem;
          }
        `}</style>
      </div>
    );
  }
}

export default index;
