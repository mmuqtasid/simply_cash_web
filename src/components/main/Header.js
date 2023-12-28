import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import { NavLink } from 'react-router-dom'
import '../../App.css';

const Header = () => {
    return (
        <>
            <Navbar className='nav'>
                <Container>
                    <NavLink to="/" className="text-decoration-none text-light mx-2">smartCashier</NavLink>
                    <Nav className="me-auto">
                        <NavLink to="/" className="text-decoration-none text-light mx-2"></NavLink>
                        <NavLink to="/" className="text-decoration-none text-light"></NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Header