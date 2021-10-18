import React from "react";
import {
  Button,
  Col,
  Container,
  FormControl,
  InputGroup,
  Row,
} from "react-bootstrap";

const Footer = () => {
  return (
    <div className="bg-dark pt-5 text-white ">
      <Container>
        <Row>
          <Col md="4" className="text-start">
            <h3 className="display-5 fw-normal logo text-white">
              Medi<span className="brand-color">Care</span>{" "}
            </h3>
            <p> 123 New Street Melbourne Australia</p>
            <p>
              <i className="fas fa-paper-plane"></i> info@medicare.com
            </p>
            <p>
              <i className="fas fa-phone-alt"></i> 1234 567891-9
            </p>
            <p>Copyrights © 2021 by MediCare. All Rights Reserved.</p>
          </Col>
          <Col md="4">
            <ul className="list-unstyled">
              <li>
                <h3>Twitter Live Feed</h3>
              </li>
              <br />
              <li>03:40 AM - 10 Mon, 2021</li>
              <br />
              <li>03:35 AM - 10 Mon, 2021</li>
              <br />
              <li>04:06 AM - 10 Wed, 2021</li>
            </ul>
          </Col>
          <Col md="4">
            <h3>Newsletter</h3>
            <br />
            <p>
              A dipisicing elit sed dotem eiusmou tempor incididunt ut labore
              sed dotem.
            </p>
            <br />
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Enter your email"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <Button className="fill-btn btn" id="button-addon2">
                <i className="fas fa-paper-plane"></i>
              </Button>
            </InputGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
