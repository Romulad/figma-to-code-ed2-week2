import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { CartContext } from "@/context";

export default function useProductActions(){
    const cart = useContext(CartContext);
    const navigate = useNavigate();

    function onAddToCartBtnClick(productData){
        const cartDatas = cart.cartDatas;
        const product = cartDatas.find((product)=>(product.data.id === productData.id));
        if(!product){
            cart.setCartDatas([...cart.cartDatas, {count: 1, data:productData}]);
        }
    }

    function onRemoveFromCartBtnClick(productData){
        const cartDatas = cart.cartDatas;
        const newCart = cartDatas.filter((product)=>(product.data.id !== productData.id));
        cart.setCartDatas(newCart);
    }

    function onBuyNowBtnClicK(productData){
        onAddToCartBtnClick(productData);
        navigate("/checkout");
    }

    return [
        onAddToCartBtnClick, 
        onRemoveFromCartBtnClick, 
        onBuyNowBtnClicK
    ]
}