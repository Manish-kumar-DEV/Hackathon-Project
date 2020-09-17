import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import styled from "styled-components";

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

        <BrochureButton>DOWNLOAD BROCHURE</BrochureButton>
      </div>
    );
  }
}

export default HomePage;
