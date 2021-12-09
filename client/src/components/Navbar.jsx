import { Link } from "react-router-dom";
import Hamburger from "./Hamburger";

export default function Navbar() {


  return (
    <div className="navbar_container">
    <div className="navbar">
      <Link className="home" to="/">
        ShopEco
      </Link>
      <Link className="other_nav" to="/items/Furniture">
        Furniture
      </Link>
      <Link className="other_nav" to="/items/Clothing">
        Clothing
      </Link>
      <Link className="other_nav" to="/items/Candles">
        Candles
      </Link>
      <Link className="form_nav" to="/new">
        Submit an Eco-friendly Shop
      </Link>
      </div>
      <div className="mobile_menu">
      <Hamburger />
      </div>
    </div>
  );
}
