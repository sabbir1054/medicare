import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

import "./Login.css";
const Login = () => {

  const { loginWithGoogle, loginWithEmailPassword } = useAuth();
  const {register,handleSubmit,formState: { errors }} = useForm();
  const onSubmit = (data) => {
    console.log(data);
    // loginWithEmailPassword(data.email, data.password);
  };

  return (
    <div className="my-5">
      <Container>
        <Row className="d-md-flex align-items-center  shadow border ">
          <Col
            md={5}
            className="text-center d-flex login justify-content-center py-5"
          >
            <div>
              <img
                src="https://i.ibb.co/Kzhp5CR/img-04-1.png"
                className="img-fluid"
                alt=""
              />
              <h3 className="display-5 fw-normal text-white logo">MediCare</h3>
            </div>
          </Col>
          <Col md={7} className=" bg-light text-center py-5">
            <h3 className="display-5 logo pt-3 fw-normal brand-color text-center">
              Login Here
            </h3>
            <div className="">
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  placeholder="Enter Your Email"
                  {...register("email")}
                  className="w-75 py-2"
                />
                <br /> <br />
                <input
                  placeholder="Enter Your Password"
                  {...register("password", { required: true })}
                  className="w-75 py-2"
                />
                <br /> <br />
                <input type="submit" className="w-50 py-2 btn fill-btn " />
                <br />
                <p> - OR - </p>
              </form>
              <button className="mb-1 btn button" onClick={loginWithGoogle}>
                {" "}
                <img
                  src="https://i.ibb.co/HPd5k52/pngwing-com.png"
                  alt=""
                  width="25"
                />{" "}
                Login With Google
              </button>
              <br />
              <Link to="/register">New Member? register here</Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
