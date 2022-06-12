import React from "react";
import { Container } from "react-bootstrap";
import coming from "../../images/coming-soon/coming-soon.png";

const About = () => {
  return (
    <Container>
      <img src={coming} className="w-100  h-100" alt="" />
    </Container>
  );
};

export default About;
