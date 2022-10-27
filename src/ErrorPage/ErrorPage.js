import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <Card className="text-center">
            <Card.Header>404 Page</Card.Header>
            <Card.Body>
                <Card.Title>Not Found</Card.Title>
                <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
                </Card.Text>
                <Button variant="primary"><Link to="/">Return Home</Link></Button>
            </Card.Body>
            <Card.Footer className="text-muted"><Link to="/tutorial">Watch Tutorial</Link></Card.Footer>
        </Card>
    );
};

export default ErrorPage;