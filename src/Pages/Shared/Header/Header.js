import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { FaUser } from 'react-icons/fa';
import { Image } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { toast } from 'react-toastify';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='mb-3'>
            <Container>
                <Navbar.Brand><Link style={{
                    fontSize: '30px',
                    color: 'white',
                    textDecoration: 'none',
                    fontWeight: 'semibold'
                }}
                    to="/">ProTech Edu</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto text-white">
                        <Link style={{ textDecoration: 'none', color: 'white' }} to="/">Home</Link>
                        <Link style={{ textDecoration: 'none', color: 'white' }} className='mx-3' to="/courses">Course</Link>
                        <Link style={{ textDecoration: 'none', color: 'white' }} to="/blog">Blog</Link>
                        <Link style={{ textDecoration: 'none', color: 'white' }} className='mx-3' to="/tutorial">Tutorial</Link>
                    </Nav>
                    <Button className='mx-3' variant='light'>Switch Dark</Button>
                    <Nav>
                        <Nav.Link to="/login">
                            {
                                user?.uid ?
                                    <>
                                        <span>{user?.displayName}</span>
                                        <Button style={{ textDecoration: 'none', color: 'white' }} className='mx-3' variant='light' onClick={handleLogOut}>Logout</Button>
                                    </>
                                    :
                                    <>
                                        <Link style={{ textDecoration: 'none', color: 'white' }} className='me-3' to="/login">Login</Link>
                                        <Link style={{ textDecoration: 'none', color: 'white' }} to="/register">Register</Link>
                                    </>
                            }
                        </Nav.Link>
                        <Nav.Link eventKey={2} to="/register">
                            {user?.photoURL ?
                                <Image
                                    style={{ height: '40px' }}
                                    roundedCircle src={user?.photoURL}
                                    onMouseOver={toast.success('Welcome ' + user?.displayName)}></Image>
                                : <FaUser></FaUser>
                            }
                        </Nav.Link>
                    </Nav>
                    <div className='d-lg-none' collapse="sm" >
                        <Sidebar></Sidebar>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;