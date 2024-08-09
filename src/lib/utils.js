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