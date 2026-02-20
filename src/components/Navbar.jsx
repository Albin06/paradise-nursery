import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const cartItems = useSelector(state => state.cart.items);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="navbar">
      <div>
        <Link to="/">Home</Link> | 
        <Link to="/products"> Plants</Link> | 
        <Link to="/cart"> Cart ({totalItems})</Link>
      </div>
    </div>
  );
}

export default Navbar;