import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from './Service';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch(
          "https://raw.githubusercontent.com/sabbir1054/mytext/master/serviceData.json"
        )
          .then((res) => res.json())
          .then((data) => setServices(data));
    },[])
    return (
      <div className="bg-light pt-5 mb-3">
        <Container>
          <h3 className="display-5 fw-bold text-center mb-5">
            Our<span className="brand-color">Services</span>
          </h3>
          <Row xs={1} md={3} lg={4} className="g-4">
                    {
                        services.map(service=><Service key={service.id} service={service}></Service>)
            }
          </Row>
        </Container>
      </div>
    );
};

export default Services;