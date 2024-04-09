// Hamburger.js
import React, { useState } from 'react';
import '../CSS/Hamburger.css'; // Import the CSS file for styling
import { Link } from 'react-router-dom';
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import { GiHamburgerMenu } from "react-icons/gi";

const Hamburger = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  return (
    <div className='hamburger'>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}>
        <GiHamburgerMenu style={{fontSize:25}} />
      </Button>

      <Menu
        keepMounted
        anchorEl={anchorEl}
        onClose={handleClose}
        open={Boolean(anchorEl)}>
        <MenuItem onClick={handleClose}>
          <Link to='/'>Home</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to='/about'>About</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to='/service'>Services</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to='/contactUs'>Contact Us</Link>
        </MenuItem>
      </Menu>

    </div>
  );
};

export default Hamburger;
