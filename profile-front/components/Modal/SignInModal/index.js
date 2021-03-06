import React from 'react';
import { Field, reduxForm } from 'redux-form';

const validate = values => {
  const errors = {};
  if (!values.email) {
    errors.email = '필수 입력값입니다';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = '유효하지 않은 이메일 형식입니다';
  }
  if (!values.password) {
    errors.password = '필수 입력값입니다';
  }
  return errors;
};

const renderField = ({
  input,
  label,
  type,
  modalActions,
  meta: { touched, error, warning }
}) => (
  <div>
    <div>
      <input
        {...input}
        placeholder={label}
        className="formField"
        type={type}
        onKeyDown={closeModal(modalActions)}
      />
      {touched &&
        ((error && <span className="formFieldErr">{error}</span>) ||
          (warning && <span className="formFieldWarn">{warning}</span>))}
    </div>
    <style jsx>{`
      .formField {
        border: none !important;
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
      .formField:focus::placeholder {
        transition: all 0.1s ease-in;
        color: transparent;
      }
      .formField::placeholder {
        color: #5d7baf;
      }
      .formFieldErr {
        display: block;
        color: #0b8457;
        font-weight: 700;
      }
      .formFieldWarn {
        display: block;
        color: #0b8457;
        font-weight: 700;
      }
    `}</style>
  </div>
);

const closeModal = modalActions => {
  console.log(modalActions);
  // if (e.keyCode === 27) {
  //   console.log(modalActions);
  // }
};

let SignInModal = props => {
  const { handleSubmit, modal, modalActions } = props;
  return (
    <div className="modal signIn">
      <form onSubmit={handleSubmit}>
        <div className="modal-content">
          <span
            className="close"
            onClick={() => {
              modalActions.closeSignInModal();
            }}
          >
            &times;
          </span>
          <h2>프로젝트 프로필 로그인</h2>
          <p>로그인을 하시면 프로필을 볼 수 있습니다</p>
          <div className="formInput">
            <Field
              name="email"
              component={renderField}
              type="email"
              label="Email"
              modalActions={modalActions}
            />
            {/* <input type="email" placeholder="Email" /> */}
          </div>
          <div className="formInput">
            <Field
              name="password"
              component={renderField}
              type="password"
              label="Password"
              modalActions={modalActions}
            />
          </div>
          <button>로그인</button>
        </div>
      </form>
      <style jsx global>{`
        .modal {
          position: fixed;
          z-index: 1;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          overflow: auto;
          background-color: rgb(0, 0, 0); /* Fallback color */
          background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
          text-align: center;
        }
        .signIn {
          display: ${modal.signInModalOpen ? 'block' : 'none'};
        }
        .modal h2 {
          font-size: 2.5rem;
          margin: 2rem 0;
          color: #10316b;
        }
        .modal p {
          font-size: 1.2rem;
          color: #10316b;
          line-height: 1.8;
        }
        .modal input {
          border: none;
          outline: none;
          width: 70%;
          height: 3rem;
          background-color: #dee1ec;
          margin: 1rem;
          padding: 0 2rem;
          border-radius: 8px;
          font-size: 1.3rem;
          font-weight: 700;
          color: #10316b;
        }
        .modal input:focus::placeholder {
          transition: all 0.1s ease-in;
          color: transparent;
        }
        .modal input::placeholder {
          color: #5d7baf;
        }
        .modal button {
          border: 1px solid white;
          border-radius: 50px;
          margin: 1rem;
          padding: 1rem 4rem;
          background: #10316b;
          outline: none;
          cursor: pointer;

          color: white;
          font-size: 1.3rem;
        }
        /* Modal Content/Box */
        .modal-content {
          background-color: #fefefe;
          margin: 15% auto; /* 15% from the top and centered */
          padding: 20px;
          border: 1px solid #888;
          width: 30%; /* Could be more or less, depending on screen size */
        }
        .close {
          color: #aaa;
          float: right;
          font-size: 28px;
          font-weight: bold;
        }
        .close:hover,
        .close:focus {
          color: black;
          text-decoration: none;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

SignInModal = reduxForm({
  form: 'signIn',
  validate
})(SignInModal);

export default SignInModal;
