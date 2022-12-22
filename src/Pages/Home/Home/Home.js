import React from 'react';
import Helmet from 'react-helmet';
import Services from '../Services/Services';
import Article from './Article';
import OurClient from './OurClient';
import Slider from './Slider/Slider';
import ViewAllButton from './ViewAllButton';

const Home = () => {
    return (
        <div className='dark:bg-gray-900 dark:text-gray-100'>
            <Helmet>
                <title>Home Page</title>
                <meta name="description" content="Home Page" />
            </Helmet>
            <div className='pt-10'>
                <h1 className='text-5xl font-bold text-center text-gray-700 dark:text-gray-200'>Welcome!</h1>
                <p className='text-xl my-10 mx-auto p-5 w-3/4 font-semibold text-center text-gray-700 dark:text-gray-200'>Get Your Writer Provide you all to get quality writing of poetry, article, research paper, song etc. We are commited for better servicing.</p>
            </div>
            <Slider></Slider>
            <Services></Services>
            <ViewAllButton></ViewAllButton>
            <Article></Article>
            <OurClient></OurClient>
        </div>
    );
};

export default Home;