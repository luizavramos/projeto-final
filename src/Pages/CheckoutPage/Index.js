import { useContext, useState } from "react";
import "./CheckoutPage.css";
import CartContext from "../../Contexts/CartContext";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

export default function CheckoutPage() {
  const { cart, setCart, product } = useContext(CartContext);

  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [email, setEmail] = useState("");
  const { register, handleSubmit, setValue, setFocus } = useForm();

  const onSubmit = (e) => {
    console.log(e);
    alert(`Compra efetuada com sucesso! Boa Viagem ${name}`)
    
  };

  const checkCEP = (e) => {
    const cep = e.target.value.replace(/\D/g, "");
    console.log(cep);
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setValue("address", data.logradouro);
        setValue("neighborhood", data.bairro);
        setValue("city", data.localidade);
        setValue("uf", data.uf);
        setFocus("addressNumber");
      });
  };

  function removeProductOnCart() {
    const newProductList = removeProductFromCart();
    setCart([...cart, newProductList]);
  }
  function removeProductFromCart() {
    return cart.filter(
      (productOnCart) => product.product.id !== productOnCart.id
    );
  }

  const handleReset = () => {
    Array.from(document.querySelectorAll("input")).forEach(
      input => (input.value = "")
    );
    }
  return (
    <div className="CheckOutPage">
      <div>
        <h1>Itens Selecionados</h1>
        <ul>
          {cart.length > 0
            ? cart.map((product) => (
                <ul>
                  {product.quantity} x {product.product.name} - R${" "}
                  {product.product.price.toFixed(2).replace(".", ",")} Total: R$
                  {parseInt(product.quantity * product.product.price)
                    .toFixed(2)
                    .replace(".", ",")}
                  <button className="excluir">
                    <img
                      src="https://i.imgur.com/u6yXzWS.png"
                      className="imagem-excluir"
                    />
                  </button>
                </ul>
              ))
            : "Não há itens selecionados"}
        </ul>
      </div>
      <div>
        <h1>Endereço de entrega</h1>
        <div className="form-checkout">
          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="name">Nome Completo:
              <input
                name="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <label htmlFor="email">
              E-mail:<br></br>
              <input
                name="email"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label htmlFor="date">
              Data de nascimento:<br></br>
              <input
                name="date"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </label>
            <label>
              CEP:<br></br>
              <input type="text" {...register("cep")} onBlur={checkCEP} />
            </label>
            <label>
              Rua:<br></br>
              <input type="text" {...register("address")} />
            </label>
            <label>
              Numero:<br></br>
              <input type="text" {...register("addressNumber")} />
            </label>
            <label>
              Bairro:<br></br>
              <input type="text" {...register("neighborhood")} />
            </label>
            <label>
              Cidade:<br></br>
              <input type="text" {...register("city")} />
            </label>
            <label>
              Estado:<br></br>
              <input type="text" {...register("uf")} />
            </label>
            
            <button type="submit" onClick={handleReset}>Enviar</button>
            
          </form>
        </div>
      </div>
    </div>
  );
}
