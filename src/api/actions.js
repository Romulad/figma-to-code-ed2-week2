import { 
    collections,
    baseRoute,
    collectionKey,
    recommenDationKey
} from "@api/constant";
import { 
    getCollectionQuery ,
    getRecommendationsQuery
} from "@api/utils";


export const fetchProductsByCollection = () => {
    if(!localStorage.getItem(collectionKey)){
        collections.forEach( async (collection) => {
            const endPoint = `${baseRoute}${getCollectionQuery(collection.id)}`
            const resp = await fetch(endPoint);
            if(resp.ok){
                const datas = await resp.json()
                localStorage.setItem(collectionKey, JSON.stringify(datas))
            }else{

            }
        })
    }
}

export const fetchProductRecommendations = async (productId) => {
    const recommendations = JSON.parse(
        localStorage.getItem(recommenDationKey) || ""
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
        }else{
            // manage error based on the status code
        }
    }
    
}

