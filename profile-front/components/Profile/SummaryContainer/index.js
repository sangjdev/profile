import React from 'react';
import TopBar from '../../TopBar';

const index = () => {
  return (
    <div className="summaryContainer">
      <TopBar text="프로필" />

      <div className="summaryForm">
        <div className="summaryInfo">
          <div className="summaryInput">
            <span className="summaryLabel">이름</span>김철수
          </div>
          <div className="summaryInput">
            <span className="summaryLabel">이메일</span>email@naver.com
          </div>
        </div>
      </div>
      <style jsx>{`
        .summaryContainer {
          padding-left: 5rem;
        }
        .summaryForm {
          margin: 3rem 0;
          display: flex;
        }
        .summaryInfo {
        }
        .summaryInput {
          margin-bottom: 1rem;
          font-size: 1.3rem;
          font-weight: bold;
        }
        .summaryLabel {
          display: inline-block;
          min-width: 3rem;
          margin-right: 1rem;
          color: gray;
          font-size: 1rem;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
};

export default index;
