import { useState } from "react";

import { boxClasses } from "@lib/classes";
import accountIconSrc from "@assets/accountIcon.svg";
import searchIconSrc from "@assets/searchIcon.svg";
import hamburgerSrc from "@assets/hamburger.svg";
import closeMenuSrc from "@assets/closeMenu.svg";
import cartSrc from "@assets/cart.svg";

import {
  Logo
} from "@components";

export default function PagesHead(){
  const [navMenuIsOpen, setNavMenuIsOpen] = useState(false);
  
  const leftNavLinks = [
    {name:'Men', path:"/men"}, 
    {name:'Women', path:"/women"}, 
    {name:'Kids', path:"/kids"}, 
    {name:'Collection', path:"/collection"}
  ].map((navData, index)=>(
    <li className="group" key={index}>
      <a href={navData.path} className="group-hover:underline">
        {navData.name}
      </a>
    </li>
  ))

  const rightNavLinks = [
    {name:'Shop', path:"/shop"}, 
    {name:'About Us', path:"/about-us"}, 
    {name:'Account', path:"/account", iconSrc: accountIconSrc}, 
  ].map((navData, index)=>(
    <li className="group flex gap-2 items-center" key={index}>
      {navData.iconSrc && <img src={navData.iconSrc} alt={navData.name} />}
      <a href={navData.path} className="group-hover:underline">
        {navData.name}
      </a>
    </li>
  ))

  return(
      <>
      <div className="bg-black py-4 px-2 w-full text-center text-white ">
        <p className="text-sm">
          Sign up and get 20% off all new arrivals collections
        </p>
      </div>

      <div className={boxClasses}>
        <nav className="relative flex justify-between items-center py-5 border-b mb-8">

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
            <a href="/">
              <Logo />
            </a>

            {/* right side nav links on large screens*/}
            <ul className="hidden lg:flex gap-4 items-center">
              {rightNavLinks}
              <button>
                Cart(0)
              </button>
              <button>
                <img src={searchIconSrc} alt="Search" />
              </button>
            </ul>

            {/* Cart and search icon on small screens */}
            <ul className="flex lg:hidden gap-4 items-center">
                <button>
                  <img src={cartSrc} alt="Cart" />
                </button>

                <button>
                  <img src={searchIconSrc} alt="Search" />
                </button>
            </ul>

            {/* nav menu on small screens */}
            <ul className={`bg-white lg:hidden w-full overflow-auto absolute
            top-20 flex flex-col gap-5 items-center transition-all duration-[650ms]
            ${navMenuIsOpen ? "h-[500px] px-2 py-6" : "h-0 px-0 py-0"}`}
            >
              {leftNavLinks}
              {rightNavLinks}

              <li className="group flex gap-2 items-center">
                <a href="/faq" className="group-hover:underline">
                  FAQ
                </a>
              </li>

              <li className="group flex gap-2 items-center">
                <a href="/contact-us" className="group-hover:underline">
                  Contact Us
                </a>
              </li>
            </ul>
        </nav>
      </div>
      </>
    )
}