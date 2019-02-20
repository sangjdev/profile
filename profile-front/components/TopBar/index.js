import React from 'react';

const index = props => {
  return (
    <div className="topBar">
      <h3>{props.text}</h3>
      <style jsx>{`
        .topBar {
          margin: 3rem 0;
          font-size: 2rem;
        }
        .topBar h3 {
          margin: 0;
        }
      `}</style>
    </div>
  );
};

export default index;
