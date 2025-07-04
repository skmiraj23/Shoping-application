import { createContext, useContext, useState } from "react";

export const CartContext = createContext(null);

export const MyCart = () =>{
    const addCart = useContext(CartContext); 
    return addCart;
}

export const CartData = ({children})=>{
   const [item,setItem] = useState([])
   return <CartContext.Provider value={{item,setItem}}>
    {children}
   </CartContext.Provider>
}