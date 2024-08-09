import React, { useEffect } from "react";

import {
    PagesHead,
    PagesFooter,
} from "@components"
import { boxClasses } from "@lib/classes";

/** Add common behavior needed on all pages
 * @param {React.FC} Page current page main section
*/
export default function PageWrapper(Page, pageDatas={}){
    return function Wrapper(props){

        useEffect(()=>{
            pageDatas.title && (document.title = pageDatas.title)
        }, [])

        return(
            <div className="max-w-[1520px] mx-auto">
                <PagesHead />
                <main className={boxClasses}>
                    <Page {...props}/>
                </main>
                <PagesFooter />
            </div>
        )
    }
}