import React, { Component } from "react";
import styled from "styled-components";
import "./Login.css";

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
              <a className="btn" href="https://forms.gle/CzcJ1DLvmoKm4aVp7">
                Sign Up
              </a>
            </div>
          </div>
          <div className="col-right">
            <div className="login-form">
              <h2>Login</h2>
              <form>
                <p>
                  <label>
                    Username or email address<span>*</span>
                  </label>
                  <input type="text" placeholder="Username or Email" required />
                </p>
                <p>
                  <label>
                    Password<span>*</span>
                  </label>
                  <input type="password" placeholder="Password" required />
                </p>
                <p>
                  <input type="submit" value="Sign In" />
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
