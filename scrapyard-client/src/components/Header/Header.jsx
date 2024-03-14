import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';

import './Header.css'

function Header() {

    const navigate = useNavigate();

    const signOutHandler = (e) => {
        e.preventDefault();
        localStorage.removeItem('authenticated');
        localStorage.removeItem('userId');
        navigate('/');
    }

    const gotoDash = () => {
        navigate('/dashboard');
    }

    return (
        <Navbar expand="lg" className="nav w-100 px-5">
            <Container fluid>
                <Navbar.Brand className='navBrand' onClick={gotoDash}>Dashboard</Navbar.Brand>
                <Nav className="d-flex">
                    <Nav.Link className='signout-btn' onClick={signOutHandler}>Sign Out</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default Header;