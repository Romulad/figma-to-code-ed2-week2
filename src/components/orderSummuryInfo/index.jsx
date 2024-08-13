


export default function OrderSummuryInfo({subTotal}){
    return(
        <>
         <div className="pb-3 border-b text-gray-600 mt-6 flex flex-col gap-2">
            <div className="flex justify-between">
                <span>
                    Subtotal
                </span>
                <span>
                    ${subTotal}
                </span>
            </div>
                    
            <div className="flex justify-between">
                <span>
                    Discount
                </span>
                <span>
                    $0
                </span>
            </div>
        </div>

        <div className="mt-4 flex justify-between items-center">
            <span className="font-semibold">Order total</span>
            <span className="font-bold text-xl sm:text-2xl">
                ${subTotal}
            </span>
        </div>
        </>
    )
}