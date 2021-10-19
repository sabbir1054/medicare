import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Login.css'
const Login = () => {
    return (
      <div className="my-5">
        <Container>
          <Row className="d-md-flex align-items-center login shadow border">
            <Col md={5} className="text-center d-flex justify-content-center ">
              <div>
                <img
                  src="https://i.ibb.co/Kzhp5CR/img-04-1.png"
                  className="img-fluid"
                  alt=""
                />
                <h3 className="display-5 fw-normal text-white logo">
                  MediCare
                </h3>
              </div>
            </Col>
            <Col md={7} className="bg-light text-center">
              <h3 className="display-5 logo pt-3 fw-normal brand-color text-center">
                Login Here
              </h3>

              <p>
                uiyhgfoisdy7 tfdsoygf uiyf d7isfhi fyghoidyufh uifhoiuyf80
                w7hsoihfu gosdhfunosduhfdsuyhfoishfu uy{" "}
              </p>
              <br />
              <p>
                uiyhgfoisdy7 tfdsoygf uiyf d7isfhi fyghoidyufh uifhoiuyf80
                w7hsoihfu gosdhfunosduhfdsuyhfoishfu uy{" "}
              </p>
              <br />
              <p>
                uiyhgfoisdy7 tfdsoygf uiyf d7isfhi fyghoidyufh uifhoiuyf80
                w7hsoihfu gosdhfunosduhfdsuyhfoishfu uy{" "}
              </p>
              <br />
              <p>
                uiyhgfoisdy7 tfdsoygf uiyf d7isfhi fyghoidyufh uifhoiuyf80
                w7hsoihfu gosdhfunosduhfdsuyhfoishfu uy{" "}
              </p>
              <br />
            </Col>
          </Row>
        </Container>
      </div>
    );
};

export default Login;