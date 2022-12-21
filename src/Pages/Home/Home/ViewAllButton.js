import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ViewAllButton = () => {

    return (
        <section className="py-6 dark:bg-gray-900 dark:text-gray-100">
            <div className="container mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 lg:space-y-0 lg:flex-row lg:justify-between">
                <h1 className="text-3xl font-semibold leading-tight text-center lg:text-left">If you want explore all services, then click</h1>
                <Link to="/allservices" className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900">View All</Link>
            </div>
        </section>
    );
};

export default ViewAllButton;