import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "./Components/Client/HomePage";
import Navbar from "./Components/Client/Navbar";
import { StudentListContext } from "./Context/Context";

function App() {
  return (
    <StudentListContext.Consumer>
      {({ insideTheDashboard }) =>
        insideTheDashboard === false ? <Navbar /> : ""
      }
    </StudentListContext.Consumer>
  );
}

export default App;
