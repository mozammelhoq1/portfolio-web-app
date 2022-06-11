import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import profile from "../../images/profile.jpg";
import Typical from "react-typical";
import banner_bg from "../../images/banner/banner.png";

const Banner = () => {
  return (
    <Row
      xs={1}
      sm={1}
      md={2}
      lg={2}
      className=" mx-auto g-5 mb-5 py-5 shadow-none bg-light"
      style={{
        backgroundImage: `linear-gradient(rgba(220, 220, 220, 0.2),rgba(220, 220, 220, 0.5), rgba(220, 220, 220, 0.8)), url(${banner_bg})`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        padding: "0 !important",
      }}
    >
      <Col className="text-center">
        <span className="fw-bold fs-6">
          Hello, I'M 🙋‍♂️{" "}
          <span style={{ color: "#0D6EFD" }} className="fw-bold fs-3">
            <Typical loop={Infinity} steps={["MD Mozammel Hoq", 2000]} />
          </span>
        </span>
        <h2
          style={{ background: " rgba(220, 220, 220, 0.2)" }}
          className="shadow-sm rounded-pill py-1"
        >
          <Typical
            loop={Infinity}
            steps={[
              "Full Stack Dev  💻",
              3000,
              "Frontend Dev 🎯",
              3000,
              "MERN Stack Dev 😎",
              3000,
              "React Js Dev ⚛️",
              3000,
              "React Native Dev 📱",
              3000,
            ]}
          />
        </h2>
        <div className="my-5">
          <Button className="btn btn-outline-light fw-bold btn-sm  shadow-sm rounded-3 me-5">
            Hire Me
          </Button>
          <a href="mozammel_hoq_resume.pdf" download="mozammel_hoq_resume.pdf">
            <Button className="btn btn-outline-light fw-bold btn-sm  shadow-sm rounded-3">
              Get Resume
            </Button>
          </a>
        </div>
      </Col>
      <Col className="text-center">
        <img src={profile} className="img-fluid w-75 rounded-circle" alt="" />
      </Col>
    </Row>
  );
};

export default Banner;
