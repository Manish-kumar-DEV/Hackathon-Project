import React from "react";
import styled from "styled-components";
import Login from "./Login";
import HomePage from "./HomePage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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

function Navbar() {
  return (
    <Router>
      <NavbarWrapper>
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
            <Link to="/">HOME</Link>
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
          <button
            style={{
              border: "green",
              borderRadius: "5px",
              padding: "5px 8px",
              background: "#0cf24d",
            }}
          >
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/login"
            >
              LOGIN
            </Link>
          </button>
        </ButtonWrappers>
      </NavbarWrapper>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default Navbar;
