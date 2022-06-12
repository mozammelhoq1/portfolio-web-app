import React from "react";
import { Col, Container } from "react-bootstrap";
import Slider from "react-slick/lib/slider";
import img1 from "../../images/skill/html.png";
import img2 from "../../images/skill/css.webp";
import img3 from "../../images/skill/js.webp";
import img4 from "../../images/skill/react.png";
import img5 from "../../images/skill/node.png";
import img6 from "../../images/skill/mongo.webp";
import img7 from "../../images/skill/express.png";
import img8 from "../../images/skill/bootstrap.png";
import img9 from "../../images/skill/tailwind.png";
import img10 from "../../images/skill/material.png";
import img11 from "../../images/skill/vsCode.png";
import img12 from "../../images/skill/github.webp";

const Skill = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <Container className="mx-auto my-5">
      <h2 className="text-center">MY SKILLS</h2>
      <Slider {...settings}>
        <Col>
          <img src={img1} alt="" />
        </Col>
        <Col>
          <img src={img2} alt="" />
        </Col>
        <Col>
          <img src={img3} alt="" />
        </Col>
        <Col>
          <img src={img4} alt="" />
        </Col>
        <Col>
          <img src={img5} alt="" />
        </Col>
        <Col>
          <img src={img6} alt="" />
        </Col>
        <Col>
          <img src={img7} alt="" />
        </Col>
        <Col>
          <img src={img8} alt="" />
        </Col>
        <Col>
          <img src={img9} alt="" />
        </Col>
        <Col>
          <img src={img10} alt="" />
        </Col>
        <Col>
          <img src={img11} alt="" />
        </Col>
        <Col>
          <img src={img12} alt="" />
        </Col>
      </Slider>
    </Container>
  );
};

export default Skill;
