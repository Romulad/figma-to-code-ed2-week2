import logoSrc from "@assets/logo.svg";
import logoWhiteSrc from "@assets/logoWhite.svg";

export default function Logo({className, useWhite}){
    return(
        <img src={useWhite ? logoWhiteSrc : logoSrc} alt="Ballamas"
        className={className ? className : "max-[320px]:w-32 max-[280px]:w-24"}/>
    )
}