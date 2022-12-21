import React, { useEffect, useState } from 'react';
import SingleService from './SingleService';

const Services = () => {
    // const services = useLoaderData();
    const [services, setServices] = useState([]);
    // console.log(services);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    return (
        <div className="dark:bg-gray-900 dark:text-gray-100 pt-10">
            <h2 className="text-5xl font-bold text-center text-gray-700 dark:text-gray-200">POPULAR SERVICES</h2>
            <p className="text-xl my-10 mx-auto w-3/4 font-semibold text-center text-gray-700 dark:text-gray-200">Get Your Writer Provide you all to get quality writing of poetry, article, research paper, song etc. We are commited for better servicing.</p>
            <div className='container grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5 mb-10'>
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