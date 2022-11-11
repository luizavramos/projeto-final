import Carousel from "../../Components/Carousel/Index";
import ListProducts from "../../Components/Products/ListProducts/Index";
import Carrinho from "../../Components/Carrinho/Index";
import ShoppingContext from "../../Contexts/CartContext";
import { useContext } from "react";
function Home(){

    const { cart } = useContext(ShoppingContext);

    function getTotalFromProducts() {
      return cart.reduce((acc, current) => {
        return acc += current.price;
      }, 0)
    }

    return(<>
        
        <Carousel/>
        <ListProducts/>
        
        </>
    )
}
export default Home;