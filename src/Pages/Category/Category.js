
import { useLoaderData } from 'react-router-dom';
import CourseDetails from '../Shared/CourseDetails/CourseDetails';

const Category = () => {
    const catCourses = useLoaderData();

    return (
        <div>
            <p>Categories: {catCourses.length}</p>
            <div>
                {
                    catCourses.map(course => <CourseDetails
                        key={course._id}
                        course={course}
                    ></CourseDetails>)
                }
            </div>
        </div>
    );
};

export default Category;