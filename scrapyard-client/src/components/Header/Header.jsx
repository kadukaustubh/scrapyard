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
        navigate('/');
    }

    return (
        <Navbar expand="lg" className="nav w-100 px-5">
            <Container fluid>
                <Navbar.Brand href="/dashboard">Dashboard</Navbar.Brand>
                <Nav className="d-flex">
                    <Nav.Link onClick={signOutHandler}>Sign Out</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default Header;