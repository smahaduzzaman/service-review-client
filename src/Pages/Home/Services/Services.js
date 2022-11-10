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
        <div className="dark:bg-gray-900 dark:text-gray-100 pt-10">
            <h2 className="text-5xl font-bold text-center text-gray-700 dark:text-gray-200">POPULAR SERVICES</h2>
            <p className="text-xl my-10 mx-auto w-3/4 font-semibold text-center text-gray-700 dark:text-gray-200">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio, non incidunt impedit aliquam repudiandae nemo eveniet eius, commodi cumque consequatur laborum nihil asperiores a saepe. Assumenda eos culpa quibusdam odit.</p>
            <div className='container grid grid-cols-1 grid-cols-2 grid-cols-3 gap-5 my-10'>
                {
                    services.map(service => <SingleService
                        key={service._id}
                        service={service}
                    ></SingleService>)
                }
            </div>
        </div>
    );
};

export default Services;