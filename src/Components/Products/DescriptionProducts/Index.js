import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate, Await } from "react-router-dom";
import CartContext from "../../../Contexts/CartContext";
import ProductDetail from "../ProductsDetails/Index";
import "./DescriptionProducts.css"

function DescriptionProduct() {
  const params = useParams();
  const navigate = useNavigate();
  const [products, setProducts] = useState(null);
  const { cart, setCart } = useContext(CartContext);
  const [piece, setPiece] = useState(0);
  const [isEdit, setIsEdit] = useState(false);

  function handleBack() {
    navigate("/");
  }
  console.log(params);
  
  useEffect(() => {
      const url = process.env.REACT_APP_BACKEND_URI;
      const promise = axios.get(`${url}/products/${params.productsId}`);
      promise.then((response) => setProducts(response.data));
      promise.catch((error) => console.log("error", error));  
   
  }, []); 

function addProductOnCart() {
    if (isProductAlreadySelected()) {
      const newProductList = removeProductFromCart();
      setCart(newProductList);
      navigate("/");
    } else {

      setCart([...cart, products]);
      navigate("/checkout");
    }
  }

  async function salvarQuantidade(){  
      
      const url = process.env.REACT_APP_BACKEND_URI;
      const res = axios.patch(`${url}/products/${params.productsId}`, {
        pieces: piece ,
      })   
 
  }
 async function productUpdate(){
    const url = process.env.REACT_APP_BACKEND_URI;
      const promise = axios.get(`${url}/products/${params.productsId}`);
      promise.then((response) => setProducts(response.data));
      promise.catch((error) => console.log("error", error));  
   
  }
 
  console.log(isEdit)
  function removeProductFromCart() {
    return cart.filter((productOnCart) => products.id !== productOnCart.id);
  }

  function isProductAlreadySelected() {
    return cart.find((productOnCart) => products.id === productOnCart.id);
  }

  return (
    <div>
      {products ? (
        <ProductDetail
          name={products.name}
          photo={products.photo}
          price={products.price}
          description={products.description}
        />
      ) : (
        <div>Não há nada para exibir</div>
      )}
      
      <form onChange={salvarQuantidade} onSubmit={salvarQuantidade}>
      <label htmlFor="piece">Quantidade: </label>
      <input name="piece" type="number" value={piece} onChange={(e) => setPiece(e.target.value)}></input>
      
        <button onClick={handleBack}>Voltar</button>
        <button onClick={addProductOnCart} type="submit">
          {products && !isProductAlreadySelected() ? (
            <>Selecionar</>
          ) : (
            <>Remover</>
          )}
        </button></form> 
      </div>
    
  );
}
export default DescriptionProduct;
