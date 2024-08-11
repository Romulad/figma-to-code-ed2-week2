import React, { useEffect, useState } from "react";

import {
    PagesHead,
    PagesFooter,
} from "@components"
import { boxClasses } from "@lib/classes";
import { 
    fetchProductsByCollection 
} from "@api/actions";
import { 
    AppContext
} from "@/context";

/** Add common behavior needed on all pages
 * @param {React.FC} Page current page main section
*/
export default function PageWrapper(Page, pageDatas={}){
    return function Wrapper(props){
        const [dataIsLoading, setDataIsLoading] = useState(false);

        const contextState = {
            dataState : {
                dataIsLoading: dataIsLoading,
                setDataIsLoading: setDataIsLoading
            }
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
                <div className="max-w-[1520px] mx-auto">
                    <PagesHead />
                    <main className={boxClasses}>
                        <Page {...props}/>
                    </main>
                    <PagesFooter />
                </div>
            </AppContext.Provider>
        )
    }
}