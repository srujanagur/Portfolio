import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";

import "./Home.css";

export default function NavBar() {
  return (
    <div className="mainnavbar">
      <h3 className="navButtons">My Portfolio</h3>
      <Navbar className="navbar" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img src="" alt=""></img>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>
              <Link className="navButtons" to={"/"}>
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="navButtons" to={"/projects"}>
                Projects
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="navButtons" to={"/education"}>
                Education
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="navButtons" to={"/skills"}>
                Skills
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="navButtons" to={"/contact"}>
                Contact
              </Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
