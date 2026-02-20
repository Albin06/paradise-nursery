import Navbar from "./Navbar";
import { useSelector, useDispatch } from "react-redux";
import {
  removeItem,
  incrementQuantity,
  decrementQuantity
} from "../redux/CartSlice";
import { useNavigate } from "react-router-dom";

function CartItem() {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <>
      <Navbar />
      <div style={{ padding: "20px" }}>
        <h2>Shopping Cart</h2>

        {cartItems.map(item => (
          <div key={item.id}>
            <img src={item.image} alt={item.name} />
            <h4>{item.name}</h4>
            <p>Unit Price: ${item.price}</p>
            <p>Total: ${item.price * item.quantity}</p>

            <button onClick={() => dispatch(incrementQuantity(item.id))}>+</button>
            <button onClick={() => dispatch(decrementQuantity(item.id))}>-</button>
            <button onClick={() => dispatch(removeItem(item.id))}>Delete</button>
          </div>
        ))}

        <h3>Total Cart Amount: ${totalAmount}</h3>

        <button onClick={() => alert("Coming Soon!")}>
          Checkout
        </button>

        <button onClick={() => navigate("/products")}>
          Continue Shopping
        </button>
      </div>
    </>
  );
}

export default CartItem;