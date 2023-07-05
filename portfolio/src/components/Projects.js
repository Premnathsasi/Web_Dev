import React from "react";
import { Container, Row, Col, Nav,Tab } from "react-bootstrap";
import ecom from "../Assets/img/ecom.png";
import ProjectCards from "./ProjectCards";
import mail from "../Assets/img/mailbox.png";
import expTrack from "../Assets/img/expTracker.png";
import colorSharp2 from '../Assets/img/color-sharp2.png';
import chat from "../Assets/img/reactChat.png";

const project = [
  {
    title: "Expense Tracker",
    link:'https://expense-tracker111.netlify.app',
    imgUrl: expTrack,
  },
  {
    title: "React Chat App",
    imgUrl: chat,
    link:'https://react-chat123.netlify.app',
  },
  {
    title: "E-Commerce Website",
    imgUrl: ecom,
    link:'https://ecommerce-website198.netlify.app',
  },
  {
    title: "React Mail Box",
    imgUrl: mail,
    link:'https://react-mailbox.netlify.app',
  },
];

function Projects() {
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills">
              <Nav.Item>
                <Nav.Link eventKey="first">React Projects</Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content>
                <Tab.Pane eventKey="first">
                    <Row>
                        {project.map((prj, index) => {
                            return (
                                <ProjectCards key={index} {...prj} />
                            )
                        })}
                    </Row>
                </Tab.Pane>
            </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="bg"/>
    </section>
  );
}

export default Projects;
