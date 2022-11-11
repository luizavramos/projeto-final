import { useContext, useState } from "react";
import "./CheckoutPage.css";
import CartContext from "../../Contexts/CartContext";
import { useForm } from "react-hook-form";

export default function CheckoutPage() {
  const { cart } = useContext(CartContext);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const { register, handleSubmit, setValue, setFocus } = useForm();

  const onSubmit = (e) => {
    console.log(e);
  };

  const checkCEP = (e) => {
    const cep = e.target.value.replace(/\D/g, "");
    console.log(cep);
    fetch(`https://viacep.com.br/ws/${cep}/json/`).then(res => res.json()).then(data => {
      console.log(data);
      setValue('address', data.logradouro);
      setValue('neighborhood', data.bairro);
      setValue('city', data.localidade);
      setValue('uf', data.uf); 
      setFocus('addressNumber');
    });
  };

  return (
    <div className="CheckOutPage">
      <div>
        <h1>Itens Selecionados</h1>
        <ul>
          {cart.length > 0
            ? cart.map((product) => (
                <li>
                  {product.pieces} x {product.name} - R${" "}
                  {product.price.toFixed(2).replace(".", ",")}
                  <br></br>
                  Total: R$
                  {parseInt(product.pieces * product.price)
                    .toFixed(2)
                    .replace(".", ",")}
                </li>
              ))
            : "Não há itens selecionados"}
        </ul>
      </div>
      <div>
        <h1>Endereço de entrega</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
        <label>
            Nome Completo:
            <input type="text"/>
          </label>
          <label>
            E-mail: 
            <input type="text" />
          </label>
          <label>
            Data de nascimento: 
            <input type="text" />
          </label>
          <label>
            CEP:
            <input type="text" {...register("cep")} onBlur={checkCEP} />
          </label>
          <label>
            Rua:
            <input type="text" {...register("address")} />
          </label>
          <label>
            Numero:
            <input type="text" {...register("addressNumber")} />
          </label>
          <label>
            Bairro:
            <input type="text" {...register("neighborhood")} />
          </label>
          <label>
            Cidade:
            <input type="text" {...register("city")} />
          </label>
          <label>
            Estado:
            <input type="text" {...register("uf")} />
          </label>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
}
