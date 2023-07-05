import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../Assets/img/ps-logo.svg";
import navIcon1 from "../Assets/img/nav-icon1.svg";
import navIcon2 from "../Assets/img/nav-icon2.svg";
import navIcon3 from "../Assets/img/nav-icon3.svg";

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col sm={4} className="d-flex justify-content-start">
            <img src={logo} alt="logo" />
          </Col>
          <Col sm={4} className="d-flex justify-content-center">
            <p>Copyright @ 2023, All right reserved</p>
          </Col>
          <Col sm={4}>
            <div className="social-icon d-flex justify-content-end">
              <a href="https://www.linkedin.com/in/premnathsasi" target="blank">
                <img src={navIcon1} alt="linkedIn" />
              </a>
              <a href="https://www.facebook.com/virat.prem.90/" target="blank">
                <img src={navIcon2} alt="facebook" />
              </a>
              <a href="https://www.instagram.com/premnath_sasi/" target="blank">
                <img src={navIcon3} alt="instagram" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
