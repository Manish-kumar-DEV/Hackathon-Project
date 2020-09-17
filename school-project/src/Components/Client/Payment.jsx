import React from "react";
import "./Payment.css";
import { AIRTABLE_API_KEY } from "../../APIKEY/apikey";
import Airtable from "airtable";
import axios from "axios";

export const paymentCompletedData = [];

export default class Payment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      email: "",
      class: "",
      money: "",
      guardian: "",
      cardname: "",
      cardnumber: "",
      expyear: "",
      expmonth: "",
      cvv: "",
    };
  }
  shouldComponentUpdate = (prevProps) => {
    return prevProps === this.props;
  };

  handleChange = (e) => {
    let { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    axios({
      method: "post",
      url: `https://api.airtable.com/v0/appxpB5McnFS1i6Us/Student Payment List?api_key=${AIRTABLE_API_KEY}`,
      data: JSON.stringify({
        fields: {
          "Student Name": `${this.state.firstname}`,
          "Student Email": `${this.state.email}`,
          "Student Class": `${this.state.class}`,
          "Money Paid": `${this.state.money}`,
          "Card Holder Name": `${this.state.cardname}`,
        },
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => paymentCompletedData.push(response.data.id));
  };

  render() {
    let {
      firstname,
      email,
      class: studentClass,
      money,
      guardian,
      cardname,
      cardnumber,
      expyear,
      expmonth,
      cvv,
    } = this.state;
    return (
      <>
        <div className="row">
          <div className="col-75">
            <div className="container">
              <form onSubmit={this.handleSubmit}>
                <div className="row">
                  <div className="col-50">
                    <h3>Student Details</h3>
                    <label htmlFor="fname">
                      <i className="fa fa-user"></i> Full Name
                    </label>
                    <input
                      type="text"
                      id="fname"
                      name="firstname"
                      value={firstname}
                      onChange={this.handleChange}
                      placeholder="John M. Doe"
                    />
                    <label htmlFor="email">
                      <i className="fa fa-envelope"></i> Email
                    </label>
                    <input
                      type="text"
                      id="email"
                      name="email"
                      value={email}
                      onChange={this.handleChange}
                      placeholder="john@example.com"
                    />
                    <label htmlFor="adr">
                      <i className="fa fa-institution"></i> Class
                    </label>
                    <input
                      type="text"
                      id="class"
                      name="class"
                      value={studentClass}
                      onChange={this.handleChange}
                      placeholder="9th Standard"
                    />

                    <div className="row">
                      <div className="col-50">
                        <label htmlFor="state">Money</label>
                        <input
                          type="text"
                          id="money"
                          name="money"
                          value={money}
                          onChange={this.handleChange}
                          placeholder="5,000/-"
                        />
                      </div>
                      <div className="col-50">
                        <label htmlFor="zip">Guardian</label>
                        <input
                          type="text"
                          id="gurd"
                          name="guardian"
                          value={guardian}
                          onChange={this.handleChange}
                          placeholder="Mother"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-50">
                    <h3>Payment</h3>
                    <label htmlFor="fname">Accepted Cards</label>
                    <div className="icon-container">
                      <i
                        className="fa fa-cc-visa"
                        style={{ color: "navy" }}
                      ></i>
                      <i
                        className="fa fa-cc-amex"
                        style={{ color: "blue" }}
                      ></i>
                      <i
                        className="fa fa-cc-mastercard"
                        style={{ color: "red" }}
                      ></i>
                      <i
                        className="fa fa-cc-discover"
                        style={{ color: "orange" }}
                      ></i>
                    </div>
                    <label htmlFor="cname">Name on Card</label>
                    <input
                      type="text"
                      id="cname"
                      name="cardname"
                      value={cardname}
                      onChange={this.handleChange}
                      placeholder="John More Doe"
                    />
                    <label htmlFor="ccnum">Credit card number</label>
                    <input
                      type="text"
                      id="ccnum"
                      name="cardnumber"
                      value={cardnumber}
                      onChange={this.handleChange}
                      placeholder="1111-2222-3333-4444"
                    />
                    <label htmlFor="expmonth">Exp Month</label>
                    <input
                      type="text"
                      id="expmonth"
                      name="expmonth"
                      value={expmonth}
                      onChange={this.handleChange}
                      placeholder="September"
                    />
                    <div className="row">
                      <div className="col-50">
                        <label htmlFor="expyear">Exp Year</label>
                        <input
                          type="text"
                          id="expyear"
                          value={expyear}
                          onChange={this.handleChange}
                          name="expyear"
                          placeholder="2018"
                        />
                      </div>
                      <div className="col-50">
                        <label htmlFor="cvv">CVV</label>
                        <input
                          type="text"
                          id="cvv"
                          value={cvv}
                          onChange={this.handleChange}
                          name="cvv"
                          placeholder="352"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <input
                  type="submit"
                  value="Continue to checkout"
                  className="btnpayment"
                />
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}
