import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import profile from "../../images/profile.jpg";
import CustomLink from "../CustomLink/CustomLink";

const NavigationBar = () => {
  return (
    <Navbar
      bg="light"
      variant="light"
      expand="lg"
      sticky="top"
      className="shadow-sm"
    >
      <Container>
        <Navbar.Brand>
          <img
            className="rounded-circle shadow-lg"
            height={50}
            src={profile}
            alt="MD. Mozammel Hoq"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto fw-bold text-center">
            <CustomLink to="/">Home</CustomLink>
            <CustomLink to="/portfolio">Portfolio</CustomLink>
            <CustomLink to="/blogs">Blogs</CustomLink>
            <CustomLink to="/Contact">Contact Me</CustomLink>

            <CustomLink to="/about">About Me</CustomLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
