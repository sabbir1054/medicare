import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link,useHistory } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Register = () => {
  const history = useHistory();
  const { loginWithGoogle, registerNewUser } = useAuth();
const redirect_uri =  "/home";

const handleLogin = () => {
  loginWithGoogle().then((result) => {
    history.push(redirect_uri);
  });
};
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    registerNewUser(data.name, data.email, data.password);
  };

  return (
    <div className="my-5">
      <Container>
        <Row className="d-md-flex login align-items-center  shadow border ">
          <Col md={5} className="  ">
            <div className="text-center d-flex  justify-content-center py-5">
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
            </div>
          </Col>
          <Col md={7} className=" bg-light ">
            <div className="text-center py-4">
              <h3 className="display-5 logo pt-3 fw-normal brand-color text-center">
                Join With Us
              </h3>

              <div className="">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <input
                    placeholder="Enter Your name"
                    {...register("name", { required: true }, { maxlength: 15 })}
                    className="w-75 py-2"
                  />{" "}
                  <br />
                  {errors.name && (
                    <span className="text-danger">This field is required</span>
                  )}
                  <br /> <br />
                  <input
                    placeholder="Enter Your Email"
                    {...register("email", { required: true })}
                    className="w-75 py-2"
                  />{" "}
                  <br />
                  {errors.email && (
                    <span className="text-danger">This field is required</span>
                  )}
                  <br /> <br />
                  <input
                    type="password"
                    placeholder="Enter Your Password"
                    {...register(
                      "password",
                      { required: true },

                      { min: 8 }
                    )}
                    className="w-75 py-2"
                  />{" "}
                  <br />
                  {errors.password && (
                    <span className="text-danger">
                      Password should be at lest 8 digit
                    </span>
                  )}
                  <br /> <br />
                  <input
                    readOnly
                    type="Submit"
                    value="Submit"
                    className="w-50 py-2 btn fill-btn "
                  />
                  <br />
                  <p> - OR - </p>
                </form>
                <button className="mb-1 btn button" onClick={handleLogin}>
                  <img
                    src="https://i.ibb.co/HPd5k52/pngwing-com.png"
                    alt=""
                    width="25"
                  />
                  Register With Google
                </button>
                <br />
                <Link to="/login">Already Member? login here</Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Register;
