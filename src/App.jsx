import { Routes, Route, useNavigate } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      <h1>Paradise Nursery</h1>
      <button onClick={() => navigate("/products")}>
        Get Started
      </button>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/products" element={<ProductList />} />
      <Route path="/cart" element={<CartItem />} />
    </Routes>
  );
}

export default App;
