import { useEffect, useRef } from "react";

import {
    PageWrapper,
} from "@components";
import successIcon from "@assets/successIcon.svg";

const title = "Ballamas - Payment"

export function Payment(){
    const successRef = useRef(null);

    useEffect(()=>{
        setTimeout(() => {
            successRef.current.classList.remove('scale-0')
            successRef.current.classList.add('scale-100')
        }, 400);
    }, [])
    
    return(
        <div className="h-[400px] flex items-center justify-center text-center px-3">
            <div>
                <div className="flex w-full justify-center mb-4 
                scale-0 trasition-all duration-700" ref={successRef}>
                    <img src={successIcon} alt="Check circle" />
                </div>
                <h1 className="text-xl sm:text-2xl font-semibold mb-1">
                    Thanks for your order !
                </h1>
                <p className="text-sm text-gray-600">
                    The order confirmation has been sent to youremail@example.com
                </p>
            </div>
        </div>
    )
}

export default PageWrapper(
    Payment, { title }
)