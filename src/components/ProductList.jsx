import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/CartSlice";
import { Link } from "react-router-dom";

const plants = [
  { id: 1, name: "Snake Plant", price: 10, category: "Indoor", image: "/images/snake.jpg" },
  { id: 2, name: "Peace Lily", price: 15, category: "Indoor", image: "/images/lily.jpg" },
  { id: 3, name: "Rose", price: 8, category: "Outdoor", image: "/images/rose.jpg" },
  { id: 4, name: "Tulip", price: 12, category: "Outdoor", image: "/images/tulip.jpg" },
  { id: 5, name: "Aloe Vera", price: 7, category: "Succulent", image: "/images/aloe.jpg" },
  { id: 6, name: "Cactus", price: 9, category: "Succulent", image: "/images/cactus.jpg" },
];

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const isInCart = (id) => {
    return cartItems.some((item) => item.id === id);
  };

  const renderCategory = (category) => (
    <>
      <h2>{category} Plants</h2>
      <div className="plant-grid">
        {plants
          .filter((plant) => plant.category === category)
          .map((plant) => (
            <div key={plant.id} className="plant-card">
              <img src={plant.image} alt={plant.name} />
              <h3>{plant.name}</h3>
              <p>${plant.price}</p>
              <button
                disabled={isInCart(plant.id)}
                onClick={() => dispatch(addItem(plant))}
              >
                {isInCart(plant.id) ? "Added" : "Add to Cart"}
              </button>
            </div>
          ))}
      </div>
    </>
  );

  return (
    <div className="product-container">
      {renderCategory("Indoor")}
      {renderCategory("Outdoor")}
      {renderCategory("Succulent")}

      <Link to="/cart">
        <button className="go-to-cart">Go To Cart</button>
      </Link>
    </div>
  );
}

export default ProductList;