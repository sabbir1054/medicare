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
      <div>
        <h1>This is doctors page</h1>
        <Container>
          <Row className="">
            {doctors.map((doctor) => (
              <Doctor doctor={doctor} key={doctor.id}></Doctor>
            ))}
          </Row>
        </Container>
      </div>
    );
};

export default Doctors;