import React from 'react';
import FormContainer from '../../FormContainer';
const index = () => {
  return (
    <div className="containerRight">
      <FormContainer />
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
