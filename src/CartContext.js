import { createContext, useState } from "react";
import { productsArray, getProductData } from "./productsStore";

export const CartContext = createContext({
    items: [],
    getProductQuantity: () => {}, 
    addOneToCart: () => {}, 
    removeOneFromCart: () => {}, 
    deleteFromCart: () => {}, 
    getTotalCost: () => {}
});

export function CartProvider({children}){

    const [cartProducts, setCartProducts] = useState([]); 

    //cart will store id and quantity of items in cart
    
    function getProductQuantity(id){
        const quantity = cartProducts.find(product => product.id === id)?.quantity;

        if(quantity === undefined){
            return 0;
        }

        return quantity; 
    }

    function addOneToCart(id){
        const quantity = getProductQuantity(id); 

        //if product isn't in cart
        if(quantity === 0){

            //set current quantity to 1
            setCartProducts(
                [
                    ...cartProducts,
                    {
                        id: id,
                        quantity: 1
                    }
                ]
            )
        }else{

            //get the object of the product then add 1
            setCartProducts(
                cartProducts.map(
                    product =>
                    product.id === id
                    ? {...product, quantity: product.quantity + 1}
                    :
                    product
                )
            )
        }
        
    }

    function removeOneFromCart(id){
        const quantity = getProductQuantity(id);
        
        if(quantity === 1){
            deleteFromCart(id);
        }else{

            //uses same logic but will subtract instead
            setCartProducts(
                cartProducts.map(
                    product =>
                    product.id === id
                    ? {...product, quantity: product.quantity - 1}
                    :
                    product
                )
            )
        }
    }

    function deleteFromCart(id){

        //if object meets condition add it to the array
        setCartProducts(
            cartProducts =>
            cartProducts.filter(currentProduct => {
                return currentProduct.id != id;
            })
        )
    }

    function getTotalCost(){
        let totalCost = 0; 

        cartProducts.map((cartItem) => {
            const productData = getProductData(cartItem.id);
            totalCost += (productData.price * cartItem.quantity); 
        });

        return totalCost; 
    }
    
    const contextValue = {
        items: cartProducts,
        getProductQuantity, 
        addOneToCart, 
        removeOneFromCart, 
        deleteFromCart, 
        getTotalCost
    }

    return(
        <CartContext.Provider value = {contextValue}>
            {children}
        </CartContext.Provider>
    )
}

//context(cart, addToCart, removeCart)
//provider gives react app access to all things in context

export default CartProvider; 
