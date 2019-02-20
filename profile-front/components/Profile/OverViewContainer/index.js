import React from 'react';
import TopBar from '../../TopBar';

const index = () => {
  return (
    <div className="overViewContainer">
      <TopBar text="OverView" />
      <style jsx>{`
        .overViewContainer {
          padding-left: 5rem;
        }
      `}</style>
    </div>
  );
};

export default index;
