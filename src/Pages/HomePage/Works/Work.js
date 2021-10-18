import React from "react";
import { Col } from "react-bootstrap";

const Work = (props) => {
  const { img, title, buttonText } = props.work;
  return (
    <>
      <Col md="4" className="text-center pb-4">
        <div>
          <img src={img} alt="" />
        </div>
        <div>
          <p className="fs-3 fw-normal">{title}</p>
          <button className="fill-btn px-5  pt-3">
            <p className="fw-bold fs-5 px-3">{buttonText}</p>
          </button>
        </div>
      </Col>
    </>
  );
};

export default Work;
