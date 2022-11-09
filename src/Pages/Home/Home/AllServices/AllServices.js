import React from 'react';
import Helmet from 'react-helmet';
import { useLoaderData } from 'react-router-dom';
import SingleToAll from './SingleToAll';

const AllServices = () => {
    const allServices = useLoaderData();

    return (
        <div className='grid grid-cols-3 gap-5 m-10 p-10'>
            <Helmet>
                <title>All Services</title>
                <meta name="description" content="All Services" />
            </Helmet>
            {
                allServices.map(service => <SingleToAll
                    key={service._id}
                    service={service}
                ></SingleToAll>)
            }
        </div>
    );
};

export default AllServices;