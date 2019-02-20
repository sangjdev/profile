import React, { Component, Fragment } from 'react';

class Tab extends Component {
  onClick = () => {
    const { label, onClick } = this.props;
    onClick(label);
  };
  render() {
    const {
      onClick,
      props: { activeTab, label }
    } = this;
    let className = 'tab-list-item';

    if (activeTab === label) {
      className += ' tab-list-active';
    }

    return (
      <Fragment>
        <li className={className}>
          <span onClick={onClick}>{label}</span>
        </li>
        <style jsx>{`
          .tab-list-item {
            height: 3rem;
            margin: 1rem 0;
            text-align: center;
            line-height: 2.5;
            box-sizing: border-box;
          }
          .tab-list-item span {
            cursor: pointer;
          }
          .tab-list-item:hover {
            font-weight: bold;
          }
          .tab-list-active {
            border-right: 3px solid #dee1ec;
            font-weight: bold;
          }
        `}</style>
      </Fragment>
    );
  }
}

export default Tab;
