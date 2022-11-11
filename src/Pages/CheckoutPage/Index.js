import { useContext, useState } from "react"
import "./CheckoutPage.css";
import CartContext from "../../Contexts/CartContext";

export default function CheckoutPage() {
    const { cart } = useContext(CartContext);
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    
    



    function handleSubmit(e) {
        e.preventDefault();
        alert("Pedido Confirmado!");
        alert(`Será enviado para: ${name}`);
        alert(`No endereço: ${address}`);
      }

      

      return (
        <div className="CheckOutPage">
          <div>
            <h1>Itens Selecionados</h1>
            <ul>
              {cart.length > 0
                ? cart.map(product => <li>{product.pieces} x {product.name} - R$ {product.price.toFixed(2).replace(".", ",")}
                <br></br>
                Total: R${parseInt(product.pieces * product.price).toFixed(2).replace(".", ",")}</li>)
                : "Não há itens selecionados"
              }
            </ul>
        
          
          </div>
          <div>
            <h1>Endereço de entrega</h1>
            <form onSubmit={handleSubmit}>
              <label htmlFor="name">Nome: </label>
              <input name="name" type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
              <br />
              <label htmlFor="address">Email: </label>
              <input name="address" type="text" value={email} onChange={(e) => setAddress(e.target.value)}></input>
              <label htmlFor="address">Endereço: </label>
              <input name="address" type="text" value={address} onChange={(e) => setAddress(e.target.value)}></input>
              <label htmlFor="address">Endereço: </label>
              <input name="address" type="text" value={address} onChange={(e) => setAddress(e.target.value)}></input>
              <button type="submit" disabled={!address || !name}>Confirmar compra</button>
            </form>
          </div>
        </div>
      )
}