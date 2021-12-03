import {Link} from 'react-router-dom'

export default function Navbar(props) {
  return (
    <div>
      <Link to='/' >ShopEco</Link>
      <Link to='/items/Furniture' >Furniture</Link>
      <Link to="/items/Clothing" >Clothing</Link>
      <Link to='/items/Candles' >Candles</Link>
      <Link to='/new' >Submit an Eco-friendly Shop</Link>
    </div>
  )
}
