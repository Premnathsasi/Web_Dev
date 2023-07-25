import React from "react";
import { Nav, Navbar, Container, Form } from "react-bootstrap";
import logo from "../../assets/img/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { MDBIcon } from "mdb-react-ui-kit";

const Navbars = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand className="col-4 d-flex align-items-center">
          <img src={logo} alt="logo" />
          <h1>ShopNest</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto ">
            <div className=" d-flex search">
              <input placeholder="Search for products" className="form-control" />
              <SearchIcon />
            </div>
            <div>
              <button className="login-btn">Login</button>
            </div>
          </Nav>
          <Nav>
            <Button
              variant="outlined"
              className="position-relative cart ps-4 pe-4 ms-0"
            >
              <ShoppingCartIcon />
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                5
              </span>
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbars;
