

export default function ProductImgBox({imgSrc, productTitle}){
    return(
        <div className="h-[382px] max-w-[306px] bg-slate-200 animate-pulse">
            <img
            src={imgSrc} alt={productTitle}
            className="rounded-[25px] transition-all duration-500 
            scale-100 group-hover:scale-105 h-full w-full object-cover"
            onLoad={(ev)=>{
                ev.target.parentElement.classList.remove(
                    "bg-slate-200", "animate-pulse"
                )
            }}/>
        </div>
    )
}