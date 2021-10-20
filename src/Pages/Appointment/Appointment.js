import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Appointment = () => {
  return (
    <div>
      <div className="my-5">
        <Container>
          <Row className="d-md-flex align-items-center  shadow border p-3">
            <Col
              md={5}
              className="text-center d-flex login justify-content-center py-1"
            >
              <div>
                <h3 className="display-5 fw-normal text-white logo">
                  Take Your Appointment
                </h3>
                <img
                  src="https://i.ibb.co/Sc0f7pG/img-01-1.png"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </Col>
            <Col md={7} className=" bg-light text-center pb-3">
              <h3 className="display-5 logo pt-1 fw-normal brand-color text-center">
                Fill Up Form
              </h3>
              <div className=" text-start">
                <Form>
                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>Name</Form.Label>
                      <Form.Control type="name" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="email" />
                    </Form.Group>
                  </Row>

                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                      <Form.Label>Age</Form.Label>
                      <Form.Control />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                      <Form.Label>Gander</Form.Label>
                      <Form.Select defaultValue="Choose...">
                        <option>Male</option>
                        <option>Female</option>
                        <option>other</option>
                      </Form.Select>
                    </Form.Group>
                  </Row>
                  <Row>
                    <Col md="6">
                      <label htmlFor="">Select Your Date: </label>
                      <br />
                      <input type="date" id="birthday" name=""></input>
                    </Col>
                    <Col md="6">
                      {" "}
                      <label htmlFor="">Select Your Time: </label>
                      <br />
                      <input type="time" name=""></input>
                      <br />
                    </Col>
                  </Row>
                  <br />
                  <Form.Control
                    as="textarea"
                    placeholder="Write your problem in details"
                    style={{ height: "150px" }}
                  />

                  <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check
                      type="checkbox"
                      label="Accept our privacy policy"
                    />
                  </Form.Group>
                </Form>
                <NavLink to="/">
                  <button className="btn fill-btn" >
                    Submit
                  </button>
                </NavLink>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Appointment;
