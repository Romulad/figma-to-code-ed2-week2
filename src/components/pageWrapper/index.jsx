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
            setCartDatas: updateCartDatas
        }

        useEffect(()=>{
            pageDatas.title && (document.title = pageDatas.title);
            // setTimeout(() => {
            //     window.scrollTo({top:0, behavior: "smooth"});
            // }, 100);

            // Main datas used in the app
            setDataIsLoading(true);
            fetchProductsByCollection()
            .then((resp)=>{
                setDataIsLoading(false);
            });
        }, [])

        useEffect(()=>{
            const cartDatas = localStorage.getItem('cart');
            if(cartDatas){
                setCartDatas(JSON.parse(cartDatas));
            }
        }, [])

        function updateCartDatas(cartDatas){
            // set and cache cart datas
            setCartDatas(cartDatas);
            localStorage.setItem("cart", JSON.stringify(cartDatas));
        }

        return(
            <AppContext.Provider value={contextState}>
                <CartContext.Provider value={cartContextDatas}>
                    <div className="max-w-[1536px] mx-auto">
                        <PagesHead />
                        <main className={boxClasses}>
                            <Page {...props}/>
                        </main>
                        <PagesFooter />

                        <div className="fixed bottom-5 right-5">
                            <Link to={"/cart"}
                            className="bg-slate-200 shadow-xl rounded-full 
                            p-3 flex gap-1 items-center relative">
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