import React from "react";
import { Col } from "react-bootstrap";
import Rating from "react-rating";
import "./Doctors.css";
const Doctor = (props) => {
  const { name, img, specialist, rating } = props.doctor;
  return (
    <Col md="6">
      <div className="card mb-3 ">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={img} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h4 className="card-title text-primary">{specialist}</h4>
              <h6 className="card-title">{name}</h6>
              <p className="card-text ">
                Ratings:
                <Rating
                  emptySymbol="fa fa-star-o fa"
                  fullSymbol="fa fa-star fa"
                  initialRating={rating}
                  fractions={10}
                  readonly
                  className="star-color"
                />
              </p>
            </div>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default Doctor;
