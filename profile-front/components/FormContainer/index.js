import React from 'react';

const index = () => {
  return (
    <div className="formContainer">
      <h1>프로필을 만들어 보세요</h1>
      {/* <p>소셜 로그인 두개</p> */}
      <p>사용하실 이메일을 입력해주세요</p>
      <div className="formInputContainer">
        <div className="formInput">
          <input type="text" placeholder="Name" />
        </div>
        <div className="formInput">
          <input type="email" placeholder="Email" />
        </div>
        <div className="formInput">
          <input type="password" placeholder="Password" />
        </div>
      </div>
      <button>회원가입</button>
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
        .formContainer .formInput input::placeholder {
          color: #10316b;
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
};

export default index;
