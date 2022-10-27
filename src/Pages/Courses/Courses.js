import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Info from '../Info/Info';


const Courses = () => {
    const courses = useLoaderData();
    return (
        <div>
            {
                courses.slice(0, 6).map(course => <Info
                    key={course._id}
                    course={course}
                ></Info>)
            }

        </div>
    );
};

export default Courses;