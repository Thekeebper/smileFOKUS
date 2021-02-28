import React from "react";
import { Button, Container, Row, Col, Navbar, Nav } from "react-bootstrap";
import "./header.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Header(params) {
  return (
    <>
      <Navbar
        expand="lg"
        variant="dark"
        style={{ backgroundColor: "rgb(14, 14, 14)", color: "white" }}
        className="py-lg-0 pr-lg-0 "
      >
        <Navbar.Brand href="#home">
          <span style={{ color: "rgb(250, 153, 22)", fontWeight: 200 }}>
            SMILE<span style={{ color: "white", fontWeight: 400 }}>SME</span>
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="py-lg-0">
          <Row className="ml-auto ">
            <Col lg={3} xs={2} className="mt-lg-0">
              <i
                class="fas fa-user-circle"
                style={{
                  fontSize: 30,
                  color: "rgb(255, 226, 191)",
                }}
              ></i>
            </Col>
            <Col lg={9} xs={10}>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  fontSize: 10,
                }}
                className="mb-lg-2"
              >
                <li
                  style={{
                    color: "rgb(250, 153, 22)",
                    fontWeight: "500",
                  }}
                >
                  {" "}
                  MR.ADMIN
                </li>
                <li>Head Quarter</li>
              </ul>
            </Col>
          </Row>

          <Nav
            style={{
              color: "white",
              fontSize: "20px",
              fontWeight: "500",
              backgroundColor: "rgb(250, 153, 22)",
              width: "30%",
            }}
            className="mb-xs-2"
          >
            <Nav.Link href="#home" className="ml-auto pr-3">
              MENU <i class="fas fa-heart"></i>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
