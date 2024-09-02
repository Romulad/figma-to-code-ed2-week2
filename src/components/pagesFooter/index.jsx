import { Link } from "react-router-dom";

import { boxClasses } from "@lib/classes";
import {
    Logo
} from "@components";


export default function PagesFooter(){
    const products = [
        {
            name: "Jacket",
            path:""
        },
        {
            name: "T-shirt",
            path:""
        },
        {
            name: "Shoes",
            path:""
        },
        {
            name: "Sunglasses",
            path:""
        }
    ]

    const categories = [
        {
            name: "Men",
            path:"/collections/men"
        },
        {
            name: "Women",
            path:"/collections/women"
        },
        {
            name: "Unisex",
            path:"/collections/unisex"
        },
        {
            name: "Gift",
            path:""
        },
        {
            name: "New arrival",
            path:""
        }
    ]

    const socials = [
        {
            name: "Instagram",
            path:"https://instagram.com"
        },
        {
            name: "Facebook",
            path:"https://facebook.com"
        },
        {
            name: "Youtube",
            path:"https://youtube.com"
        },
        {
            name: "X",
            path:"https://x.com"
        },
    ]

    const FooterLinkContainer = ({name, linkDatas, remote}) => {
        return(
            <div className="">
                <h3 className="mb-3 capitalize">
                    {name}
                </h3>
                <ul className="flex flex-col gap-2">
                    {linkDatas
                    .map((data, index)=>(
                    <li className="text-white opacity-60 text-sm group" 
                    key={index.toString() + data.name.toString()}>
                        <Link to={data.path} className="group-hover:underline" 
                        target={`${remote ? "_blank" : ""}`}>
                            {data.name}
                        </Link>
                    </li>
                    ))}
                </ul>
            </div>
        )
    }

    return(
        <footer className={"bg-black py-10 mt-16"}>
            <div className={boxClasses}>
                <div className="flex justify-between items-start mb-10 gap-6 flex-wrap" >
                    
                    <div>
                        <div className="mb-5">
                            <Logo 
                            className='text-white'
                            useWhite/>
                        </div>

                        <p className="text-white opacity-70 max-w-[550px] mb-4">
                            Subscribe to our newsletter for upcoming products
                            and best discount for all items
                        </p>

                        <form className="flex max-[350px]:flex-wrap gap-3 w-full">
                            <input type="email" placeholder="Your email" 
                            className="border border-white p-3 rounded-full bg-transparent w-full
                            placeholder:text-white placeholder:text-sm placeholder:opacity-80 focus:outline 
                            focus:outline-2 text-white" required/>
                            <button className="bg-white text-black py-3 rounded-full px-8
                            hover:opacity-90" type="submit" onClick={(ev)=>{ev.preventDefault()}}>
                                Subscribe
                            </button>
                        </form>
                    </div>

                    <div className="flex text-white font-medium 
                    lg:gap-14 gap-8 flex-wrap">
                        {/* let's keep things simple */}

                        <FooterLinkContainer 
                        name={"Product"}
                        linkDatas={products}/>

                        <FooterLinkContainer 
                        name={"Categories"}
                        linkDatas={categories}/>
                        
                        <FooterLinkContainer
                        remote
                        name={"Our social media"}
                        linkDatas={socials}/>
                    </div>
                </div>

                <div className="text-center text-sm text-white opacity-60 font-medium">
                    <p>
                       © BALLAMAS 2024 by 
                        <Link to="https://www.linkedin.com/in/romuald-oluwatobi/en" 
                        className="underline"  target={"_blank"}> oluwatobi</Link>
                    </p>
                </div>  
            </div>
        </footer>
    )
}