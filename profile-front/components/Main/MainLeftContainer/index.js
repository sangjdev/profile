import React from 'react';

const index = ({ modalActions }) => {
  return (
    <div className="containerLeft">
      <div className="left">
        <h1>안녕하세요!</h1>
        <p>포트폴리오 프로젝트 프로필의 소개입니다. 프로젝트 프로필</p>
        <button
          onClick={() => {
            modalActions.openSignInModal();
          }}
        >
          프로필 보러 가기
        </button>
      </div>

      <style jsx>{`
        .containerLeft {
          width: 40%;
          background-color: #10316b;
          display: flex;
          justify-content: center;
          align-items: center;
          //   animation-name: speed;
          //   animation-duration: 0.5s;
          //   animation-timing-function: ease-in;
        }
        .containerLeft .left {
          width: 75%;
          text-align: center;
        }
        .containerLeft h1 {
          font-size: 3rem;
          margin: 2rem 0;
          color: white;
        }
        .containerLeft p {
          font-size: 1.5rem;
          color: white;
          line-height: 1.8;
          margin: 5rem 0;
        }
        .containerLeft button {
          border: 1px solid white;
          border-radius: 50px;
          padding: 1rem 4rem;
          background: transparent;
          outline: none;
          cursor: pointer;

          color: white;
          font-size: 1.5rem;
        }
        // @keyframes speed {
        //   0% {
        //     transform: translate(200px);
        //   }
        //   to {
        //     transform: translate(0);
        //   }
        // }
      `}</style>
    </div>
  );
};

export default index;
