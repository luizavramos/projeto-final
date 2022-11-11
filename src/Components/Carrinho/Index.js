import { useNavigate } from "react-router-dom"

export default function Carrinho({ total }) {
  const navigate = useNavigate();
  return (
    <div className="Carrinho">
      <p>Total da compra: R$ {total.toFixed(2)}</p>
      {total > 0 ? <button onClick={() => navigate("/checkout")}>Fechar compra</button> : ""}
    </div>
  )
}