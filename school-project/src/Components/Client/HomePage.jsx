import React, { Component } from "react";
import { StudentListContext } from "../../Context/Context";
import Carousel from "react-bootstrap/Carousel";
import styled from "styled-components";
import Axios from "axios";

const CarouselWrapper = styled.div`
  position: relative;
  img {
    border-radius: 15px;
    height: 70vh;
    margin: 20px auto;
  }
`;

const BrochureButton = styled.button`
  border: 1px solid blue;
  background: #44c7f5;
  border-radius: 4px;
  padding: 6px 10px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
`;

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getBrochureLink = () => {
    let { accessToken } = this.context;
    Axios({
      method: "post",
      headers: {
        AccessToken: `${accessToken}`,
        "Content-Type": "application/json",
      },
      url: "https://api.revvsales.com/api/perma-link",
      data: {
        object_id: `DOC-lrjPl8fGTbma`,
        object_type: `DOC`,
        redirect: "follow",
      },
    })
      .then((response) => {
        window.location.href = response.data.url;
      })
      .catch((error) => console.log(error));
  };
  render() {
    return (
      <div
        style={{
          height: "92vh",
          background: "#ebfeff",
        }}
      >
        <CarouselWrapper>
          <Carousel interval={4000}>
            <Carousel.Item>
              <img
                className="d-block w-75"
                src="/Carousel Pic 1.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-75"
                src="/Carousel Pic 2.jpg"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-75"
                src="/Carousel Pic 3.jpg"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </CarouselWrapper>

        <BrochureButton onClick={() => this.getBrochureLink()}>
          VIEW BROCHURE
        </BrochureButton>
      </div>
    );
  }
}

HomePage.contextType = StudentListContext;
export default HomePage;
