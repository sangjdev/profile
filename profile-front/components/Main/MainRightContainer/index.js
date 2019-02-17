import React from 'react';
import FormContainer from '../../FormContainer';

const index = ({ modalActions, authActions, auth }) => {
  return (
    <div className="containerRight">
      <FormContainer
        modalActions={modalActions}
        authActions={authActions}
        auth={auth}
      />
      <style jsx>{`
        .containerRight {
          width: 60%;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </div>
  );
};

export default index;
