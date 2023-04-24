import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";

import { DarkModeSwitch } from "react-toggle-dark-mode";

import "./Home.css";

export default function NavBar({ isDarkModeOn, toggleDarkMode }) {
  return (
    <div className="mainnavbar">
      <Link className="logo" to={"/"}>
        My Portfolio
      </Link>
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
              <Link className="navButtons" to={"/footer"}>
                Contact
              </Link>
            </Nav.Link>
            <DarkModeSwitch
              style={{ paddingTop: "20px" }}
              checked={isDarkModeOn}
              onChange={toggleDarkMode}
              size={45}
            />
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
