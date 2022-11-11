import axios from "axios";
import { useEffect, useState, useContext } from "react";


import Product from "../../Products/Product/Index";
import CartContext from "../../../Contexts/CartContext";
import "./Pacotes.css"
import { useParams } from "react-router-dom";

function Pacotes() {
  const [productsList, setProductsList] = useState(null);
  const { cart } = useContext(CartContext);
 

  useEffect(() => {
    const promise = axios.get(`${process.env.REACT_APP_BACKEND_URI}/products`,{params:{category:'Pacotes'}});
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
            selected={cart.find(productOnCart => productOnCart.id === product.id)}
            />
         
      );
    });
  }

  const products = buildProductsList();
  return (<>
   <div className="title-page">
    <h2>Aqui você pode encontrar todos os nossos Pacotes </h2>
  </div>
    <div className="Products-list">
      {products}
    </div>
    </>
  );
}
export default Pacotes;