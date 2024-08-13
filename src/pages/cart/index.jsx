import { useContext } from "react";

import { CartContext } from "@/context";
import {
    PageWrapper
} from "@components";
import trashIcon from "@assets/trashIcon.svg";
import minusIcon from "@assets/minusIcon.svg";
import plusIcon from "@assets/plusIcon.svg";

const title = "Ballamas - Cart"

export function CartPage(){
    const cart = useContext(CartContext)

    function onClearCartClick(){
        cart.setCartDatas([]);
    }

    function decreaseCount(product){
        if(product.count <= 0){
            return
        }

        const newProduct = {...product, count: product.count - 1};
        const newCartDatas = cart.cartDatas.map((current)=>{
            if(current.data.id === product.data.id){
                return newProduct
            }
            return current
        });

        cart.setCartDatas(newCartDatas);
    }

    function increaseCount(product){
        const newProduct = {...product, count: product.count + 1};
        const newCartDatas = cart.cartDatas.map((current)=>{
            if(current.data.id === product.data.id){
                return newProduct
            }
            return current
        });
        cart.setCartDatas(newCartDatas);
    }

    function deleteFromCart(toDelete){
        const newCartDatas = cart.cartDatas.filter((product)=>(
            product.data.id !== toDelete.data.id
        ));
        cart.setCartDatas(newCartDatas);
    }

    function getSubTotal(){
        let total = 0;
        cart.cartDatas.map((product)=>{
            total += parseInt(product.data.priceRange.minVariantPrice.amount) * product.count
        })
        return total;
    }
    
    return(
        <div className="flex gap-10 items-start flex-wrap">

            {/* Part one */}
            <div className="w-full min-[900px]:grow min-[900px]:w-auto">
                <div className="flex justify-between items-center gap-2 flex-wrap">
                    <h1 className="font-chillax font-semibold 
                    sm:text-2xl text-xl">
                        Cart({cart.cartDatas.length})
                    </h1>
                    <button className="p-2 bg-slate-100 rounded-full
                    text-sm flex gap-1 items-center "
                    onClick={onClearCartClick}>
                        <img src={trashIcon} alt="Trash icon" 
                        title="Clear cart" className="size-4"/>
                        <span>Clear Cart</span>
                    </button>
                </div>

                <div className="mt-8 overflow-auto w-full">
                    <div className=" sm:w-full text-no-wrap">
                        <table className="table min-w-full">
                            <thead>
                            <tr className="border-b ">
                                    <th scope="col" className="pb-2 text-start font-light text-gray-700">
                                        Product
                                    </th>

                                    <th scope="col" className="pb-2 text-start font-light text-gray-700">
                                        Quantity
                                    </th>

                                    <th scope="col" className="pb-2 text-start font-light text-gray-700">
                                        Price
                                    </th>
                                </tr> 
                            </thead>

                            <tbody>
                                {cart.cartDatas
                                ?.map((product)=>(
                                    <tr className=""
                                    key={product.data.id}>
                                        <td className="text-start py-5 border-b">
                                            <div className="flex items-center gap-2 ">
                                                <div className="size-[100px] rounded-xl">
                                                    <img src={product.data.featuredImage.url} 
                                                    alt={product.data.title} 
                                                    className="rounded-xl"/>
                                                </div>

                                                <div className="flex flex-col gap-1">
                                                    <h4 className="font-semibold ">
                                                        {product.data.title.length > 20 ?
                                                        product.data.title.slice(0, 20) + "...":
                                                        product.data.title}
                                                    </h4>
                                                    <span className="text-gray-600 text-sm">
                                                        Variant - Large
                                                    </span>
                                                    <span className="font-semibold ">
                                                        ${parseInt(
                                                            product.data.priceRange.minVariantPrice.amount
                                                        )}
                                                    </span>
                                                </div>
                                            </div>
                                        </td>

                                        <td className="text-start py-5 border-b">
                                            <div className="flex gap-2">
                                                <div className="flex bg-slate-100 p-2 w-32 sm:w-36 rounded-full justify-between">
                                                    <button onClick={()=>{decreaseCount(product)}}>
                                                        <img src={minusIcon} alt="Minus" className="size-5"
                                                        title="Decrease product count"/>
                                                    </button>

                                                    <span>
                                                        {product.count} 
                                                    </span>

                                                    <button onClick={()=>{increaseCount(product)}}>
                                                        <img src={plusIcon} alt="Plus" className="size-5"
                                                        title="Increase product count"/>
                                                    </button>
                                                </div>
                                                    
                                                <button className="p-2 rounded-full bg-slate-100"
                                                onClick={()=>{deleteFromCart(product)}}>
                                                    <img src={trashIcon} alt="Trash" 
                                                    title="Delete from cart" className="size-5"/>
                                                </button>
                                            </div>
                                        </td>

                                        <td className="text-start py-5 border-b">
                                            <span className="font-semibold">
                                                ${(parseInt(
                                                    product.data.priceRange.minVariantPrice.amount
                                                ) * product.count).toFixed(2)}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Summuray part */}
            <div className="border rounded-xl p-6 w-full min-[900px]:w-[300px]">
                <div>
                    <span className="font-semibold text-lg">
                        Order summary
                    </span>
                </div>

                <div className="pb-3 border-b text-gray-600 mt-6 flex flex-col gap-2">
                    <div className="flex justify-between">
                        <span>
                            Subtotal
                        </span>
                        <span>
                            ${getSubTotal().toFixed(2)}
                        </span>
                    </div>
                    
                    <div className="flex justify-between">
                        <span>
                            Discount
                        </span>
                        <span>
                            $0
                        </span>
                    </div>
                </div>

                <div className="mt-4 flex justify-between">
                    <span className="font-semibold">Order total</span>
                    <span className="font-bold text-lg">
                        ${getSubTotal().toFixed(2)}
                    </span>
                </div>

                <button className="w-full mt-3 rounded-full py-3 bg-black text-white">
                    Checkout now
                </button>
            </div>
        </div>
    )
}

export default PageWrapper(
    CartPage, { title }
)