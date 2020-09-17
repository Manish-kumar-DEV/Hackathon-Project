import React from "react";
import "./App.css";
import axios from "axios";
import { paymentCompletedData } from "../Client/Payment";

function testingAutomation() {
  const automate = async () => {
    const response = await axios({
      method: "post",
      url: "http://localhost:3004/screenshot",
      data: {
        email: "manish1771999@gmail.com",
        password: "Maheshwar17!",
      },
    });
    console.log(response);
  };

  return (
    <div className="App">
      <button onClick={automate}>Automate</button>
    </div>
  );
}

export default testingAutomation;
