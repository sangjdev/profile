import React, { Component } from "react";
import SummaryContainer from "../SummaryContainer";
import OverViewContainer from "../OverViewContainer";

class index extends Component {
  render() {
    return (
      <div className="profileContainer">
        <SummaryContainer />
        <OverViewContainer />
        <style jsx>{`
          .profileContainer {
            width: 100%;
          }
        `}</style>
      </div>
    );
  }
}

export default index;
