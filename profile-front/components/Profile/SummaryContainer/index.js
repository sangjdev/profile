import React from "react";
import TopBar from "../../TopBar";
const index = () => {
  return (
    <div className="summaryContainer">
      <TopBar />

      <div className="summaryForm">
        <div className="summaryImage">
          <img src="" alt="" />
        </div>
        <div className="summaryInfo">
          <div className="summaryName">hello world</div>
          <div className="summaryEmail">email@naver.com</div>
        </div>
      </div>
      <style jsx>{`
        .summaryContainer {
          min-height: 40vh;
          padding: 1rem 1rem;
        }
        .summaryForm {
          display: flex;
        }
        .summaryImage {
          width: 150px;
          height: 200px;
          background-color: skyblue;
        }
        .summaryInfo {
          margin: 0 1rem;
        }
      `}</style>
    </div>
  );
};

export default index;
