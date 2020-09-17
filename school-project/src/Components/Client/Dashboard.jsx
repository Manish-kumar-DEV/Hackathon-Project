import React from "react";
import styled from "styled-components";
import { StudentListContext } from "../../Context/Context";
import WelcomeUserDashboard from "../Client/WelcomeUserDashboard";
import Payment from "./Payment";

const SideNavBarWrapper = styled.div`
  width: 260px;
  height: 100vh;
  background-color: blue;
  border: 1px solid red;
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

  :hover {
    background-color: "lightblue";
  }
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
        <TopNavbarWrapper />
        <div style={{ display: "flex" }}>
          <SideNavBarWrapper>
            <ul
              style={{ listStyleType: "none", margin: "0px", padding: "0px" }}
            >
              <SideLink>
                <button
                  style={{
                    backgroundColor: "white",
                    border: "none",
                    padding: "5px 25px",
                    border: "1px solid red",
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
            <Payment />
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}

Dashboard.contextType = StudentListContext;
