import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router';
import useService from '../../../Hooks/useService';
import './SingleService.css'
const SingleService = () => {
    const [service, setService] = useState([]);
    const { serviceId } = useParams();
    let url = `https://raw.githubusercontent.com/sabbir1054/mytext/master/serviceData${serviceId}.json`;
    useEffect(() => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => setService(data[0]));
    }, []);
   
      
    return (
      <>
        <div className="bg-light ">
          <h1 className="display-3 logo brand-color text-center pt-3">
            {service.name}
          </h1>
          <Container className="d-flex justify-content-center my-4">
            <img src={service.largeImg} className="img-fluid" alt="" />
          </Container>
          <Container className="d-flex justify-content-center text-justify">
            <p className=" text-dark w-75 description">{service.largeDescription}</p>
          </Container>
        </div>
      </>
    );
};

export default SingleService;