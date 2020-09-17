import React from "react";
import "./App.css";
import HomePage from "./Components/Client/HomePage";
import Login from "./Components/Client/Login";
import Navbar from "./Components/Client/Navbar";
import { StudentListContext } from "./Context/Context";
import Dashboard from "./Components/Client/Dashboard";
import AdminDashboard from "./Components/Admin/AdminDashboard";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        {/* <Dashboard /> */}
        <StudentListContext.Consumer>
          {({ currentPage }) => {
            if (currentPage == "Homepage") {
              return (
                <>
                  <Navbar />
                  <HomePage />
                </>
              );
            } else if (currentPage == "LoginPage") {
              return (
                <>
                  <Navbar />
                  <Login />
                </>
              );
            } else if (currentPage == "Dashboard") {
              return (
                <>
                  <Dashboard />
                </>
              );
            } else if (currentPage == "AdminDashboard") {
              return (
                <>
                  <AdminDashboard />
                </>
              );
            }
          }}
        </StudentListContext.Consumer>
      </>
    );
  }
}

export default App;
