import React from 'react';
import Services from '../Services/Services';
import Slider from './Slider/Slider';
import ViewAllButton from './ViewAllButton';

const Home = () => {
    return (
        <div className='dark:bg-gray-900 dark:text-gray-100'>
            <Slider></Slider>
            <Services></Services>
            <ViewAllButton></ViewAllButton>
        </div>
    );
};

export default Home;