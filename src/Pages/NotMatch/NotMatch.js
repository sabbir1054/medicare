import React from 'react';
import { NavLink } from 'react-router-dom';
import './NotMatch.css'
const NotMatch = () => {
    return (
      <div className="notMatch text-center">
        <h1 className="display-1 error fw-bold   text-center">404</h1>
        <p className="text-center fw-bold  small">page not found </p>
        <NavLink to="/">
          <button className="btn button py-2">Back to Home Page</button>
        </NavLink>
      </div>
    );
};

export default NotMatch;