import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { 
    PageWrapper,
    AboutPage,
    SimpleSkeleton,
    FullProductBox
} from "@components";
import {
    collections,
    collectionKey
} from "@api/constant";
import { getDatasFromCollection } from "@lib/utils";

const title = "Ballamas - Collection"

export function CollectionDetail(){
    const params = useParams();
    const [updatingUi, setUpdatingUi] = useState(false);
    const [collection, setCollection] = useState({});
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        const collectionDatas = JSON.parse(
            localStorage.getItem(collectionKey) || "{}"
        );
        setUpdatingUi(true);

        const collection = collections.find(
            (collection)=>(collection.title.toLowerCase() === params.title)
        );
        const collectionProducts = collectionDatas[params.title];

        if(collection && collectionProducts){
            const products = getDatasFromCollection(collectionProducts);
            setCollection(collection);
            setProducts(products);
            setUpdatingUi(false);
        }else{
            setCollection({});
            setProducts([]);
        }
    }, [params])

    return(
        updatingUi ? 
        <SimpleSkeleton height={350}/> :
        <>
            <div className="text-center">
                <AboutPage name={collection.title}/>
            </div>

            <div className="relative h-[350px] w-full min-[820px]:w-[800px] mx-auto rounded-xl mb-10">
                <img src={collection.imgUrl} alt={collection.title} 
                className="h-full w-full rounded-xl "/>
                <div className="w-fu absolute top-1/2 z-20 -translate-y-1/2">
                    <div className="flex text-white px-2 justify-center text-center font-medium">
                        {collection.description}
                    </div>
                </div>
                <div className="absolute w-full h-full bg-[rgba(0,0,0,0.5)] top-0 rounded-xl"></div>
            </div>

            <div className="flex gap-x-4 gap-y-5 flex-wrap justify-center mb-10">
            {products
            .map((data, index)=>(
                <div className="w-full sm:w-[47%] md:w-[33%]
                lg:w-[30%] xl:w-1/4 flex justify-center"
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
        </>
    )
}

export default PageWrapper( CollectionDetail, { title })