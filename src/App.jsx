import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar">
          <h1 className="logo">Paradise Nursery</h1>
          <div>
            <Link to="/">Home</Link>
            <Link to="/plants">Plants</Link>
            <Link to="/cart">Cart</Link>
          </div>
        </nav>

        <Routes>
          <Route
            path="/"
            element={
              <div className="landing-page">
                <h2>Welcome to Paradise Nursery</h2>
                <Link to="/plants">
                  <button className="get-started-btn">Get Started</button>
                </Link>
              </div>
            }
          />
          <Route path="/plants" element={<ProductList />} />
          <Route path="/cart" element={<CartItem />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;