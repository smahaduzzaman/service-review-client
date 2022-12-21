import React, { useEffect, useState } from 'react';
import Helmet from 'react-helmet';
import SingleToAll from './SingleToAll';

const AllServices = ({ allServices }) => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/services`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);


    return (
        <div className='grid grid-cols-3 gap-5 m-10 p-10'>
            <Helmet>
                <title>All Services</title>
                <meta name="description" content="All Services" />
            </Helmet>
            {
                services.map(service => <SingleToAll
                    key={service._id}
                    service={service}
                ></SingleToAll>)
            }
        </div>
    );
};

export default AllServices;