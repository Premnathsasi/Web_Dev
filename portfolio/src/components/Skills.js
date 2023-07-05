import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import html5 from "../Assets/img/html5.svg";
import css3 from "../Assets/img/css3.svg";
import js from "../Assets/img/javascript.svg";
import reactJs from "../Assets/img/react.svg";
import redux1 from "../Assets/img/redux.svg";
import python from "../Assets/img/python.svg";
import colorSharp1 from "../Assets/img/color-sharp.png";

function Skills() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <img src={html5} alt="ima" />
                  <h5>HTML 5</h5>
                </div>
                <div className="item">
                  <img src={css3} alt="ima" />
                  <h5>CSS 3</h5>
                </div>
                <div className="item">
                  <img src={js} alt="ima" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img src={reactJs} alt="ima" />
                  <h5>React JS</h5>
                </div>
                <div className="item">
                  <img src={redux1} alt="ima" />
                  <h5>Redux</h5>
                </div>
                <div className="item">
                  <img src={python} alt="ima" />
                  <h5>Python</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp1} alt="bg"/>
      </section>
  );
}

export default Skills;
