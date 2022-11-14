import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import CartContext from "./Contexts/CartContext";
import Home from "./Pages/Home/Index";
import DescriptionProduct from "./Components/Products/DescriptionProducts/Index";
import { useState } from "react";
import Navbar from "./Components/Navbar/Index";
import CheckoutPage from "./Pages/CheckoutPage/Index";
import Hoteis from "./Components/Category/Hoteis/Index";
import Passagens from "./Components/Category/Passagens/Index";
import Pacotes from "./Components/Category/Pacotes/Index";
import ProductsSearch from "./Components/Products/ProductsSearch/Index";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <>
      <CartContext.Provider value={{ cart, setCart }}>
        <div className="App">
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/hoteis" element={<Hoteis />} />
              <Route path="/passagens" element={<Passagens />} />
              <Route path="/pacotes" element={<Pacotes />} />
              <Route
                path="/products/:productsId"
                element={<DescriptionProduct />}
              />
              <Route path="/productSearch" element={<ProductsSearch/>}/>
              <Route path="/checkout" element={<CheckoutPage />} />

            </Routes>
          </BrowserRouter>
        </div>
      </CartContext.Provider>
    </>
  );
}

export default App;
