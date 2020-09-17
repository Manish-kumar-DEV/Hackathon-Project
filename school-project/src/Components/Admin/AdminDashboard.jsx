import React from "react";
import styled from "styled-components";
import { StudentListContext } from "../../Context/Context";
import { AIRTABLE_API_KEY } from "../../APIKEY/apikey";
import axios from "axios";

const paymentCompletedData = [];
console.log(paymentCompletedData);

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
`;

export default class AdminDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  studentPaymentDetails = () => {
    axios
      .get(
        "https://api.airtable.com/v0/appxpB5McnFS1i6Us/Student Payment List?",
        {
          headers: { Authorization: "Bearer " + AIRTABLE_API_KEY },
        }
      )
      .then((resp) => paymentCompletedData.push(resp.data.records))
      .catch((error) => console.log(error));
  };

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
                  onClick={this.studentPaymentDetails}
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
