
import { useLoaderData } from 'react-router-dom';
import CourseDetails from '../Shared/CourseDetails/CourseDetails';
import Sidebar from '../Shared/Sidebar/Sidebar';

const Category = () => {
    const corCates = useLoaderData();

    return (
        <div>
            <p>Categories: {corCates?.length}</p>
            <div>
                {
                    corCates?.length && corCates.map(course => <CourseDetails
                        key={course._id}
                        course={course}
                    ></CourseDetails>)
                }
            </div>
        </div>
    );
};

export default Category;