import { useState } from "react";

import addToCartSrc from "@assets/addToCart.svg";
import {
    ProductImgBox
} from "@components";
import { productDatas } from "@lib/datas";

export default function ProductTypeSection(){
    const [currentType, setCurrentType] = useState('All');
    const productTypes = [
        {type: "All", count: "132"},
        {type: "Accessories", count: "13"},
        {type: "Featured", count: "87"},
        {type: "Unisex", count: "52"}
    ]

    return(
        <>
        <div className="mb-16">
            <ul className="mb-6 flex justify-center gap-3 flex-wrap">
                {productTypes
                .map((data, index)=>(
                    <li key={index} className="group">
                        <button className={`flex items-center gap-2 
                        border border-black p-3 rounded-full text-black
                        group-hover:bg-black group-hover:text-white 
                        ${currentType === data.type && " bg-black text-white"}`}
                        onClick={()=>{setCurrentType(data.type)}}>
                            <span>{data.type}</span>
                            <span>{data.count}</span>
                        </button>
                    </li>
                ))}
            </ul>

            <div className="flex gap-x-4 gap-y-5 flex-wrap justify-center 
            mb-10">
                {
                    productDatas
                    .map((data, index)=>(
                        <div className="w-full sm:w-[47%] md:w-[33%]
                        lg:w-[30%] xl:w-1/4 flex justify-center"
                        key={index}>
                            <div className="flex flex-col gap-3">
                                <div className="relative 
                                rounded-[25px] group">

                                    <ProductImgBox 
                                    imgSrc={data.imgSrc}
                                    productTitle={data.title}/>

                                    {data.promo &&
                                    <div className="z-10 text-[13px] absolute top-3 left-3 bg-white p-2 
                                    rounded-full uppercase font-medium ">
                                        get off 20% 
                                    </div>}

                                    <div className="absolute top-0 w-full h-full z-5 
                                    bg-[rgba(0,0,0,0.4)] rounded-[25px] hidden group-hover:block 
                                    group-hover:scale-105">
                                    </div>

                                    <div className="w-full z-10 absolute bottom-2
                                    transition-all duration-500 opacity-0 group-hover:opacity-100">
                                        <div className="w-full flex justify-between gap-2 px-3
                                        flex-wrap">

                                            <button className="flex flex-wrap gap-2 items-center 
                                            py-3 px-3 bg-white rounded-full justify-center grow
                                            ">
                                                <img src={addToCartSrc} alt="Add to cart" 
                                                className=""/>
                                                <span className="font-bold">Add to cart</span>
                                            </button>

                                            <button className="border-2 px-3 py-2 rounded-full 
                                            text-white font-bold grow text-center">
                                                Buy now
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                
                                <div>
                                    <h4 className="font-medium uppercase
                                    self-start text-xl sm:text-2xl">
                                        {data.title}
                                    </h4>
                                    <p className="text-gray-500 text-xl sm:text-2xl font-bold">
                                        {data.price}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

            <div className="flex justify-center">
                <a href="#" className="border-2 border-black px-8 
                py-3 rounded-full capitalize hover:bg-black hover:text-white
                ">
                    View more
                </a>
            </div>
        </div>
        </>
    )
}