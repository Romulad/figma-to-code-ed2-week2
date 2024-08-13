import { useContext, useEffect, useState } from "react";

import {
    FullProductBox,
} from "@components";
import {
    isVisibleByC
} from "@lib/utils.js";
import { AppContext } from "@/context";
import { collectionKey } from "@api/constant";
import { getDatasFromCollection } from "@lib/utils";

export default function ProductTypeSection(){
    const { dataState } = useContext(AppContext);
    const collectionDatas = JSON.parse(
        localStorage.getItem(collectionKey) || "{}"
    );
    const [productTypes, setProductTypes] = useState([]);
    const [currentType, setCurrentType] = useState({});
    const [currentEndIndex, setCurrentEndIndex] = useState(6);
    const [changingType, setChangingType] = useState(false);

    useEffect(()=>{
        if(Object.keys(collectionDatas).length > 0 ){
            const datas = [
                {
                    type: "All",
                    datas: [
                        ...getDatasFromCollection(collectionDatas?.accessories),
                        ...getDatasFromCollection(collectionDatas?.men),
                        ...getDatasFromCollection(collectionDatas?.featured),
                        ...getDatasFromCollection(collectionDatas?.women),
                        ...getDatasFromCollection(collectionDatas?.unisex),
                    ]
                },
                {
                    type: "Accessories",
                    datas: getDatasFromCollection(collectionDatas?.accessories),
                    
                },
                {
                    type: "Featured",
                    datas: getDatasFromCollection(collectionDatas?.featured),
        
                },
                {
                    type: "Unisex",
                    datas: getDatasFromCollection(collectionDatas?.unisex)
                },
                {
                    type: "Men",
                    datas: getDatasFromCollection(collectionDatas?.men)
                },
                {
                    type: "Women",
                    datas: getDatasFromCollection(collectionDatas?.women)
                },
            ]
            setProductTypes(datas);
        }
    }, [dataState.dataIsLoading])

    useEffect(()=>{
        if(productTypes.length > 0){
            setCurrentType(productTypes[0]);
        }
    }, [productTypes])

    useEffect(()=>{
        function smoothDisplay(ev){
            document.querySelectorAll('.product')
            .forEach(element => {
                if(isVisibleByC(element, false, false)){
                    element.classList.add("animate-fadInUp");
                   
                }
            });
        }
        window.addEventListener('scroll', smoothDisplay);

        return () => {window.removeEventListener('scroll', smoothDisplay)}
    }, [])

    function onViewMoreBtnClick(){
        if(currentType.datas.length > currentEndIndex){
            setCurrentEndIndex(currentEndIndex + 4)
        }
    }

    function onChangeTypeBtnClick(data){
        setCurrentType([]);
        setChangingType(true);
        setTimeout(() => {
            setCurrentType(data);
            setCurrentEndIndex(6);
            setChangingType(false);
            window.scrollTo(0, window.scrollY + 10);
        }, 100);
    }

    return(
        <>
        <div className="mb-16">
            <ul className="mb-6 flex sm:justify-center gap-3 flex-wrap">
                {productTypes.length > 0 && 
                productTypes
                ?.map((data, index)=>(
                    <li key={index} className="group">
                        <button className={`flex items-center gap-2 
                        border border-black p-3 rounded-full text-black
                        group-hover:bg-black group-hover:text-white 
                        ${currentType.type === data.type && " bg-black text-white"}`}
                        onClick={()=>{onChangeTypeBtnClick(data)}}>
                            <span>{data.type}</span>
                            <span>{data.datas.length}</span>
                        </button>
                    </li>
                ))}
            </ul>

            {
                dataState.dataIsLoading || changingType ?
                <div className="w-full h-[400px] bg-slate-300 rounded-xl animate-pulse ">
                </div> :
                <>
                    <div className="flex gap-x-4 gap-y-5 flex-wrap justify-center 
                    mb-10">
                        {productTypes.length > 0 &&
                        currentType
                        ?.datas
                        ?.slice(0, currentEndIndex)
                        .map((data, index)=>(
                            <div className="w-full sm:w-[47%] md:w-[33%]
                            lg:w-[30%] xl:w-1/4 flex justify-center product opacity-0"
                            key={index}>
                                <FullProductBox
                                data={data.node}
                                title={data.node.title}
                                price={data.node.priceRange.minVariantPrice.amount}
                                promo={index%2 === 0}
                                imgUrl={data.node.featuredImage.url}/>
                            </div>
                        ))}
                    </div>
                    
                    {currentType?.datas?.length > currentEndIndex &&
                    <div className="flex justify-center">
                        <button className="border-2 border-black px-8 
                        py-3 rounded-full capitalize hover:bg-black hover:text-white
                        " onClick={onViewMoreBtnClick}>
                            View more
                        </button>
                    </div> }
                </>
            }
        </div>
        </>
    )
}