import axios from "axios";
import { useEffect, useState, useContext } from "react";

import Product from "../Product/Index.js";
import CartContext from "../../../Contexts/CartContext";
import "./ListProducts.css"
import { Button } from "@mui/material";
import ProductDetail from "../ProductsDetails/Index.js";

function ListProducts() {
  const [productsList, setProductsList] = useState(null);
  const { cart } = useContext(CartContext);
  

  useEffect(() => {
    const promise = axios.get(`${process.env.REACT_APP_BACKEND_URI}/products`);
    promise.then((response) => {
      setProductsList(response.data);
    });
  }, []);

   

  function buildProductsList() {
    if (productsList === null) {
      return <h1>Carregando...</h1>;
    }
    return productsList.map(product => {
      return (
            <Product 
            key={product.name}
            id={product.id}
            photo={product.photo}
            name={product.name} 
            price={product.price}
            category={product.category}
            pieces={product.pieces}
            selected={cart.find(productOnCart => productOnCart.id === product.id)}/>
                     
         
      );
    });
  }
  console.log(productsList)

  const products = buildProductsList();
  return (<>
 
    <div className="Products-list">
      {products}
    </div>
    </>
  );
}
export default ListProducts;
