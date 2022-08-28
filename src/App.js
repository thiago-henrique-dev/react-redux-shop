import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductListing from "./containers/ProductListing";
import Header from "./containers/Header";
import "./App.css";
import ProductDetail from "./containers/ProductDetail";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<ProductListing/>}/>
            <Route
              path="/product/:productId"
              element={<ProductDetail/>}
            />

          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
