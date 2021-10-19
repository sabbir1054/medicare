import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './AppDownload.css'
const AppDownload = () => {
    return (
      <div className="app-download">
        <Container className="py-5 mt-3">
          <Row className='d-flex align-items-center'>
            <Col md="6">
              <img src="https://i.ibb.co/7RVGBd1/img-01-4.png" className='img-fluid' alt="" />
            </Col>
            <Col md="6">
              <h3 className="display-5 fw-bold ">
                Care On The GO
                <span className="brand-color"> Download Mobile App</span>
              </h3>
              <div className="d-md-flex mt-3">
                <img src="https://i.ibb.co/SX6xJJn/img-03.png" className='mx-3 my-2 rounded i' alt="" />
                <img src="https://i.ibb.co/BzSbgr5/img-02.png" className='mx-3 my-2 rounded ' alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
};

export default AppDownload;