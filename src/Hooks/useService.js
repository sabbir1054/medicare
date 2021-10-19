import React, { useEffect, useState } from 'react';

const useService = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
      fetch(
        "https://raw.githubusercontent.com/sabbir1054/mytext/master/serviceData.json"
      )
        .then((res) => res.json())
        .then((data) => setServices(data));
    }, []);
    return services;
};

export default useService;