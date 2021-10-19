import React from 'react';

const Mission = () => {
    return (
      <>
        <div>
          <h1 className="display-3 fw-bold text-center logo">
            Our <span className="brand-color">Vision</span> and{" "}
            <span className="brand-color">Mission</span> :
          </h1>
          <ul className="pb-3">
            <li>
              <p className="fs-4 fw-normal text-dark">
                MediCare prides ourselves in supreme patient values with the
                understanding that the patient should be and is a partner in
                every health decision.
              </p>
            </li>
            <li>
              <p className="fs-4 fw-normal text-dark">
                {" "}
                We create an environment that fosters stabilization of chronic
                conditions, recognition and resolution of acute problems and
                holistic health as a corner stone of a healthier you.
              </p>
            </li>
            <li>
              <p className="fs-4 fw-normal text-dark">
                Realizing that just merely understanding the human body is only
                half the battle. Connecting patients to providers through trust,
                understanding, and human dignity is what is needed to bridge the
                GAPS that plague our current system of care.
              </p>
            </li>
          </ul>
        </div>
      </>
    );
};

export default Mission;