import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { EnvironmentOutlined } from "@ant-design/icons";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
  return (
    <>
      {/* <div className="head"/> */}

      <Navbar fixed="top" expand="lg" bg="black" variant="light">
        <Container fluid>
          <div className="cont">
            <img src="../logo-white1.png" alt="logo" height="55px" />{" "}
          </div>

          {/* <Navbar.Brand href="#">Navbar scroll</Navbar.Brand> */}
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mx-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <LinkContainer to="/reviews">
                <Nav.Link href="#reviews">Reviews</Nav.Link>
              </LinkContainer>

              <NavDropdown title="New Cars" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Used Cars" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>

              <Nav.Link href="#action1">News</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search for New Cars"
                className="me-2 border border-dark"
                aria-label="Search"
              />
              <Button className="lol me-5 border border-white" variant="dark">
                Search
              </Button>
              <Button
                className="lolz me-5 bg-transparent border-white"
                variant="dark"
              >
                <EnvironmentOutlined />
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
