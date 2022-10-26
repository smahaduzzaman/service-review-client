import React from 'react';
import './CourseDetails.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image'
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from 'react-icons/fa';

const CourseDetails = ({ course }) => {
    const { _id, title, image_url, details, author, total_view, rating, } = course;
    return (
        <Card className="">
            <Card.Header className='d-flex justify-content-between align-items-center'>
                <div className='d-flex justify-content-between align-items-center'>
                    <Image
                        src={author?.img}
                        style={{ width: '50px', height: '50px', borderRadius: '50%' }}
                    />
                    <div className='mx-3'>
                        <h5>{author?.name}</h5>
                        <p>{author?.published_date}</p>

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
                <Button variant="primary">Go somewhere</Button>
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