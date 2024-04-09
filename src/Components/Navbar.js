import React, { useState } from 'react';
import '../CSS/Navbar.css';
import logo from '../Images/Logo.png';
import Hamburger from './Hamburger';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/">
                    <img src={logo} alt="Logo" className='logo' />
                </Link>
                <ul className="nav-menu">
                    <li className="nav-item"><Link to="/">Home</Link></li>
                    <li className="nav-item"><Link to="/about">About</Link></li>
                    <li className="nav-item"><a href="/">Services</a></li>
                    <li className="nav-item"><Link to="/contactUs">Contact</Link></li>
                </ul>
                <div className="show-hamburger">
                    <Hamburger isOpen={isOpen} toggleMenu={toggleMenu} />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
