import { useEffect, useState } from "react";
import SearchInput from "../../SearchItems/SearchInput";
import Product from "../../Products/Product/Index";
import axios from "axios";
import "./ProductsSearch.css"

export default function ProductsSearch() {
  const [productsList, setProductsList] = useState(null);
  const [text, setText] = useState("");

  useEffect(() => {
    if (text) {
      setProductsList(null);

      const promise = axios.get(
        `${process.env.REACT_APP_BACKEND_URI}/products?q=${text}`
      );
      promise.then((response) => {
        setProductsList(response.data);
      });
    }
  }, [text]);

  console.log(text);

  function buildProductsList() {
    if (productsList === null) {
      return <></>;
    }
    return productsList.map((product) => {
      return (
        <Product
          key={product.name}
          id={product.id}
          photo={product.photo}
          name={product.name}
          price={product.price}
          category={product.category}
          pieces={product.pieces}
        />
      );
    });
  }
  const products = buildProductsList();

  return (
    <div className="search">
      <div>
        <SearchInput value={text} onChange={(search) => setText(search)} />
      </div>
      <div className="products-search">
      {products}
      </div>
    </div>
  );
}
