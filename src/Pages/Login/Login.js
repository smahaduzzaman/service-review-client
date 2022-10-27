import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { toast } from 'react-toastify';

const Login = () => {
    const [error, setError] = useState('');
    const { googleSignIn, signIn, githubSignIn } = useContext(AuthContext);
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/';



    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                navigate(from, { replace: true });
                toast.success(`Welcome ${user.displayName}`)
                console.log(user);
            })
            .catch(error => {
                setError(error.message);
                toast.error(error.message);
            })
    }

    const handleGithubSignIn = () => {
        githubSignIn()
            .then(result => {
                const user = result.user;
                navigate(from, { replace: true });
                toast.success(`Welcome ${user.displayName}`)
                console.log(user);
            })
            .catch(error => {
                setError(error.message)
                toast.error(error.message);
            })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                form.reset();
                navigate('/');
                toast.success(`Welcome ${user.displayName}`)
            })
            .catch(error => {
                toast.error(error.message)
            })
    }

    return (
        <div>
            <h1>Login Here</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group> */}
                <Form.Text className="text-danger d-block mb-3">
                    {error}
                </Form.Text>
                <Button variant="primary" type="submit">
                    Login
                </Button>{' '}
            </Form>
            <div className='mt-4'>
                <Button onClick={handleGoogleSignIn} variant="outline-primary"><FaGoogle></FaGoogle> Google Login</Button>{' '}
                <Button onClick={handleGithubSignIn} variant="outline-primary"><FaGithub></FaGithub> GitHub Login</Button>{' '}
            </div>
            <div className='mt-3'>
                <p>Don't have an account? Please <Link to="/register"><strong>Register</strong></Link></p>
            </div>
        </div>
    );
};

export default Login;