import React from "react";
import { Button, Card, Col } from "react-bootstrap";

import "./Portfolio.css";
import img from "../../images/profile.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
const SingleItem = ({ service }) => {
  const { id, name, img_1, description, details, category } = service;

  return (
    <Col>
      <Card className=" h-100 bg-light border-0 p-3 rounded-3 shadow-sm">
        <div className="item-img  rounded-3">
          <Card.Img variant="top" src={img_1} />
          <Card.Body className="item-info fw-bold ms-auto">
            <Card.Title className="text-center">{name}</Card.Title>
            <Card.Text className="fw-bold text-center">
              {/* {details.map((technology) => (
                <code
                  className="d-inline-block m-1 px-2 text-dark rounded-pill fw-bold shadow"
                  technology={technology}
                >
                  {technology}
                </code>
              ))} */}
            </Card.Text>
          </Card.Body>
        </div>
        <a
          href="https://www.linkedin.com/in/md-mozammel-hoq/"
          src="_blank"
          className="text-center mt-3 "
        >
          <Button className="btn btn-outline-light fw-bold btn-sm  shadow-sm rounded-pill ">
            View Details <FontAwesomeIcon icon={faLink} />
          </Button>
        </a>
      </Card>
    </Col>
  );
};

export default SingleItem;
