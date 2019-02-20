import React, { Component } from 'react';
import SummaryContainer from '../SummaryContainer';
import OverViewContainer from '../OverViewContainer';
import Tabs from '../../Tab/Tabs';
class index extends Component {
  render() {
    return (
      <div className="profileContainer">
        <Tabs>
          <div label="프로필">
            <SummaryContainer />
          </div>
          <div label="요약">
            <OverViewContainer />
          </div>
        </Tabs>
      </div>
    );
  }
}

export default index;
