import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/CartSlice";
import CartItem from "./CartItem";

const plants = [
  { id: 1, name: "Aloe Vera", price: 10, category: "Indoor", image: "https://via.placeholder.com/150" },
  { id: 2, name: "Snake Plant", price: 15, category: "Indoor", image: "https://via.placeholder.com/150" },
  { id: 3, name: "Peace Lily", price: 18, category: "Indoor", image: "https://via.placeholder.com/150" },
  { id: 4, name: "Rose", price: 20, category: "Outdoor", image: "https://via.placeholder.com/150" },
  { id: 5, name: "Tulip", price: 16, category: "Outdoor", image: "https://via.placeholder.com/150" },
  { id: 6, name: "Cactus", price: 12, category: "Succulent", image: "https://via.placeholder.com/150" },
];

function ProductList({ goBack }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [showCart, setShowCart] = React.useState(false);

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  if (showCart) {
    return <CartItem goBack={() => setShowCart(false)} />;
  }

  return (
    <div>
      <h2>Our Plants</h2>

      <button onClick={() => setShowCart(true)}>View Cart</button>

      <div className="plant-grid">
        {plants.map((plant) => (
          <div key={plant.id} className="plant-card">
            <img src={plant.image} alt={plant.name} />
            <h3>{plant.name}</h3>
            <p>${plant.price}</p>

            <button
              onClick={() => handleAddToCart(plant)}
              disabled={cartItems.some(item => item.id === plant.id)}
            >
              {cartItems.some(item => item.id === plant.id)
                ? "Added"
                : "Add to Cart"}
            </button>
          </div>
        ))}
      </div>

      <button onClick={goBack}>Continue Shopping</button>
    </div>
  );
}

export default ProductList;