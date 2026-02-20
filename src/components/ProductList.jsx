import Navbar from "./Navbar";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/CartSlice";

const plants = [
  {
    category: "Indoor Plants",
    items: [
      { id: 1, name: "Snake Plant", price: 20, image: "https://via.placeholder.com/100" },
      { id: 2, name: "Peace Lily", price: 25, image: "https://via.placeholder.com/100" },
      { id: 3, name: "Spider Plant", price: 18, image: "https://via.placeholder.com/100" },
      { id: 4, name: "Aloe Vera", price: 15, image: "https://via.placeholder.com/100" },
      { id: 5, name: "ZZ Plant", price: 30, image: "https://via.placeholder.com/100" },
      { id: 6, name: "Fiddle Leaf", price: 40, image: "https://via.placeholder.com/100" },
    ]
  },
  {
    category: "Succulents",
    items: [
      { id: 7, name: "Echeveria", price: 12, image: "https://via.placeholder.com/100" },
      { id: 8, name: "Jade Plant", price: 14, image: "https://via.placeholder.com/100" },
      { id: 9, name: "Haworthia", price: 10, image: "https://via.placeholder.com/100" },
      { id: 10, name: "Sedum", price: 11, image: "https://via.placeholder.com/100" },
      { id: 11, name: "Lithops", price: 13, image: "https://via.placeholder.com/100" },
      { id: 12, name: "Agave", price: 20, image: "https://via.placeholder.com/100" },
    ]
  },
  {
    category: "Flowering Plants",
    items: [
      { id: 13, name: "Orchid", price: 35, image: "https://via.placeholder.com/100" },
      { id: 14, name: "Rose Plant", price: 22, image: "https://via.placeholder.com/100" },
      { id: 15, name: "Hibiscus", price: 19, image: "https://via.placeholder.com/100" },
      { id: 16, name: "Lavender", price: 17, image: "https://via.placeholder.com/100" },
      { id: 17, name: "Begonia", price: 16, image: "https://via.placeholder.com/100" },
      { id: 18, name: "Anthurium", price: 28, image: "https://via.placeholder.com/100" },
    ]
  }
];

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  return (
    <>
      <Navbar />
      {plants.map(category => (
        <div key={category.category}>
          <h2 style={{ paddingLeft: "20px" }}>{category.category}</h2>
          <div className="plant-grid">
            {category.items.map(plant => (
              <div key={plant.id}>
                <img src={plant.image} alt={plant.name} />
                <h4>{plant.name}</h4>
                <p>${plant.price}</p>
                <button
                  onClick={() => dispatch(addItem(plant))}
                  disabled={cartItems.some(i => i.id === plant.id)}
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}

export default ProductList;