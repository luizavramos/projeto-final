import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import CartContext from "../../../Contexts/CartContext";
import ProductDetail from "../ProductsDetails/Index";
import "./DescriptionProducts.css"

function DescriptionProduct() {
  const [product, setProduct] = useState(null);
  const { cart, setCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const url = process.env.REACT_APP_BACKEND_URI;
    const promise = axios.get(`${url}/products/${params.productsId}`);
    promise.then((response) => setProduct(response.data));
    promise.catch((error) => console.log("error", error));
  }, []);

  function addProductOnCart() {
    const { indexOfProduct } = getProductFromCart();
    if (indexOfProduct >= 0) {
      const productToUpdate = cart[indexOfProduct];
      console.log("productToUpdate - b", productToUpdate)
      productToUpdate.quantity += parseInt(quantity);
      console.log("productToUpdate - a", productToUpdate)
      setCart([...cart, { product, quantity }]);
    } else {
      setCart([...cart, { product, quantity }]);

    }
    navigate("/checkout");
  }
   
  // {product, quantity}
  function getProductFromCart() {
    let indexOfProduct = -1; // does not exists
    const productOrder = cart.find((productOnCart, index) => {
      indexOfProduct = index;
      return product.id === productOnCart.product.id
    });

    return { productOrder, indexOfProduct };
  }

  return (
    <div>
      {product ? (
        <ProductDetail
          name={product.name}
          photo={product.photo}
          price={product.price}
          description={product.description}
        />
      ) : (
        <div>Não há nada para exibir</div>
      )}
      <div className="quantidade">
        <div>
          <label htmlFor="quantity">Quantidade: </label>
          <input id="quantity" onChange={(e) => setQuantity(parseInt(e.target.value))} value={quantity} type="number" min={1} />
        </div>
      </div>
      <div className="actions">


        <button onClick={() => navigate("/")}>Voltar</button>
        <button onClick={addProductOnCart}>Selecionar</button>
      </div>
    </div>
  );
}
export default DescriptionProduct;
