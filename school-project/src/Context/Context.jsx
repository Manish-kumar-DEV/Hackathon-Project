import React, { createContext, Component } from "react";
import { AIRTABLE_API_KEY } from "../APIKEY/apikey";
import Axios from "axios";

export const StudentListContext = createContext();

export default class StudentListContextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accessToken: "",
      refreshToken: "",
      firstApiAuthCall: true,
      insideTheDashboard: false,
      countDownTimerForRevvSalesAuthCall: 3600,
      data: [],
    };
  }

  startDecreasingTimer = () => {
    let { countDownTimerForRevvSalesAuthCall } = this.state;
    this.intervalID = setInterval(() => {
      if (countDownTimerForRevvSalesAuthCall > 0) {
        this.setState({
          countDownTimerForRevvSalesAuthCall:
            this.state.countDownTimerForRevvSalesAuthCall - 1,
        });
      } else {
        clearInterval(this.intervalID);
        this.setState({
          countDownTimerForRevvSalesAuthCall: 3600,
        });
      }
    }, 1000);
  };

  componentWillUnmount = () => {
    clearInterval(this.intervalID);
  };

  authRevvSalesApi = () => {
    let { countDownTimerForRevvSalesAuthCall, firstApiAuthCall } = this.state;
    if (countDownTimerForRevvSalesAuthCall === 3600) {
      this.startDecreasingTimer();
    }
    if (
      countDownTimerForRevvSalesAuthCall === 3600 &&
      firstApiAuthCall === true
    ) {
      this.setState({
        firstApiAuthCall: false,
      });
      Axios({
        method: "post",
        url: "https://api.revvsales.com/api/v2/auth/initiate-auth",
        headers: {
          "Content-Type": "application/json",
          GrantType: "password",
        },
        data: JSON.stringify({
          user_email: "manish1771999@gmail.com",
          password: "Maheshwar19!",
          org_domain: "ftii2306",
        }),
      })
        .then((response) =>
          this.setState({
            accessToken: response.data.User.access_token,
            refreshToken: response.data.User.refresh_token,
          })
        )
        .catch((error) => console.log(error));
    } else {
      Axios({
        method: "post",
        url: "https://api.revvsales.com/api/v2/auth/initiate-auth",
        headers: {
          "Content-Type": "application/json",
          GrantType: "refreshToken",
          RefreshToken: `${this.state.refreshToken}`,
        },
      })
        .then((response) =>
          this.setState({
            accessToken: response.data.User.access_token,
            refreshToken: response.data.User.refresh_token,
          })
        )
        .catch((error) => console.log(error));
    }
  };

  componentDidMount() {
    fetch(
      `https://api.airtable.com/v0/appxpB5McnFS1i6Us/Admission List?api_key=${AIRTABLE_API_KEY}`
    )
      .then((res) => res.json())
      .then((res) => {
        this.setState({ data: [...this.state.data, res.records] });
      })
      .catch((error) => console.log(error));

    this.authRevvSalesApi();
  }

  insideTheDashboardChange = (value) => {
    //value can be true or false
    this.setState({
      insideTheDashboard: value,
    });
  };

  render() {
    let { data: studentAdmissionList, insideTheDashboard } = this.state;
    let { insideTheDashboardChange } = this;
    return (
      <StudentListContext.Provider
        value={{
          studentAdmissionList,
          insideTheDashboard,
          insideTheDashboardChange,
        }}
      >
        {this.props.children}
      </StudentListContext.Provider>
    );
  }
}
