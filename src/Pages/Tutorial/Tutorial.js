import React from 'react';
import { useLoaderData } from 'react-router-dom';
import TutorialInfo from '../TutorialInfo/TutorialInfo';

const Tutorial = () => {
    const tutorials = useLoaderData();

    return (
        <div>
            {
                tutorials.slice(0, 6).map(tutorial => <TutorialInfo
                    key={tutorial._id}
                    tutorial={tutorial}
                ></TutorialInfo>)
            }
        </div>
    );
};

export default Tutorial;