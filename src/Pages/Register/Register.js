import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Register = () => {
    const [error, setError] = useState('');
    const { createUser } = useContext(AuthContext);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password, photoURL);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                form.reset();
            })
            .catch(error => {
                setError(error.message);
                console.error(error);
            })
    }
    return (
        <div>
            <h1>Register Here</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" name="name" placeholder="Enter Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>PhotoURL</Form.Label>
                    <Form.Control type="text" name="photoURL" placeholder="Enter PhotoURL" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Enter Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group> */}
                <Form.Text className="text-danger d-block mb-3">
                    {error}
                </Form.Text>
                <Button variant="primary" type="submit">
                    Register
                </Button>
                <div className='mt-3'>
                    <p>Already have an Account? Please <Link to='/login'><strong>Login</strong></Link></p>
                </div>
            </Form>
        </div>
    );
};

export default Register;