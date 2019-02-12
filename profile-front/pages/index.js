import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as inputActions from '../reducers/members';
import MainContainer from '../components/Main/MainContainer';

class Index extends Component {
  render() {
    // const { value, InputActions } = this.props;
    // console.log(this.props);
    return (
      <Fragment>
        {/* <h1>프로필 회원가입</h1>
        <h2>Hello {value}!</h2>
        <button
          onClick={() => {
            InputActions.setInput();
            console.log('valueeee', value);
          }}
        >
          12424
        </button> */}
        <MainContainer />
        <style jsx global>{`
          body {
            margin: 0;
          }
        `}</style>
      </Fragment>
    );
  }
}

export default connect()(Index);
// state => {
//   console.log('satteat,e', state);
//   return {
//     value: state.members.value
//   };
// },
//   dispatch => ({
//     InputActions: bindActionCreators(inputActions, dispatch)
//   });
