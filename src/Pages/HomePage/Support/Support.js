import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Support.css";
const Support = () => {
  return (
    <div className="support-section bg-light">
      <Container className="text-center">
        <Row className="d-flex justify-content-center align-items-center text-center">
          <Col md="5" className="text-md-end">
            <div>
              <img src="https://i.ibb.co/VJqFy9N/img-01.png" alt="" />
            </div>
            <div>
              <p className="">Emergency Call</p>
              <h4 className="fw-bold brand-color">1 234 5678 - 9</h4>
            </div>
          </Col>
          <Col md="2">
            <p className="fs-4"> -OR- </p>
          </Col>
          <Col md="5 text-md-start">
            <div>
              <img
                src="https://i.ibb.co/Ss0zKBX/Contact-v2logo-06.png"
                alt=""
              />
            </div>
            <div>
              <p className="">Email Support</p>
              <h4 className="fw-bold brand-color">medicare@gmail.com</h4>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Support;
