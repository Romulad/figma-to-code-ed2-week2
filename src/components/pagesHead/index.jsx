import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { boxClasses } from "@lib/classes";
import accountIconSrc from "@assets/accountIcon.svg";
import searchIconSrc from "@assets/searchIcon.svg";
import hamburgerSrc from "@assets/hamburger.svg";
import closeMenuSrc from "@assets/closeMenu.svg";
import cartSrc from "@assets/cart.svg";

import {
  Logo
} from "@components";
import { CartContext } from "@/context";

export default function PagesHead(){
  const [navMenuIsOpen, setNavMenuIsOpen] = useState(false);
  const cart = useContext(CartContext)
  
  const leftNavLinks = [
    {name:'Men', path:"/collections/men"}, 
    {name:'Women', path:"/collections/women"}, 
    {name:'Unisex', path:"/collections/unisex"}, 
    {name:'Collections', path:"/collections"}
  ].map((navData, index)=>(
    <li className="group" key={index}>
      <Link to={navData.path} className="group-hover:underline">
        {navData.name}
      </Link>
    </li>
  ))

  const rightNavLinks = [
    {name:'Shop', path:"/#shop-items"},
    {name:'About Us', path:""}, 
    {name:'Account', path:"", iconSrc: accountIconSrc}, 
  ].map((navData, index)=>(
    <li className="group flex gap-2 items-center" key={index}>
      {navData.iconSrc && <img src={navData.iconSrc} alt={navData.name} />}
      <Link to={navData.path} className="group-hover:underline">
        {navData.name}
      </Link>
    </li>
  ))

  return(
      <div className="sticky top-0 bg-white z-[900] w-full pb-1">
      <div className="bg-black py-4 px-2 w-full text-center text-white ">
        <p className="text-sm">
          Sign up and get 20% off all new arrivals collections
        </p>
      </div>

      <div className={boxClasses}>
        <nav className=" flex justify-between items-center py-5 border-b mb-8">

            {/* left side nav links on large screens */}
            <ul className="hidden lg:flex gap-4 items-center">
              {leftNavLinks}
            </ul>

            {/* hamburger btn to open the nav menu on small screens */}
            <button className="lg:hidden" onClick={()=>{setNavMenuIsOpen(!navMenuIsOpen)}}>
              {navMenuIsOpen ? 
              <img src={closeMenuSrc} alt='Close menu' /> :
              <img src={hamburgerSrc} alt='Open menu' /> }
            </button>

            {/* logo */}
            <Logo />

            {/* right side nav links on large screens*/}
            <ul className="hidden lg:flex gap-4 items-center">
              {rightNavLinks}
              <Link to={"/cart"}>
                Cart({cart.cartDatas.length})
              </Link>
              <button>
                <img src={searchIconSrc} alt="Search" />
              </button>
            </ul>

            {/* Cart and search icon on small screens */}
            <ul className="flex lg:hidden gap-4 items-center">
                <Link className="flex gap-1 items-center"
                to={"/cart"}>
                  <img src={cartSrc} alt="Cart" />
                  {cart.cartDatas.length}
                </Link>

                <button>
                  <img src={searchIconSrc} alt="Search" />
                </button>
            </ul>

            {/* nav menu on small screens */}
            <ul className={`z-[100] bg-white lg:hidden w-full overflow-auto absolute
            top-36 left-0 flex flex-col gap-5 items-center transition-all duration-500
            ${navMenuIsOpen ? "h-[100vh] px-2 py-6" : "h-0 px-0 py-0"} rounded-bl-xl rounded-br-xl 
            shadow-xl`}
            >
              {leftNavLinks}
              {rightNavLinks}

              <li className="group flex gap-2 items-center">
                <Link to="" className="group-hover:underline">
                  FAQ
                </Link>
              </li>

              <li className="group flex gap-2 items-center">
                <Link to="" className="group-hover:underline">
                  Contact Us
                </Link>
              </li>
            </ul>
        </nav>
      </div>
      </div>
    )
}