import React, { useState } from "react";
import ProductList from "./components/ProductList";
import "./App.css";

function App() {
  const [showProducts, setShowProducts] = useState(false);

  return (
    <div className="landing-page">
      {!showProducts ? (
        <div className="landing-content">
          <h1>Welcome to Paradise Nursery</h1>

          <button onClick={() => setShowProducts(true)}>
            Get Started
          </button>
        </div>
      ) : (
        <ProductList goBack={() => setShowProducts(false)} />
      )}
    </div>
  );
}

export default App;