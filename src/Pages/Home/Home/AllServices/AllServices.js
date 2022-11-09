import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleToAll from './SingleToAll';

const AllServices = () => {
    const allServices = useLoaderData();

    return (
        <div className='grid grid-cols-3 gap-5 m-10 p-10'>
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