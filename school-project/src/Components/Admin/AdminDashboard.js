import React from "react";
import styled from "styled-components";
import { StudentListContext } from "../../Context/Context";
import { AIRTABLE_API_KEY } from "../../APIKEY/apikey";
import axios from "axios";

const paymentCompletedData = [];
const alreadySentInvoice = [];

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
  studentPaymentDetails = async () => {
    await axios
      .get(
        "https://api.airtable.com/v0/appxpB5McnFS1i6Us/Student Payment List?",
        {
          headers: { Authorization: "Bearer " + AIRTABLE_API_KEY },
        }
      )
      .then((resp) => paymentCompletedData.push(resp.data.records))
      .then(() => console.log(paymentCompletedData[0].length))
      .catch((error) => console.log(error));

    for (let i = 0; i < paymentCompletedData[0].length; i++) {
      if (alreadySentInvoice.indexOf(paymentCompletedData[0][i].id) === -1) {
        alreadySentInvoice.push(paymentCompletedData[0][i].id);
        let date = new Date(paymentCompletedData[0][i].createdTime);
        date = date.toLocaleDateString();
        const response = await axios({
          method: "post",
          url: "http://localhost:5000/screenshot",
          data: {
            email: "manish1771999@gmail.com",
            password: "Maheshwar19!",
            date: date,
            cardHolderName:
              paymentCompletedData[0][i].fields["Card Holder Name"],
            studentName: paymentCompletedData[0][i].fields["Student Name"],
            studentClass: paymentCompletedData[0][i].fields["Student Class"],
            moneyPaid: paymentCompletedData[0][i].fields["Money Paid"],
            studentEmail: paymentCompletedData[0][i].fields["Student Email"],
          },
        });
      } else {
        continue;
      }
    }
  };

  render() {
    console.log(alreadySentInvoice);
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
                  onClick={() => this.studentPaymentDetails()}
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
