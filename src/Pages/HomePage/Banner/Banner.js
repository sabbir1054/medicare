import React from "react";
import { Carousel, Container } from "react-bootstrap";
import "./Banner.css";

const Banner = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item className="slide">
          <Container>
            <div className="row d-flex align-items-center">
              <div className="col-6">
                <h3 className="display-4 fw-bold">
                  Our Commitment to{" "}
                  <span className="brand-color"> Safe Care</span>{" "}
                </h3>
                <p className="fs-4">
                  We're here when you need us. For everyday care or
                  life-changing care, you can count on us to keep you and your
                  loved ones safe and healthy.
                </p>
                <button className="btn fill-btn py-3 px-4">
                  Booked Your Appointment
                </button>
              </div>
              <div className="col-6 text-end">
                <img
                  className="d-block img-fluid w-75 p-5"
                  src="https://i.ibb.co/qp637TG/img-01-2.png"
                  alt="First slide"
                />
              </div>
            </div>
          </Container>
        </Carousel.Item>
        <Carousel.Item className="slide">
          <Container>
            <div className="row d-flex align-items-center">
              <div className="col-6">
                <img
                  className="d-block  img-fluid w-75 p-5"
                  src="https://i.ibb.co/nPTJ2BL/img-03-2.png"
                  alt="Second slide"
                />
              </div>
              <div className="col-6">
                <h3 className="display-4 fw-bold ">
                  Our Commitment to
                  <span className="brand-color"> Safe Care</span>
                </h3>
                <p className="fs-4">
                  We're here when you need us. For everyday care or
                  life-changing care, you can count on us to keep you and your
                  loved ones safe and healthy.
                </p>
                <button className="btn fill-btn py-3 px-4">
                  Booked Your Appointment
                </button>
              </div>
            </div>
          </Container>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
