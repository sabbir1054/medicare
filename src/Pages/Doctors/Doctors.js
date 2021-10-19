import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Doctor from './Doctor';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        fetch(
          "https://raw.githubusercontent.com/sabbir1054/mytext/master/doctorsData.json"
        )
          .then((res) => res.json())
          .then((data) => setDoctors(data));
    },[])
    
    return (
      <div className='bg-light'>
        <h1 className="text-center logo fw-bold py-5">
          Our <span className='brand-color '>Top Rated</span> Doctors
        </h1>
        <Container>
          <Row className="mb-5">
            {doctors.map((doctor) => (
              <Doctor doctor={doctor} key={doctor.id}></Doctor>
            ))}
          </Row>
        </Container>
      </div>
    );
};

export default Doctors;