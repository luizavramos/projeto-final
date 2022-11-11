import { useNavigate } from "react-router-dom";


import "./Product.css";

function Product(props) {
  const { id, name, photo, price, description, pieces, category, selected} = props;
  const navigate = useNavigate();

  function handleSelect() {
    navigate(`/products/${id}`);
  }
    console.log("tentando")

  return (
    <div className="Product">
      <div className={selected ? "product selected" : "product"} onClick={handleSelect}>
        <img className="photo" src={photo} alt="foto pagina inicial"/>
        <p className="title">{name}</p>
        <p className="description">{description}</p>
        <p className="price">Preço: R${price.toFixed(2).replace(".", ",")}</p>       
        
      </div>
    </div>
  )
}

export default Product;