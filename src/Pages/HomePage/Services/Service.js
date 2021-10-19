import React from "react";
import { Card, Col, NavLink } from "react-bootstrap";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import "./Service.css";
const Service = (props) => {
  
  const { img, name, description,id } = props.service;
  
  return (
    <Col className="">
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body className="text-justify">
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <Link to={`/service/${id}`}>
            <button className="button btn">Details</button>
          </Link>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default Service;
