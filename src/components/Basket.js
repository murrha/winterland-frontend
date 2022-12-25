import {useContext} from 'react'
import { Button} from 'react-bootstrap'
import { CartContext } from '../CartContext'
import { getProductData } from '../productsStore';
import { Link } from 'react-router-dom';

function Basket(props){

  const cart = useContext(CartContext);
  const id = props.id;
  const quantity = props.quantity;
  const productData = getProductData(id);
  
  return(
    <>
      <h2>Items in your cart:</h2>
      
      <Button size="sm" onClick={() => cart.deleteFromCart(id)}>Remove</Button>
      <hr></hr>

      <Link to="/submit">
        <Button variant="success">Order</Button>
      </Link>
      
    </>
  )
}
export default Basket;