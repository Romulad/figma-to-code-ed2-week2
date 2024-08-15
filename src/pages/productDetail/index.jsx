import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { CartContext } from "@/context";
import {
    PageWrapper,
} from "@components";

const title = "Ballamas - Detail"

export function ProductDeatil(){
    const cart = useContext(CartContext)
    const navigate = useNavigate();
    
    return(
        <div className="flex gap-10 items-start flex-wrap">

        </div>
    )
}

export default PageWrapper(
    ProductDeatil, { title }
)