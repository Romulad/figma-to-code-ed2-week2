import {
    PageWrapper,
    ProductImgBox,
} from "@components";
import menWithJacket from "@assets/menWithGrayJacket.svg";
import arrowRightTopIcon from "@assets/arrowRightTop.svg";

import HeroSection from "./heroSection";
import ProductTypeSection from "./productTypeSection";

const title = "Ballamas - Home";

export function Home(){
    return(
        <>
        <HeroSection />
        <div className="text-center mb-16">
            <p className="text-center font-chillax font-bold text-xl max-w-[900px] inline-block">
                Discover the latest trends in summer fashion. Shop now and refresh
                your wardrobe with our stylish sumer shirts.
            </p>
        </div>
        <ProductTypeSection />

        <div className="">
            <div className="text-center mb-4">
                <h2 className="uppercase font-semibold
                text-2xl sm:text-3xl font-chillax mb-2">
                   Our collection 
                </h2>
                <p className="text-gray-600 max-w-[500px] inline-block">
                    Our latest collection, where classic and contempory
                    styles converge in perfect harmony.
                </p>
            </div>

            <div className="flex gap-2 justify-center flex-wrap-reverse">
                <div className="relative">
                    <ProductImgBox
                    imgSrc={menWithJacket}
                    productTitle={"Gray jacket"}/>
                    <div className="flex justify-center 
                    absolute bottom-3 w-full px-3 
                    scale-100 hover:scale-105 transition-all duration-500">
                        <a href="#" 
                        className="uppercase bg-white px-4 py-2 rounded-full
                        flex gap-2 items-center text-sm">
                            <span>Learn more</span>
                            <img src={arrowRightTopIcon} alt="" />
                        </a>
                    </div>
                </div>

                <div className="rounded-[25px] home-page-lastsection-bg 
                h-[382px] max-w-[600px] w-full min-[310px]:w-[306px] 
                min-[644px]:grow bg-cover bg-center bg-no-repeat">

                </div>
            </div>
        </div>
        </>
    )
}

export default PageWrapper(
    Home, { title }
)