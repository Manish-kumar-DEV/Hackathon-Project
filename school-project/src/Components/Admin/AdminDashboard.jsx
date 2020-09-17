import React from "react";
import styled from "styled-components";
import { StudentListContext } from "../../Context/Context";
import { paymentCompletedData } from "../Client/Payment";

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

export default class AdminDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
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
                >
                  Send Invoice
                </button>{" "}
              </SideLink>
            </ul>
          </SideNavBarWrapper>
        </div>
      </div>
    );
  }
}

AdminDashboard.contextType = StudentListContext;
