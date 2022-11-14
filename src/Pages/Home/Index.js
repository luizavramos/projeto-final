import Carousel from "../../Components/Carousel/Index";
import ListProducts from "../../Components/Products/ListProducts/Index";
import Carrinho from "../../Components/Carrinho/Index";
import ShoppingContext from "../../Contexts/CartContext";
import { useContext } from "react";

import "./Home.css"
import ProductsSearch from "../../Components/Products/ProductsSearch/Index";

function Home(){

    return(<>

        
        <Carousel/>
         <ProductsSearch/>
        <h1>Melhores Ofertas</h1> 
        <ListProducts/>
        
        </>
    )
}
export default Home;