import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const ErrorPage = () => {
    return (
        <Card className="text-center">
            <Card.Header>404 Page</Card.Header>
            <Card.Body>
                <Card.Title>Not Found</Card.Title>
                <Card.Text>
                    The requested URL /your-404-page-stinks was not found on this server.
                </Card.Text>
                <Link to="/"><Button variant="primary">Return Home</Button></Link>
            </Card.Body>
            <Card.Footer className="text-muted"><Link to="/tutorial">Watch Tutorial</Link></Card.Footer>
        </Card>
    );
};

export default ErrorPage;