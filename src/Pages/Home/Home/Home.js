import React from 'react';
import Services from '../Services/Services';
import Slider from './Slider/Slider';

const Home = () => {
    return (
        <div className='dark:bg-gray-900 dark:text-gray-100'>
            <Slider></Slider>
            <Services></Services>
        </div>
    );
};

export default Home;