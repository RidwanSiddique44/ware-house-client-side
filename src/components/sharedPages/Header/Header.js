import React from 'react';
import './Header.css';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import warehouse from '../../Images/Icons/warehouse.png';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import auth from '../../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <div className='nav-bar'>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <h4 className='fw-bolder align-middle'> <img src={warehouse} className='header-icon' /><span className='text-danger'> Stock</span>House</h4>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto  fw-bolder">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/blog">Blogs</Nav.Link>
                            <Nav.Link as={Link} to="/inventory">Manage-Items</Nav.Link>
                            <Nav.Link as={Link} to="/addproduct">Add-Product</Nav.Link>
                            <Nav.Link as={Link} to="/lkl">Found</Nav.Link>
                        </Nav>
                        <Nav>
                            {
                                user ? <Button variant="p-0"><Nav.Link className=' text-decoration-none fw-bolder' onClick={handleSignOut}>Sign Out</Nav.Link></Button> : <Button variant="p-0"><Nav.Link className='fw-bolder' as={Link} to="/signin">Sign In </Nav.Link></Button>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;