import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';

export default function Hamburger() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="mobile_menu">
      <Button
        id="basic-button"
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        
        <MenuIcon />
        
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>
        <Link className="home2" to="/">
          Home
        </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
        <Link className="other_nav2" to="/items/Furniture">
          Furniture
        </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
        <Link className="other_nav2" to="/items/Clothing">
          Clothing
        </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
        <Link className="other_nav2" to="/items/Candles">
          Candles
        </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
        <Link className="form_nav2" to="/new">
          Submit New Shop
        </Link>
        </MenuItem>
      </Menu>
    </div>
  );
}
