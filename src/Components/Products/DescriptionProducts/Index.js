import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
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

  function salvarQuantidade(){  
      const url = process.env.REACT_APP_BACKEND_URI;
      const res = axios.patch(`${url}/products/${params.productsId}`, {
        pieces: piece ,
      })
      
      productUpdate();
 
  }
  function productUpdate(){
    const url = process.env.REACT_APP_BACKEND_URI;
      const promise = axios.get(`${url}/products/${params.productsId}`);
      promise.then((response) => setProducts(response.data));
      promise.catch((error) => console.log("error", error));  
   
  }

  
  function Somar(){
    setPiece(piece + 1)    
    

  }
  function Subtrair(){
    setPiece(piece - 1)
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
      <div className="quantidade">
      <h4>Quantidade: {piece}</h4><div className="button-qtde">
      <button onClick={Somar}>+</button>
      <button onClick={Subtrair}>-</button>
      <button onClick={salvarQuantidade}>save</button>
      </div>
      </div>
      <div className="actions">      
    
        
        <button onClick={handleBack}>Voltar</button>
        <button onClick={addProductOnCart}>
          {products && !isProductAlreadySelected() ? (
            <>Selecionar</>
          ) : (
            <>Remover</>
          )}
        </button>
      </div>
    </div>
  );
}
export default DescriptionProduct;