import React, { useEffect, useState } from 'react';
import SingleService from './SingleService';

const Services = () => {
    const [services, setServices] = useState([]);
    console.log(services);

    useEffect(() => {
        fetch(`http://localhost:5000/services`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    return (
        <div className='grid grid-cols-1 grid-cols-2 grid-cols-3 gap-5 my-10'>
            {
                services.map(service => <SingleService
                    key={service.id}
                    service={service}
                ></SingleService>)
            }
        </div>
    );
};

export default Services;