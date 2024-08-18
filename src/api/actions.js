import { 
    collections,
    baseRoute,
    collectionKey,
    recommenDationKey
} from "@api/constant";
import { 
    getCollectionQuery ,
    getRecommendationsQuery,
    getProductQuery
} from "@api/utils";


export const fetchProductsByCollection = async () => {
    if(!localStorage.getItem(collectionKey)){
        const collectionDatas = {};
        for(let r=0; r < collections.length; r++){
            const collection = collections[r];
            const endPoint = `${baseRoute}${getCollectionQuery(collection.id)}`
            const resp = await fetch(endPoint);
            if(resp.ok){
                const datas = await resp.json();
                collectionDatas[collection.title.toLowerCase()] = datas;
            }else{
                // error status code
            }
        }
        localStorage.setItem(collectionKey, JSON.stringify(collectionDatas))
    }
}

export const fetchProductRecommendations = async (productId) => {
    const recommendations = JSON.parse(
        localStorage.getItem(recommenDationKey) || "{}"
    );
    if(recommendations && recommendations[productId]){
        return recommendations[productId]
    }else{
        const endPoint = `${baseRoute}${getRecommendationsQuery(productId)}`
        const resp = await fetch(endPoint);

        if(resp.ok){
            const datas = await resp.json();
            if(recommendations){
                recommendations[productId] = datas;
                localStorage.setItem(
                    recommenDationKey, JSON.stringify(recommendations)
                );
            }else{
                const newRecommendations = {};
                newRecommendations[productId] = datas;
                localStorage.setItem(
                    recommenDationKey, JSON.stringify(newRecommendations)
                );
            }
            return datas;
        }else{
            // manage error based on the status code;
            return [];
        }
    }
}

export const fetchProduct = async (productId) => {
    const endPoint = `${baseRoute}${getProductQuery(productId)}`
    const resp = await fetch(endPoint);

    if(resp.ok){
        const datas = await resp.json();
        return datas;
    }else{
        // manage error based on the status code;
        return {};
    }
}
