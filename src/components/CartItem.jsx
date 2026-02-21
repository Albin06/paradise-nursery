import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "../redux/CartSlice";

function CartItem({ goBack }) {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h2>Shopping Cart</h2>

      {cartItems.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>Unit Price: ${item.price}</p>
          <p>Total: ${item.price * item.quantity}</p>

          <button
            onClick={() =>
              dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))
            }
          >
            +
          </button>

          <button
            onClick={() =>
              dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))
            }
          >
            -
          </button>

          <button onClick={() => dispatch(removeItem(item.id))}>
            Delete
          </button>
        </div>
      ))}

      <h3>Total Cart Amount: ${totalAmount}</h3>

      <button onClick={() => alert("Coming Soon!")}>
        Checkout
      </button>

      <button onClick={goBack}>
        Continue Shopping
      </button>
    </div>
  );
}

export default CartItem;