import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Checkout = () => {
    return (
        <div>
            <h1>Conform Your Order</h1>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Enter Your Name</Form.Label>
                    <Form.Control type="name" name='name' placeholder="Enter Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" name='address' placeholder="Enter You Address" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Your Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter Email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Phone No</Form.Label>
                    <Form.Control type="number" placeholder="Phone No" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Agree With Us For Terms and Condition" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Conform
                </Button>
            </Form>
        </div>
    );
};

export default Checkout;