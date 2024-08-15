import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import addToCartSrc from "@assets/addToCart.svg";
import minusIcon from "@assets/minusIcon.svg";
import {
    ProductImgBox
} from "@components";
import { CartContext } from "@/context";



export default function FullProductBox({
    title, price, promo, imgUrl, data
}){
    const cart = useContext(CartContext);
    const navigate = useNavigate();
    const [productIsInCart, setProductIsInCart] = useState(false);

    useEffect(()=>{
        const cartDatas = cart.cartDatas;
        const product = cartDatas?.find((product)=>(product.data.id === data.id));
        if(product){
            setProductIsInCart(true)
        }else{
            setProductIsInCart(false)
        }
    }, [cart])

    function onAddToCartBtnClick(){
        const cartDatas = cart.cartDatas;
        const product = cartDatas.find((product)=>(product.data.id === data.id));
        if(!product){
            cart.setCartDatas([...cart.cartDatas, {count: 1, data}]);
        }
    }

    function onRemoveFromCartBtnClick(){
        const cartDatas = cart.cartDatas;
        const newCart = cartDatas.filter((product)=>(product.data.id !== data.id));
        cart.setCartDatas(newCart);
    }

    function onBuyNowBtnClicK(){
        onAddToCartBtnClick();
        navigate("/checkout");
    }

    function onProductClick(){
        navigate(`/product/detail?productId=${data.id}`)
    }

    return(
        <div className="flex flex-col gap-3 hover:cursor-pointer"
        >
            <div className="relative 
            rounded-[25px] group">
                
                <button className="h-full w-full" 
                onClick={onProductClick}>
                    <ProductImgBox 
                    imgSrc={imgUrl}
                    productTitle={title}/>
                </button>

                {promo &&
                <div className="z-10 text-[13px] absolute top-3 left-3 bg-white p-2 
                rounded-full uppercase font-medium ">
                    get off 20% 
                </div>}

                <div className="absolute top-0 w-full h-full z-5 
                bg-[rgba(0,0,0,0.4)] rounded-[25px] hidden group-hover:block 
                group-hover:scale-105" onClick={onProductClick}>
                </div>

                <div className="w-full z-10 absolute bottom-2
                transition-all duration-500 opacity-0 group-hover:opacity-100">
                    <div className="w-full flex justify-between gap-2 px-3
                    flex-wrap">
                        {!productIsInCart ? 
                        <button className="flex flex-wrap gap-2 items-center 
                        py-3 px-3 bg-white rounded-full justify-center grow
                        scale-100 hover:scale-105 transition-all duration-500"
                        onClick={onAddToCartBtnClick}>
                            <img src={addToCartSrc} alt="Add to cart" 
                            />
                            <span className="font-bold">Add to cart</span>
                        </button> :

                        <button className="flex flex-wrap gap-2 items-center 
                        py-3 px-3 bg-white rounded-full justify-center grow
                        scale-100 hover:scale-105 transition-all duration-500"
                        onClick={onRemoveFromCartBtnClick}>
                            <img src={minusIcon} alt="Remove from cart" 
                            className="size-6"/> 
                            <span className="font-bold">Remove from cart</span>
                        </button>}

                        <button className="border-2 px-3 py-2 rounded-full 
                        text-white font-bold grow text-center hover:bg-black hover:border-0"
                        onClick={onBuyNowBtnClicK}>
                            Buy now
                        </button>
                    </div>
                </div>
            </div>
            
            <div>
                <h4 className="font-medium uppercase
                self-start text-xl sm:text-2xl">
                    {title?.length > 15 ? title?.slice(0, 15) + "..." : title}
                </h4>
                <p className="text-gray-500 text-xl sm:text-2xl font-bold">
                    ${parseInt(price)}
                </p>
            </div>
        </div>
    )
}