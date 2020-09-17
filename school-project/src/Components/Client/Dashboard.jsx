import React from "react";
import styled from "styled-components";
import { StudentListContext } from "../../Context/Context";
import WelcomeUserDashboard from "../Client/WelcomeUserDashboard";
import Payment from "./Payment";

const SideNavBarWrapper = styled.div`
  width: 260px;
  height: 92vh;
  background-image: linear-gradient(
    to bottom,
    rgba(89, 238, 218, 1) 0%,
    rgba(0, 212, 255, 1) 100%
  );

  ul:hover {
    background: linear-gradient(
      94deg,
      rgba(235, 238, 238, 1) 0%,
      rgba(89, 238, 218, 1) 100%
    );
  }
`;

const TopNavbarWrapper = styled.div`
  width: 100%;
  height: 60px;
  border: 1px solid red;
`;

const SideLink = styled.li`
  width: fit-content;
  display: flex;
  margin: 10px auto;
  border-radius: 4px;
`;

const SchoolLogo = styled.img`
  height: 50px;
  margin: 6px 10px;
`;

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPageInDashBoard: "welcome",
      currentUserEmail: "",
      currentUserDetails: [],
    };
  }

  render() {
    let { currentUserEmail, studentAdmissionList } = this.context;
    let userPic = studentAdmissionList[0].filter(
      (item) => item.fields["Email Address"] === currentUserEmail
    )[0].fields["Attachments"];
    let userName = studentAdmissionList[0].filter(
      (item) => item.fields["Email Address"] === currentUserEmail
    )[0].fields["Student Name"];
    return (
      <div>
        <TopNavbarWrapper>
          <SchoolLogo
            src="./Blue with Gold Laurel Education Logo.png"
            alt="school logo"
          ></SchoolLogo>
        </TopNavbarWrapper>
        <div style={{ display: "flex" }}>
          <SideNavBarWrapper>
            <ul
              style={{ listStyleType: "none", margin: "0px", padding: "0px" }}
            >
              <SideLink>
                <button
                  style={{
                    backgroundColor: "transparent",
                    border: "none",
                    padding: "5px 25px",
                    outline: "none",
                  }}
                  onClick={() =>
                    this.setState({ currentPageInDashBoard: "payment" })
                  }
                >
                  Fee Payment
                </button>{" "}
              </SideLink>
            </ul>
          </SideNavBarWrapper>
          {this.state.currentPageInDashBoard === "welcome" ? (
            <WelcomeUserDashboard data={[userName, userPic]} />
          ) : this.state.currentPageInDashBoard === "payment" ? (
            <div
              style={{
                margin: "auto",
              }}
            >
              <Payment />
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}

Dashboard.contextType = StudentListContext;
