import React, { useState } from 'react';
import '../CSS/Navbar.css';
import logo from '../Images/Logo.png';
import Hamburger from './Hamburger';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <img src={logo} alt="Logo" className='logo' />
                <ul className="nav-menu">
                    <li className="nav-item"><a href="/">Home</a></li>
                    <li className="nav-item"><a href="/">About</a></li>
                    <li className="nav-item"><a href="/">Services</a></li>
                    <li className="nav-item"><a href="/">Contact</a></li>
                </ul>
                <div className="show-hamburger">
                    <Hamburger isOpen={isOpen} toggleMenu={toggleMenu} />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
