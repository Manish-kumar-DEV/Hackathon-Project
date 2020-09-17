import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import StudentListContextProvider from "./Context/Context";

ReactDOM.render(
  <StudentListContextProvider>
    <App />
  </StudentListContextProvider>,
  document.getElementById("root")
);
