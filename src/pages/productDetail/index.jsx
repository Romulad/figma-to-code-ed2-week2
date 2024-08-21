import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import {
    PageWrapper,
    SimpleSkeleton,
    FullProductBox,
    Button
} from "@components";
import {
    fetchProduct,
    fetchProductRecommendations
} from "@api/actions";
import {
    useCheckProductInCart,
    useProductActions
} from "@/hooks";

const title = "Ballamas - Detail"

export function ProductDeatil(){
    const [addToCart, removeFCart, buyNow] = useProductActions();
    const [searchParams, ] = useSearchParams();
    const [fetchingProduct, setFetchingProduct] = useState(false);
    const [fetchingRecomm, setFetchingRecomm] = useState(false);
    const [fetchingError, setFetchingError] = useState({product:"", recomm: ""})
    const [productData, setProductData] = useState({});
    const [recommData, setRecommData] = useState([]);
    const productIsInCart = useCheckProductInCart(searchParams.get("productId"))

    useEffect(()=>{
        let productId = searchParams.get("productId");
        if(!productId){
            return;
        }

        setFetchingProduct(true)
        setFetchingRecomm(true)

        fetchProduct(productId)
        .then((resp)=>{
            if(Object.keys(resp).length){
                setProductData(resp.data.product);
                setFetchingProduct(false)
            }else{
                setFetchingError(
                    {...fetchingError, product: "Failed to fetch the product details"}
                )
                setFetchingProduct(false)
            }
        })
        fetchProductRecommendations(productId)
        .then((resp)=>{
            const datas = resp.data.productRecommendations
            if(datas && datas.length){
                setRecommData(datas);
                setFetchingRecomm(false)
            }else{
                setFetchingError(
                    {...fetchingError, recomm: "Failed to fetch the product recommendations"}
                )
                setFetchingRecomm(false)
            }
        })
    }, [searchParams])
    
    return(
        <>
        {fetchingProduct ?
        <SimpleSkeleton
        height={300}/> :
        <div className="flex gap-x-8 lg:gap-x-0 gap-y-10 items-start 
        flex-wrap min-[868px]:flex-nowrap">
            <div className="w-full min-[868px]:w-r1/2">
                <div className="w-full min-[400px]:w-[360px] 
                lg:w-[400px] h-[400px] 
                mx-auto"
                >
                    <img src={productData?.featuredImage?.url}
                    alt={productData?.title}
                    className="w-full h-full rounded-3xl scale-100 hover:scale-105
                    transition-all duration-500 hover:cursor-pointer"
                    onDoubleClick={(ev)=>{
                        if(ev.target.requestFullscreen){
                            ev.target.requestFullscreen();
                        }
                    }}/>
                </div>
            </div>

            <div className="w-full min-[868px]:w-r1/2 flex flex-col gap-5">
                <div>
                    <h1 className="font-chillax font-semibold 
                    text-xl sm:text-2xl">
                        {productData?.title}
                    </h1>
                    <h2 className="font-medium text-lg sm:text-2xl mt-2">
                        CAD ${productData?.priceRange?.minVariantPrice.amount}
                    </h2>
                </div>

                <div>
                    <div>
                        <h4 className="text-md sm:text-lg">
                            Color: Green
                        </h4>
                        <div className="flex gap-2 mt-2">
                            {["bg-green-500", "bg-blue-500", "bg-violet-500", "bg-cyan-500"]
                            .map((data)=>(
                                <button key={data}
                                className={`rounded-full p-3 ${data} focus:px-2 focus:py-1 
                                focus:border-4 duration-300 `}></button>
                            ))}
                        </div>
                    </div>

                    <div className="mt-3">
                        <h4 className="text-lg">
                            Size:
                        </h4>
                        <div className="flex gap-2 mt-2 flex-wrap">
                            {["xs", "s", "m", "l", "xl"]
                            .map((data)=>(
                                <button key={data}
                                className={`rounded-full py-3 px-6 border border-black
                                text-lg font-medium uppercase hover:bg-black hover:text-white
                                duration-500 `}>
                                    {data}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="flex gap-3 flex-wrap mt-5">
                        <Button 
                        text="Buy now"
                        onClick={()=>{buyNow(productData)}}
                        className="border border-black bg-black text-white 
                        py-4 w-full sm:w-r1/2 uppercase hover:text-black hover:bg-transparent 
                        rounded-full duration-500"/>

                        {productIsInCart ?
                        <Button 
                        text="Remove from cart" 
                        onClick={()=>{removeFCart(productData)}}
                        className={`border border-black 
                        py-4 px-3 w-full sm:w-r1/2 uppercase hover:text-white hover:bg-black 
                        rounded-full duration-500`}
                        /> : <Button
                        text="Add to cart"
                        onClick={()=>{addToCart(productData)}}
                        className={`border border-black 
                        py-4 px-3 w-full sm:w-r1/2 uppercase hover:text-white hover:bg-black 
                        rounded-full duration-500`}
                        />}
                    </div>
                </div>

                <div>
                    <h3 className="font-chillax font-medium text-xl">
                        Description
                    </h3>
                    <p className="mt-3 text-sm text-gray-600 hover:text-gray-900
                    max-w-[500px]">
                        {productData?.description ||
                        `Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, inventore. Vero, 
                        exercitationem fuga? Corrupti officia repudiandae, ab voluptatum iure non quos 
                        aliquam dolorum maxime excepturi alias modi tenetur obcaecati.`}
                    </p>
                </div>
            </div>
        </div>}

        {fetchingRecomm ?
        <div className="mt-10">
            <SimpleSkeleton 
            height={200}/>
        </div> :
        <div className="mt-14">
            <h2 className="text-xl font-chillax font-semibold">
                You may also like
            </h2>
            <div className="flex flex-nowrap *:shrink-0 gap-5
            overflow-auto p-5 mt-4">
                {recommData
                ?.map((data, index)=>(
                    <div key={index}>
                        <FullProductBox 
                        title={data.title}
                        price={data?.priceRange?.minVariantPrice.amount}
                        imgUrl={data?.featuredImage?.url}
                        data={data}/>
                    </div>
                ))}
            </div>
        </div>}
        </>
    )
}

export default PageWrapper(
    ProductDeatil, { title }
)