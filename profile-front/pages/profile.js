import React, { Component, Fragment } from "react";
import ProfileContainer from "../components/Profile/ProfileContainer";

class profile extends Component {
  render() {
    return (
      <Fragment>
        <ProfileContainer />
        <style jsx global>{`
          body {
            margin: 0;
          }
        `}</style>
      </Fragment>
    );
  }
}

export default profile;
