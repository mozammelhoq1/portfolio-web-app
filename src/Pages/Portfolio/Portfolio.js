import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "./Portfolio.css";
import img from "../../images/profile.jpg";
import SingleItem from "./SingleItem";

const Portfolio = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("portfolio.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <Container className="my-5">
      <h1 className="text-center text-primary">My Few Works</h1>
      <Row xs={1} sm={2} md={2} lg={3} className="mx-auto g-3">
        {services.map((service) => (
          <SingleItem key={service.id} service={service}></SingleItem>
        ))}

        {/* <Col>
          <Card className=" h-100 bg-light border-0 p-4 rounded-3 shadow-sm">
            <div className="team-img  rounded-3">
              <Card.Img variant="top" src={img} />
              <Card.Body className="team-info">
                <Card.Title>Thomas Gilbert</Card.Title>
                <Card.Text>Logistics Manager</Card.Text>
              </Card.Body>
            </div>
            <a
              href="https://www.linkedin.com/in/md-mozammel-hoq/"
              src="_blank"
              className="text-center mt-3"
            >
              <Button className="btn btn-outline-light fw-bold btn-sm  shadow-sm rounded-pill">
                View Details <FontAwesomeIcon icon={faLink} />
              </Button>
            </a>
          </Card>
        </Col>
        <Col>
          <Card className=" h-100 bg-light border-0 p-4 rounded-3 shadow-sm">
            <div className="team-img  rounded-3">
              <Card.Img variant="top" src={img} />
              <Card.Body className="team-info">
                <Card.Title>Thomas Gilbert</Card.Title>
                <Card.Text>Logistics Manager</Card.Text>
              </Card.Body>
            </div>
            <a
              href="https://www.linkedin.com/in/md-mozammel-hoq/"
              src="_blank"
              className="text-center mt-3"
            >
              <Button className="btn btn-outline-light fw-bold btn-sm  shadow-sm rounded-pill">
                View Details <FontAwesomeIcon icon={faLink} />
              </Button>
            </a>
          </Card>
        </Col>
        <Col>
          <Card className=" h-100 bg-light border-0 p-4 rounded-3 shadow-sm">
            <div className="team-img  rounded-3">
              <Card.Img variant="top" src={img} />
              <Card.Body className="team-info">
                <Card.Title>Thomas Gilbert</Card.Title>
                <Card.Text>Logistics Manager</Card.Text>
              </Card.Body>
            </div>
            <a
              href="https://www.linkedin.com/in/md-mozammel-hoq/"
              src="_blank"
              className="text-center mt-3"
            >
              <Button className="btn btn-outline-light fw-bold btn-sm  shadow-sm rounded-pill">
                View Details <FontAwesomeIcon icon={faLink} />
              </Button>
            </a>
          </Card>
        </Col>
        <Col>
          <Card className=" h-100 bg-light border-0 p-4 rounded-3 shadow-sm">
            <div className="team-img  rounded-3">
              <Card.Img variant="top" src={img} />
              <Card.Body className="team-info">
                <Card.Title>Thomas Gilbert</Card.Title>
                <Card.Text>Logistics Manager</Card.Text>
              </Card.Body>
            </div>
            <a
              href="https://www.linkedin.com/in/md-mozammel-hoq/"
              src="_blank"
              className="text-center mt-3"
            >
              <Button className="btn btn-outline-light fw-bold btn-sm  shadow-sm rounded-pill">
                View Details <FontAwesomeIcon icon={faLink} />
              </Button>
            </a>
          </Card>
        </Col>
        <Col>
          <Card className=" h-100 bg-light border-0 p-4 rounded-3 shadow-sm">
            <div className="team-img  rounded-3">
              <Card.Img variant="top" src={img} />
              <Card.Body className="team-info">
                <Card.Title>Thomas Gilbert</Card.Title>
                <Card.Text>Logistics Manager</Card.Text>
              </Card.Body>
            </div>
            <a
              href="https://www.linkedin.com/in/md-mozammel-hoq/"
              src="_blank"
              className="text-center mt-3"
            >
              <Button className="btn btn-outline-light fw-bold btn-sm  shadow-sm rounded-pill">
                View Details <FontAwesomeIcon icon={faLink} />
              </Button>
            </a>
          </Card>
        </Col>
        <Col>
          <Card className=" h-100 bg-light border-0 p-4 rounded-3 shadow-sm">
            <div className="team-img  rounded-3">
              <Card.Img variant="top" src={img} />
              <Card.Body className="team-info">
                <Card.Title>Thomas Gilbert</Card.Title>
                <Card.Text>Logistics Manager</Card.Text>
              </Card.Body>
            </div>
            <a
              href="https://www.linkedin.com/in/md-mozammel-hoq/"
              src="_blank"
              className="text-center mt-3"
            >
              <Button className="btn btn-outline-light fw-bold btn-sm  shadow-sm rounded-pill">
                View Details <FontAwesomeIcon icon={faLink} />
              </Button>
            </a>
          </Card>
        </Col>
        <Col>
          <Card className=" h-100 bg-light border-0 p-4 rounded-3 shadow-sm">
            <div className="team-img  rounded-3">
              <Card.Img variant="top" src={img} />
              <Card.Body className="team-info">
                <Card.Title>Thomas Gilbert</Card.Title>
                <Card.Text>Logistics Manager</Card.Text>
              </Card.Body>
            </div>
            <a
              href="https://www.linkedin.com/in/md-mozammel-hoq/"
              src="_blank"
              className="text-center mt-3"
            >
              <Button className="btn btn-outline-light fw-bold btn-sm  shadow-sm rounded-pill">
                View Details <FontAwesomeIcon icon={faLink} />
              </Button>
            </a>
          </Card>
        </Col>
        <Col>
          <Card className=" h-100 bg-light border-0 p-4 rounded-3 shadow-sm">
            <div className="team-img  rounded-3">
              <Card.Img variant="top" src={img} />
              <Card.Body className="team-info">
                <Card.Title>Thomas Gilbert</Card.Title>
                <Card.Text>Logistics Manager</Card.Text>
              </Card.Body>
            </div>
            <a
              href="https://www.linkedin.com/in/md-mozammel-hoq/"
              src="_blank"
              className="text-center mt-3"
            >
              <Button className="btn btn-outline-light fw-bold btn-sm  shadow-sm rounded-pill">
                View Details <FontAwesomeIcon icon={faLink} />
              </Button>
            </a>
          </Card>
        </Col>
        <Col>
          <Card className=" h-100 bg-light border-0 p-4 rounded-3 shadow-sm">
            <div className="team-img  rounded-3">
              <Card.Img variant="top" src={img} />
              <Card.Body className="team-info ">
                <Card.Title>Thomas Gilbert</Card.Title>
                <Card.Text>Logistics Manager</Card.Text>
              </Card.Body>
            </div>
            <a
              href="https://www.linkedin.com/in/md-mozammel-hoq/"
              src="_blank"
              className="text-center mt-3"
            >
              <Button className="btn btn-outline-light fw-bold btn-sm  shadow-sm rounded-pill">
                View Details <FontAwesomeIcon icon={faLink} />
              </Button>
            </a>
          </Card>
        </Col> */}
      </Row>
    </Container>
  );
};

export default Portfolio;
