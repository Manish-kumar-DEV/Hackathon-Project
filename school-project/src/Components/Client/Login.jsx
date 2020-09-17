import React, { Component } from "react";
import { StudentListContext } from "../../Context/Context";
import styled from "styled-components";
import "./Login.css";
import Dashboard from "./Dashboard";

const LoginWrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1140px;
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 600px;
  height: auto;
  display: flex;
  background: #ffffff;
  box-shadow: 0 0 5px #999999;
`;

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      isAuth: false,
    };
  }

  handleChange = (e) => {
    let { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let {
      studentAdmissionList,
      changeCurrentPage,
      updateCurrentUserEmail,
    } = this.context;
    let verification = studentAdmissionList[0].map((item) => {
      if (item.fields["Email Address"] === this.state.username) {
        updateCurrentUserEmail(item.fields["Email Address"]);
        return "true";
      }
    });
    if (verification.indexOf("true") !== -1) {
      changeCurrentPage("Dashboard");
      this.setState({
        isAuth: true,
      });
    }
  };

  render() {
    return (
      <LoginWrapper>
        <Container>
          <div className="col-left">
            <div className="login-text">
              <h2>Welcome Back</h2>
              <p>
                Create your account.
                <br />
                It's totally free.
              </p>
              <a
                className="btn"
                href="https://forms.gle/CzcJ1DLvmoKm4aVp7"
                target="__blank"
              >
                Sign Up
              </a>
            </div>
          </div>
          <div className="col-right">
            <div className="login-form">
              <h2>Login</h2>
              <form onSubmit={this.handleSubmit}>
                <p>
                  <label>
                    Username or email address<span>*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Username or Email"
                    name="username"
                    value={this.state.username}
                    onChange={this.handleChange}
                    required
                  />
                </p>
                <p>
                  <label>
                    Password<span>*</span>
                  </label>
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    required
                  />
                </p>
                <p>
                  <input type="submit" value="Verify" />
                </p>
                <p>
                  <a href="">Forget Password?</a>
                </p>
              </form>
            </div>
          </div>
        </Container>
      </LoginWrapper>
    );
  }
}

Login.contextType = StudentListContext;
