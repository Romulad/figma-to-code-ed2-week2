import { useState, useContext, useEffect } from "react";

import { CartContext } from "@/context";

export default function useCheckProductInCart(productId){
    const cart = useContext(CartContext);
    const [productIsInCart, setProductIsInCart] = useState(false);

    useEffect(()=>{
        const cartDatas = cart.cartDatas;
        const product = cartDatas?.find((product)=>(product.data.id === productId));
        if(product){
            setProductIsInCart(true)
        }else{
            setProductIsInCart(false)
        }
    }, [cart])

    return productIsInCart
}