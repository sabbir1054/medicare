import React from "react";
import { Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Work = (props) => {
  const { img, title, buttonText, url } = props.work;
  return (
    <>
      <Col md="4" className="text-center pb-4">
        <div>
          <img src={img} alt="" />
        </div>
        <div>
          <p className="fs-3 fw-normal">{title}</p>

          <NavLink to={`${url}`} className=" text-decoration-none">
            <button className="fill-btn px-md-5  pt-md-3">
              <p className="fw-bold fs-5 px-3">{buttonText}</p>
            </button>
          </NavLink>
        </div>
      </Col>
    </>
  );
};

export default Work;
