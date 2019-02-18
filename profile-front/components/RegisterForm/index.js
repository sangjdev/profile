import React from 'react';
import { Field, reduxForm } from 'redux-form';

const validate = values => {
  const errors = {};
  if (!values.name) {
    errors.name = '필수 입력값입니다';
  } else if (values.name.length < 7 && values.name.length > 15) {
    errors.name = 'Must be 15 characters or less';
  }
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

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div>
    <div>
      <input {...input} placeholder={label} className="formField" type={type} />
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

let RegisterForm = props => {
  const { handleSubmit, auth } = props;

  return (
    <div className="formContainer">
      <form onSubmit={handleSubmit}>
        <div className="formInputBox">
          <Field
            name="name"
            component={renderField}
            type="text"
            label="Name"
            className="formField"
          />
        </div>
        <div className="formInputBox">
          <Field name="email" component={renderField} type="email" label="Email" />
        </div>
        <div className="formInputBox">
          <Field
            name="password"
            className="css-applied"
            component={renderField}
            type="password"
            label="Password"
          />
        </div>
        <button type="submit">{auth.pending ? '회원가입 중...' : '회원가입'}</button>
      </form>
      <style jsx>{`
        .formContainer form {
          margin: 2rem 0;
        }
        .formInputBox {
          width: 100%;
        }
        form button {
          margin: 2rem 0;
          border: 1px solid white;
          border-radius: 50px;
          padding: 1rem 4rem;
          background: #10316b;
          outline: none;
          cursor: pointer;

          color: white;
          font-size: 1.5rem;

          transition: all 0.5s ease-in;
        }
      `}</style>
    </div>
  );
};

RegisterForm = reduxForm({
  form: 'register',
  validate
})(RegisterForm);

export default RegisterForm;
