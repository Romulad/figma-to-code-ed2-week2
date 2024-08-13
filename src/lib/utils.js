import React from "react";

export function waitFor(ms){
    return new Promise((resolver)=>setTimeout(resolver, ms))
}

/** Write the text contain in the given html element
 * @param {React.MutableRefObject} ref
 * @param {number} inter intervall in ms to wait before writting the next charactere  
 */
export async function writeText(ref, inter){
    const toWrite = ref.current.textContent;
    ref.current.textContent = "";

    ref.current.classList.remove('hidden');

    for(let t=0; t<toWrite.length; t++){
        await waitFor(inter ? inter : 200)
        ref.current.textContent += toWrite[t]
    }
}


export const isVisibleByC = (element, exact=false, onBottom=true) =>{
    // let scrollLen = window.scrollY;
    let innerH = window.innerHeight;
    let viewToElAtTop = (
        element.getBoundingClientRect().top    
    );
    let viewToElAtB = (
        element.getBoundingClientRect().bottom
    );
    if(onBottom){
        return innerH > viewToElAtB
    }else{
        return exact ? (innerH/2) >= viewToElAtTop : innerH/1.05 > viewToElAtTop   
    }
        
};

export const getDatasFromCollection = (collections) => {
    return collections?.data.collection.products.edges
}

export function getSubTotal(cart){
        let total = 0;
        cart.cartDatas.map((product)=>{
            total += parseInt(
                product.data.priceRange.minVariantPrice.amount
            ) * product.count
        })
        return total;
    }