import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import cardIcon from "@assets/creditCardIcon.svg";
import banckIcon from "@assets/bankIcon.svg";
import securityIcon from "@assets/securityIcon.svg";
import arrowRight from "@assets/arrowRight.svg";
import { CartContext } from "@/context";
import { getSubTotal } from "@lib/utils";
import {
    PageWrapper,
    OrderSummuryInfo,
    LabelInput,
} from "@components";

const title = "Ballamas - Checkout"

export function Checkout(){
    const navigate = useNavigate();
    const cart = useContext(CartContext);

    function getProductTotal(product){
        return (
            product.count * 
            parseInt(product.data.priceRange.minVariantPrice.amount)
        ).toFixed(2)
    }

    function onMakePayementBtnClick(ev){
        ev.preventDefault();
        cart.setCartDatas([]);
        navigate("/payment")
    }

    const orderCol = (
        <div className="w-full lg:w-[55%] lg:max-w-[600px]">
            <div>
                <h2 className="text-md font-semibold">
                    Your Order
                </h2>
                <p className="text-sm text-gray-600 mt-2">
                    By placing your order, you agree to Ballamas
                    <Link to="" className="font-medium underline text-gray-900 mx-1"> 
                        Privacy
                    </Link> 
                    and
                    <Link to={""} className="font-medium underline text-gray-900 mx-1"> 
                        Policy.
                    </Link> 
                </p>
            </div>

            <div className="mt-5 flex flex-col gap-4">
            {cart.cartDatas
            ?.map((product)=>(
                <div className="flex justify-between items-center"
                key={product.data.id}>
                <div className="flex items-center gap-2 " >
                    <div className="size-[100px] rounded-xl">
                        <img src={product.data.featuredImage.url} 
                        alt={product.data.title} 
                        className="rounded-xl"/>
                    </div>

                    <div className="flex flex-col gap-1">
                        <h4 className="font-semibold ">
                            {product.data.title.length > 20 ?
                            product.data.title.slice(0, 20) + "...":
                            product.data.title}
                        </h4>
                        <span className="text-gray-600 text-sm">
                            Variant - Large
                        </span>
                    </div>
                </div>

                <div>
                    <span className="font-semibold">
                        ${getProductTotal(product)}
                    </span>
                </div>
                </div>
            ))}
            </div>

            <div className="mt-8">
                <form action="" onSubmit={(ev)=>{ev.preventDefault()}}
                className="flex gap-3 items-end max-w-[450px]">
                    <div className="grow w-auto">
                        <LabelInput 
                        name="discount"
                        label="Discount Code"
                        placeholder="Add discount code"
                        required={true}/>
                    </div>
                    <button type="submit" 
                    className="text-white bg-black px-5 py-3 rounded-full">
                        Apply
                    </button>
                </form>

                <div className="mt-3 text-sm">
                    <p>
                        <span className="font-medium me-1">
                            New customer?
                            <Link to={""} className="underline"> Signup</Link>
                        </span>
                        <span className="text-gray-600">to get better offer</span>
                    </p>
                </div>
            </div>

            <OrderSummuryInfo 
            subTotal={getSubTotal(cart).toFixed(2)}/>

            <div className="mt-6">
                <h4 className="font-semibold mb-3">
                    Shipping method
                </h4>
                <div className="flex flex-col gap-3">
                    <div className="flex border-2 rounded-xl p-4 
                    justify-between items-center">
                      

                        <input type="radio" name="" id="" 
                        className="bg-black size-4"/>

                        <div>
                            <span>
                                $0
                            </span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )

    const paymentCol = (
        <form className="w-full lg:w-[41%]"
        onSubmit={(ev)=>{ev.preventDefault();}}>
            <div>
                <h2 className="text-md font-semibold">
                    Payment details
                </h2>
                <p className="text-gray-600 text-sm mt-2">
                    Complete your purchase by providing your payement details
                </p>
            </div>

            <div className="mt-5">
                <h4 className="text-md font-semibold">
                    Shipping address
                </h4>

                <div action="" className="flex flex-col gap-3 mt-4">
                    {[
                        [{name: "first_name", label: "First name", placeholder: "Enter your first name"}, 
                        {name: "last_name", label: "Last name", placeholder: "Enter your last name"}],

                        [{name: "email", label: "Email Address", placeholder: "Enter your email address"}, 
                        {name: "phone", label: "Phone number", placeholder: "Enter your phone number"}],

                        [{name: "address", label: "Address", placeholder: "Enter your address"}, 
                        {name: "city", label: "City", placeholder: "City"}],

                        [{name: "region", label: "Region", placeholder: "Select region"}, 
                        {name: "postal_code", label: "Postal code", placeholder: "Enter your postal code"}],
                    ]
                    .map((fields, index)=>(
                        <div className="flex flex-wrap gap-3 *:w-full *:min-[460px]:w-[48%] " 
                        key={index}>
                            {fields
                            .map((field)=>(
                                <div key={field.name}>
                                <LabelInput 
                                name={field.name}
                                label={field.label}
                                placeholder={field.placeholder}
                                required={true}
                                />
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-5">
                <h4 className="text-md font-semibold">
                    Select payment method
                </h4>

                <div className="flex flex-wrap gap-3 *:w-full *:min-[460px]:w-[48%] mt-3">
                    <button className="border border-black 
                    focus:border-2 p-4 rounded-xl flex flex-col gap-3
                    items-start">
                        <div>
                            <img src={cardIcon} alt="Card" />
                        </div>
                        <div className="text-sm">
                            <span>Debit / Credit Card</span>
                        </div>
                    </button>

                    <button className="border border-black 
                    focus:border-2 p-4 rounded-xl flex flex-col gap-3
                    items-start">
                        <div>
                            <img src={banckIcon} alt="Banck" />
                        </div>
                        <div className="text-sm">
                            <span>Virtual account</span>
                        </div>
                    </button>
                </div>

                <div className=" mt-4 flex flex-col gap-2">
                    <div className="w-full relative">
                        <input type="text" 
                        name="card_number"
                        className="rounded-full w-full p-3 mt-2
                        outline outline-1 outline-gray-800 
                        focus:outline-2 placeholder:text-gray-700
                        placeholder:text-sm"
                        placeholder="Card number"
                        />
                        <div className="absolute top-[21.5px] right-4">
                            <img src={securityIcon} alt="Security" 
                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-3 *:w-full *:min-[460px]:w-[48%]">
                        <LabelInput 
                        name="expiration_date"
                        placeholder="Expiration date (MM/YY)"/>
                        <LabelInput 
                        name="security_code"
                        placeholder="Security code"/>
                    </div>
                </div>
            </div>

            <div className="text-sm mt-2">
                <input type="checkbox" name="detail" id="detail" 
                className="size-4 me-1"/>
                <label htmlFor="detail">
                    Use shipping address as billing address
                </label>
            </div>

            <div className="mt-6 flex justify-center 
            ">
                <button className="flex items-center justify-center bg-black 
                text-white gap-2 rounded-full py-3 w-full max-w-[400px] disabled:opacity-70"
                disabled={cart.cartDatas.length <= 0}
                type="submit" onClick={onMakePayementBtnClick}>
                    <span>
                        Pay ${getSubTotal(cart).toFixed(2)}
                    </span>
                    <div>
                        <img src={arrowRight} 
                        alt="Arrow right" />
                    </div>
                </button>
            </div>
        </form>
    )
    
    return(
        <>
        <h1 className="font-chillax font-semibold 
        sm:text-2xl text-xl mb-8">
            Checkout
        </h1>
        <div className="flex gap-y-16 gap-x-5 items-start justify-between flex-wrap lg:flex-nowrap">
            {orderCol}
            {paymentCol}
        </div>
        </>
    )
}

export default PageWrapper(
    Checkout, { title }
)