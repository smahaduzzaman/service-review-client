import React, { useRef } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ReactToPrint from 'react-to-print';
import { FaCloudDownloadAlt, FaRegBookmark } from 'react-icons/fa';

const Course = () => {
    const ref = useRef();
    const courseCards = useLoaderData()
    const { _id, title, image_url, details, author, total_view, rating, category_id } = courseCards;
    return (
        <Card ref={ref} className="mb-5 p-4">
            <Card.Img variant="top" src={image_url} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {details}
                </Card.Text>
                <div className='d-flex justify-content-between align-items-center'>
                    <div>
                        <h4>{author.name}</h4>
                        <p>{author.published_date}</p>
                    </div>
                    <div className='d-flex justify-content-between align-items-center'>
                        <FaRegBookmark className='text-warning fs-5 fw-bold'></FaRegBookmark>
                        <p className='mx-3'>{rating.number}</p>
                        <p>{total_view}</p>
                    </div>
                </div>
            </Card.Body>
            <div>
                <Link to='/checkout'>
                    <Button variant="primary">Get Premium Access</Button>
                </Link>
                <ReactToPrint trigger={() =>
                    <Button className='ms-3' variant="primary"><FaCloudDownloadAlt />  Download</Button>}
                    content={() => ref.current}
                ></ReactToPrint>
            </div>
        </Card>
    );
};

export default Course;