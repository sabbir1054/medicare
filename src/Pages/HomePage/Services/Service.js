import React from "react";
import { Card, Col } from "react-bootstrap";
import "./Service.css";
const Service = (props) => {
  const { img, name, description } = props.service;
  return (
    <Col className="">
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body className="text-justify">
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <button className="button btn">Details</button>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default Service;
