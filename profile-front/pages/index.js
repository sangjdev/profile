import React, { Component, Fragment } from 'react';
import MainContainer from '../components/Main/MainContainer';

class Index extends Component {
  render() {
    return (
      <Fragment>
        <MainContainer {...this.props} />
        <style jsx global>{`
          body {
            margin: 0;
          }
        `}</style>
      </Fragment>
    );
  }
}

export default Index;
