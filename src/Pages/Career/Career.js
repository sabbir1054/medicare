import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";

const Career = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <>
      <div className="my-5">
        <Container>
          <Row className="d-md-flex align-items-center  shadow border p-3">
            <Col
              md={7}
              className="text-center d-flex login justify-content-center py-5"
            >
              <div>
                <img
                  src="https://i.ibb.co/YpFdYL5/Group-of-healthcare-workers-wearing-protective-face-masks-while-standing-with-arms-crossed-and-looki.jpg"
                  className="img-fluid"
                  alt=""
                />
                <h3 className="display-5 fw-normal text-white logo">
                  Make Your Bright Career
                </h3>
              </div>
            </Col>
            <Col md={5} className=" bg-light text-center pb-3">
              <h3 className="display-5 logo pt-1 fw-normal brand-color text-center">
                Apply Here
              </h3>
              <div className="">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <input
                    placeholder="Enter Your name"
                    {...register(
                      "Required",
                      { required: true },
                      { maxlength: 15 }
                    )}
                    className="w-75 py-2"
                  />
                  <br /> <br />
                  <input
                    placeholder="Enter Your Email"
                    {...register("example")}
                    className="w-75 py-2"
                  />
                  <br /> <br />
                  <select {...register("gender")} className="w-75 py-2">
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                  <div className="w-75 mt-3 text-center ms-5">
                    <Form.Group controlId="formFile">
                      <Form.Label className="fw-normal text-muted">
                        Upload Your Recent CV
                      </Form.Label>
                      <Form.Control type="file" />
                    </Form.Group>
                  </div>
                  <br />
                  <input
                    placeholder="Enter Your Password"
                    {...register(
                      "Required",
                      { required: true },
                      { pattern: /^[A-Za-z]+$/i },
                      { min: 8 }
                    )}
                    className="w-75 py-2"
                  />
                  <br /> <br />
                  <input type="Submit" className="w-50 py-2 btn fill-btn " />
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Career;
