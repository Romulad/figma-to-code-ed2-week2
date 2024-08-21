
import { useEffect, useRef } from "react";

import arrowRightTopScr from "@assets/arrowRightTop.svg";
import { 
    writeText 
} from "@lib/utils";
import { Link } from "react-router-dom";

export default function HeroSection(){
    const whatWeDoRef = useRef(null);
    const actionBtnRef = useRef(null);

    useEffect(()=>{
        setTimeout(() => {
            writeText(whatWeDoRef, 100);
        }, 1200);

        setTimeout(() => {
            actionBtnRef.current.classList.remove('animate-bounce')
        }, 2495);
    }, [])

    return(
        <>
        <div className="hero-section-bg h-[400px] bg-no-repeat bg-center 
        bg-cover rounded-3xl bg-black flex flex-col gap-5 text-center items-center text-white 
        justify-center px-3 sm:px-5 mb-16 max-[279px]:overflow-auto no-scrollbar">
            
            <div className="flex gap-4 items-center text-sm">
                <span className="h-[1px] w-20 bg-slate-50 opacity-50"></span>
                <span className="text-white hidden" ref={whatWeDoRef}>
                    We bring new fashion to the world
                </span>
                <span className="h-[1px] w-20 bg-slate-50 opacity-50"></span>
            </div>

            <h1 className="uppercase text-white font-chillax font-bold 
            text-2xl min-[380px]:text-3xl sm:text-4xl lg:text-5xl">
                Discover the lastest fashion trends here
            </h1>

            <p className="text-sm text-white max-w-[600px]">
                Discover a world of fashion with our meticulously curated outfits.
                Shop now to update your wardrobe with chic and stylish outfits.
            </p>

            <a ref={actionBtnRef} href="#shop-items"
            className="flex animate-bounce scale-100 hover:scale-105 transition-all duration-700" >
                <div className="text-black bg-white px-6 py-3 rounded-full">
                    Start shopping
                </div>
                <div className="bg-white p-3 rounded-full">
                    <img src={arrowRightTopScr} alt={"Start shopping"} />
                </div>
            </a>
        </div>
        </>
    )
}