import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


const TutorialInfo = ({ tutorial }) => {
    const { _id, title, image_url, details } = tutorial;
    return (
        <Card>
            <Card.Img variant="top" src={image_url} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {
                        details.length > 200 ? <>{details.slice(0, 250) + '...'} <Link to={`/courses/${_id}`}>Read More</Link></> : details
                    }
                </Card.Text>
                <Link to={`/courses/${_id}`}><Button variant="primary">Course Details</Button></Link>
            </Card.Body>
        </Card>
    );
};

export default TutorialInfo;