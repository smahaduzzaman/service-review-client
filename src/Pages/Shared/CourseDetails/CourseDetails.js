import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image'
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from 'react-icons/fa';

const CourseDetails = ({ course }) => {
    const { _id, title, image_url, details, author, total_view, rating, } = course;
    return (
        <Card className="mb-5">
            <Card.Header className='d-flex justify-content-between align-items-center'>
                <div className='d-flex justify-content-between align-items-center'>
                    <Image
                        src={author?.img}
                        style={{ width: '50px', height: '50px', borderRadius: '50%' }}
                    />
                    <div className='mx-3'>
                        <p className='mb-0'><strong>{author?.name}</strong></p>
                        <p><small>{author?.published_date}</small></p>

                    </div>
                </div>
                <div>
                    <FaRegBookmark></FaRegBookmark>
                    <FaShareAlt className='mx-3'></FaShareAlt>
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} />
                <Card.Text>
                    {
                        details.length > 200 ?
                            <>{details.slice(0, 250) + '...'} <Link to={`/courses/${_id}`}>Read More</Link></>
                            :
                            details
                    }
                </Card.Text>
                <Link to={`/courses/${_id}`}><Button variant="primary">Course Details</Button></Link>
            </Card.Body>
            <Card.Footer className="d-flex justify-content-between align-items-center">
                <div>
                    <FaStar className='text-warning me-3'></FaStar>
                    <span>{rating.number}</span>
                </div>
                <div>
                    <FaEye className='me-3'></FaEye>
                    <span>{total_view}</span>
                </div>
            </Card.Footer>
        </Card>
    );
};

export default CourseDetails;