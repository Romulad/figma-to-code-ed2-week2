import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
    PagesHead,
    PagesFooter,
} from "@components"
import { boxClasses } from "@lib/classes";
import {
    fetchProductsByCollection 
} from "@api/actions";
import { 
    AppContext,
    CartContext
} from "@/context";
import cartIcon from "@assets/cart.svg";


/** Add common behavior needed on all pages
 * @param {React.FC} Page current page main section
*/
export default function PageWrapper(Page, pageDatas={}){
    return function Wrapper(props){
        const [dataIsLoading, setDataIsLoading] = useState(false);
        const [cartDatas, setCartDatas] = useState([]);

        const contextState = {
            dataState : {
                dataIsLoading: dataIsLoading,
                setDataIsLoading: setDataIsLoading
            }
        }

        const cartContextDatas = {
            cartDatas, 
            setCartDatas
        }

        useEffect(()=>{
            pageDatas.title && (document.title = pageDatas.title);

            // Main datas used in the app
            setDataIsLoading(true);
            fetchProductsByCollection()
            .then((resp)=>{
                setDataIsLoading(false);
            });
        }, [])

        return(
            <AppContext.Provider value={contextState}>
                <CartContext.Provider value={cartContextDatas}>
                    <div className="max-w-[1520px] mx-auto">
                        <PagesHead />
                        <main className={boxClasses}>
                            <Page {...props}/>
                        </main>
                        <PagesFooter />

                        <div className="fixed bottom-10 right-10">
                            <Link 
                            className="bg-slate-200 shadow-xl rounded-full 
                            px-3 py-2 flex gap-1 items-center relative">
                                <div>
                                    <img src={cartIcon} alt="View Cart" 
                                    className="size-6"
                                    />
                                </div>
                                <span>{cartDatas.length}</span>
                            </Link>
                        </div>
                    </div>
                    
                </CartContext.Provider>
            </AppContext.Provider>
        )
    }
}