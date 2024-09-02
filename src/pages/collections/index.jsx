import { Link } from "react-router-dom";

import {
    PageWrapper,
    AboutPage
} from "@components";
import { collections } from "@api/constant";


const title = "Ballamas - Collections";


export function CollectionsPage(){
    return(
       <>
       <AboutPage name="Collections"/>

       <div className="flex items-center gap-4 flex-wrap">
            {collections
            ?.map((collection, index)=>(
                <Link to={collection.title.toLowerCase()}
                key={index} className="md:w-r1/2 h-[450px] mx-auto relative">
                    <div className="w-full h-full rounded-xl ">
                        <img src={collection.imgUrl} alt={collection.title}
                        className="w-full h-full rounded-xl scale-100 hover:scale-105 duration-500"/>
                    </div>
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white rounded-full px-2 ">
                        <span className="font-medium font-chillax text-xl">
                            {collection.title}
                        </span>
                    </div>
                </Link>
            ))}
       </div>
       </>
    )
}

export default PageWrapper(CollectionsPage, { title })