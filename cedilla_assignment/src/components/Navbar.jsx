import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import classes from "./Navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Navbars = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className={classes.container}>
      <Container className={classes.main}>
        <div>
          <h2 className={classes.title}>LOGO</h2>
        </div>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto ">
            <div>
              <NavDropdown title="Home" id="collapsible-nav-dropdown">
                <NavDropdown.Item>Action</NavDropdown.Item>
                <NavDropdown.Item>Another action</NavDropdown.Item>
                <NavDropdown.Item>Something</NavDropdown.Item>
              </NavDropdown>
            </div>
            <NavDropdown title="Pages" id="collapsible-nav-dropdown" />
            <NavDropdown title="Solutions" id="collapsible-nav-dropdown" />
            <NavDropdown title="Blog" id="collapsible-nav-dropdown" />
          </Nav>

          <Nav>
            <div className={classes.cart}>
              <FontAwesomeIcon icon={faCartShopping} size="xl" />
              <button className={classes.btn}>Get a Quote</button>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbars;
