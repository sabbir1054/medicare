import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Support from "../HomePage/Support/Support";
import GoogleMapReact from "google-map-react";
import Mission from "./Mission";
import Social from "./Social";

const About = () => {
     const defaultProps = {
       center: {
         lat: -37.840935,
         lng: 144.94645,
       },
       zoom: 11,
     };
  return (
    <div className="my-5">
      <Container>
        <Mission/>
        <Row className="d-md-flex align-items-center  shadow border ">
          <Col md={7} className=" bg-light text-center py-5">
            <h3 className="display-5 fw-normal logo">
              Medi<span className="brand-color">Care</span>{" "}
            </h3>
            <Support></Support>
            <p className="fw-bold text-muted">
              {" "}
              Address: 123 New Street Melbourne Australia
            </p>
            <Social></Social>
          </Col>
          <Col md={5} className="">
            <div style={{ height: "75vh", width: "100%" }}>
              <GoogleMapReact
                bootstrapURLKeys={{ key: "" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
              >
                
              </GoogleMapReact>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
