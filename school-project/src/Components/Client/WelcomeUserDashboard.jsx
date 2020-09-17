import React from "react";
import styled from "styled-components";

const WelcomeUserDashboardWrapper = styled.div`
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
          <div
            style={{
              fontFamily: "Poppins",
              fontSize: "24px",
              padding: "7px 15px",
            }}
          >
            Hello, {this.state.username}
          </div>
          <div
            style={{
              color: "grey",
              fontFamily: "Poppins",
              fontSize: "16px",
              padding: "0px 15px",
            }}
          >
            {" "}
            This is your dashboard
          </div>
        </div>
      </WelcomeUserDashboardWrapper>
    );
  }
}
