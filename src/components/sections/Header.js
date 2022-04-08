
import React from 'react';
import '../../style/Header.css';
import {  Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuth } from './../../contexts/AuthContext';
import Logo from '../../images/logo.png';

const Header = () => {
    
    const {currentUser,logout} = useAuth();

    return (
        <div className="container ">
            <Navbar  expand="lg">
                {/* <div > */}
                   
                   <Link to="/home" className="nav-link"> <Navbar.Brand ><img src={Logo} alt="logo" /></Navbar.Brand></Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                           
                            <Link to="/home" className="nav-link me-3 fw-bold">Home</Link>
                            <Link to="/explore" className="nav-link me-3 fw-bold">Plant explore</Link>
                            <Link to="#" className="nav-link me-3 fw-bold">Shop</Link>
                            
                            <Link to="#" className="nav-link me-3 fw-bold">Blogs</Link>
                            
                            
                            {currentUser ? (
                                <NavDropdown title={<span>{currentUser.displayName}</span>} id="basic-nav-dropdown">                                                                                             
                                <Link className="dropdown-item" to="/dashboard">Dashboard</Link>
                                <NavDropdown.Divider />
                                <NavDropdown.Item onClick={logout} >Logout</NavDropdown.Item>
                            </NavDropdown>
                            ):(
                               <button className="loginBtn me-3">
                                   <Link to="/login" className="nav-link text-white fw-bold">Sign In</Link>
                                </button> 
                            )}
                        </Nav>
                    </Navbar.Collapse>
                   
                {/* </div> */}
               
                
            </Navbar>
            <hr className="mt-2 hr-style"/>
        </div>
    );
};

export default Header;