import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../Assets/img/header.svg";
import resume from "../Assets/resume.pdf";

function Home() {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my Portfolio</span>
            <h1>
              {`Hi I'm Premnath Sasi`}{" "}
              <span className="animate-charcter">Frontend Developer</span>
            </h1>
            <p>
              An ambitious Frontend Developer with a strong passion for web
              development, I am in pursuit of a responsible role within an
              innovative company. My mission is to continuously learn and
              improve my skills in building cutting-edge user interfaces that
              provide a seamless and visually stunning user experience
            </p>
            <a href={resume} download="premnath_resume">
              <button>Download CV</button>
            </a>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Header img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Home;
