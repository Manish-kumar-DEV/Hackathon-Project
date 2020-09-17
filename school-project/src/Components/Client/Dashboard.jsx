import React from "react";
import styled from "styled-components";

const SideNavBarWrapper = styled.div`
  width: 260px;
  height: 100vh;
  border: 1px solid red;
`;

const TopNavbarWrapper = styled.div`
  width: 100%;
  height: 60px;
  border: 1px solid red;
`;

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <TopNavbarWrapper />
        <div>
          <SideNavBarWrapper />
        </div>
      </div>
    );
  }
}
