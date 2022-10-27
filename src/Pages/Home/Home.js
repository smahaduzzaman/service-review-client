import React from 'react';
import './Home.css';
import { Container, Row, Col } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import CourseDetails from '../Shared/CourseDetails/CourseDetails';

const Home = () => {
    const allCourses = useLoaderData()
    return (
        <div>
            <Container>
                <Row>
                    <Col className='course-card'>
                        {
                            allCourses.slice(0, 10).map(course => <CourseDetails
                                course={course}
                                key={course._id}
                            ></CourseDetails>)
                        }
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Home;