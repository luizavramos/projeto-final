
export default function ProductDetail(props) {
    const { name, photo, price, description, pieces, category} = props;
  
   
    return (
      <div className="ProductDetail">
        <div className="product">
          <h1>{name}</h1>
          <img src={photo} alt="foto legal"/>
          <h3>Preço: R${price.toFixed(2).replace(".", ",")}</h3>
          <h4>{description}</h4>
          <h4>{pieces}</h4>
          <h4>{category}</h4>         
        </div>
      </div>
    )
}