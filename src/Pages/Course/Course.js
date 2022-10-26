import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Course = () => {
    const courseCards = useLoaderData()
    const { _id, title, image_url, details, author, total_view, rating, category_id } = courseCards;
    return (
        <Card>
            <Card.Img variant="top" src={image_url} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {details}
                </Card.Text>
                <Link to={`/category/${category_id}`}>
                    <Button variant="primary">See all For This Category</Button>
                </Link>
            </Card.Body>
        </Card>
    );
};

export default Course;