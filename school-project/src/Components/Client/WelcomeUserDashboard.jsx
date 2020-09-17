import React from "react";
import styled from "styled-components";

const WelcomeUserDashboardWrapper = styled.div`
    border: 1px solid red;
    width: 700px,
    height: 800px,
`;

export default class WelcomeUserDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.data[0],
      userpic: this.props.data[1],
    };
  }

  render() {
    return (
      <WelcomeUserDashboardWrapper>
        <div>
          <div>Welcome, {this.state.username}</div>
        </div>
      </WelcomeUserDashboardWrapper>
    );
  }
}
