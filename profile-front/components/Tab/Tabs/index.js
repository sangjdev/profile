import React, { Component } from 'react';
import Tab from '../Tab';
import Link from 'next/link';

class Tabs extends Component {
  state = {
    activeTab: ''
  };
  onClickTabItem = tab => {
    this.setState({ activeTab: tab });
  };
  componentDidMount() {
    const firstChild = this.props.children[0];
    this.setState({ activeTab: firstChild.props.label });
  }
  render() {
    const {
      onClickTabItem,
      props: { children },
      state: { activeTab }
    } = this;
    return (
      <div className="tabs">
        <ol className="tab-list">
          <div className="tab-title">
            <Link href="/">
              <a>Profile</a>
            </Link>
          </div>
          {children.map(child => {
            const { label } = child.props;

            return (
              <Tab
                activeTab={activeTab}
                key={label}
                label={label}
                onClick={onClickTabItem}
              />
            );
          })}
        </ol>
        <div className="tab-content">
          {children.map(child => {
            if (child.props.label !== activeTab) return undefined;
            return child.props.children;
          })}
        </div>
        <style jsx>{`
          .tabs {
            display: flex;
            min-height: 100vh;
          }
          .tab-title {
            margin: 2rem 0;
            font-size: 2.5rem;
            letter-spacing: 3px;
          }
          .tab-title a {
            color: white;
            text-decoration: none;
          }
          .tab-list {
            width: 15%;
            margin: 0;
            padding: 0;
            background-color: #10316b;
            font-size: 1.3rem;
            color: white;
            text-align: center;
            list-style: none;
          }
          .tab-content {
            width: 100%;
            background-color: #dee1ec;
          }
        `}</style>
      </div>
    );
  }
}

export default Tabs;
