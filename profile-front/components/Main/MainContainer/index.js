import React from 'react';
import MainLeftContainer from '../MainLeftContainer';
import MainRightContainer from '../MainRightContainer';

const index = ({ children }) => {
  return (
    <div className="container">
      <MainLeftContainer />
      <MainRightContainer />
      <style jsx>{`
        .container {
          width: 100%;
          display: flex;
        }
      `}</style>
    </div>
  );
};

export default index;
