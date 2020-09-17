import React from "react";
import styled from "styled-components";
import { StudentListContext } from "../../Context/Context";

const NavbarWrapper = styled.div`
  position: relative;
  border: 1px solid black;
  box-shadow: 8px 8px 16px #d9d9d9;
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const SchoolLogo = styled.img`
  height: 50px;
  margin: 6px 10px;
`;

const ButtonWrappers = styled.div`
  margin-left: auto;
  margin-right: 20px;
`;

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  changeToDashboardView = () => {
    let { insideTheDashboardChange } = this.context;
    insideTheDashboardChange(true);
  };
  checkIfPresentInDashboard = () => {
    if (window.location.href == "http://localhost:3000/dashboard") {
      return "d-none";
    } else {
      return "";
    }
  };

  render() {
    return (
      <NavbarWrapper className={this.checkIfPresentInDashboard()}>
        <SchoolLogo
          src="./Blue with Gold Laurel Education Logo.png"
          alt="school logo"
        ></SchoolLogo>
        <ul
          style={{
            listStyleType: "none",
          }}
        >
          <li
            style={{
              marginTop: "15px",
              cursor: "pointer",
            }}
          >
            <a>HOME</a>
          </li>
        </ul>
        <ul
          style={{
            listStyleType: "none",
          }}
        >
          <li
            style={{
              marginTop: "15px",
              cursor: "pointer",
            }}
          >
            <a>ABOUT</a>
          </li>
        </ul>
        <ul
          style={{
            listStyleType: "none",
          }}
        >
          <li
            style={{
              marginTop: "15px",
              cursor: "pointer",
            }}
          >
            <a>CONTACT</a>
          </li>
        </ul>
        <ButtonWrappers>
          <button
            style={{
              border: "1px solid green",
              borderRadius: "5px",
              padding: "4px 6px",
              marginRight: "8px",
              color: "green",
              background: "white",
            }}
            onClick={() =>
              (window.location.href = "https://forms.gle/CzcJ1DLvmoKm4aVp7")
            }
          >
            REGISTER
          </button>
          <StudentListContext.Consumer>
            {({ changeCurrentPage }) => {
              return (
                <button
                  style={{
                    border: "green",
                    borderRadius: "5px",
                    padding: "5px 8px",
                    background: "#0cf24d",
                  }}
                  onClick={() => changeCurrentPage("LoginPage")}
                >
                  <a style={{ textDecoration: "none", color: "black" }}>
                    LOGIN
                  </a>
                </button>
              );
            }}
          </StudentListContext.Consumer>
        </ButtonWrappers>
      </NavbarWrapper>
    );
  }
}

Navbar.contextType = StudentListContext;

export default Navbar;
