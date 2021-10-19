import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Work from "./Work";
import "./Works.css";
const Works = () => {
  const worksData = [
    {id:1,
      img: "https://i.ibb.co/DG35Yqr/img-01-3.png",
      title: "Provide Best Professional",
      buttonText: "Doctors",
      url:'/doctors'
    },
    {id:2,
      img: "https://i.ibb.co/h8MwYPJ/img-02-1.jpg",
      title: "Get Instant",
      buttonText: "Appointment",
      url:'/appointment'
    },
    {id:3,
      img: "https://i.ibb.co/mt6xwR7/img-06-1.png",
      title: "Join For Your",
      buttonText: "Career",
      url:'/career'
    },
  ];
  return (
    <div className="works">
      <Container>
        <p className="text-center">We made it simple</p>
        <h3 className="display-5 fw-bold text-center mb-5">
          How It <span className="brand-color">Works ?</span>
        </h3>
        <Row>
                  {
                      worksData.map(work=><Work work={work} key={work.id}></Work>)
          }
          
        </Row>
      </Container>
    </div>
  );
};

export default Works;
