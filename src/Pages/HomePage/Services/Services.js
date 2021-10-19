import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import useService from "../../../Hooks/useService";
import Service from "./Service";

const Services = () => {
  const services = useService();
  return (
    <div className="bg-light pt-5 mb-3" id="services">
      <Container>
        <h3 className="display-5 fw-bold text-center mb-5">
          Our<span className="brand-color">Services</span>
        </h3>
        <Row xs={1} md={3} lg={4} className="g-4">
          {services.map((service) => (
            <Service key={service.id} service={service}></Service>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Services;
