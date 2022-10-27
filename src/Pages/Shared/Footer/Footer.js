import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <Card className="text-center" bg="dark" variant="dark">
            <Card.Header className='text-white'>See You Again</Card.Header>
            <Card.Body >
                <Card.Title className='text-white'>ProTech Edu</Card.Title>
                <Card.Text className='text-white'>
                    ProTech Edu is an Educational Site for ICT lovers.
                </Card.Text>
                <Link to="/tutorial"><Button variant="primary">Our Tutorial</Button></Link>
            </Card.Body>
            <Card.Footer className="text-muted">Copyright @ ProTech Edu | S M Ahaduzzaman</Card.Footer>
        </Card>
    );
};

export default Footer;