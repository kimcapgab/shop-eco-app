import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

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
      <h3>Shop Eco</h3>
      <Button
        id="basic-button"
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
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
          "aria-labelledby": "basic-button",
        }}
      >
        <Link className="home2" to="/">
          <MenuItem onClick={handleClose}>Home</MenuItem>
        </Link>
        <Link className="other_nav2" to="/items/Furniture">
          <MenuItem onClick={handleClose}>Furniture</MenuItem>
        </Link>

        <Link className="other_nav2" to="/items/Clothing">
          <MenuItem onClick={handleClose}>Clothing</MenuItem>
        </Link>

        <Link className="other_nav2" to="/items/Candles">
          <MenuItem onClick={handleClose}>Candles</MenuItem>
        </Link>
        <Link className="form_nav2" to="/new">
          <MenuItem onClick={handleClose}>Submit New Shop</MenuItem>
        </Link>
      </Menu>
    </div>
  );
}
