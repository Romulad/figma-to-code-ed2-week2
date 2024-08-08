import logoSrc from "@assets/logo.svg";

export default function Logo({className}){
    return(
        <img src={logoSrc} alt="Ballamas" 
        className={className ? className : "max-[350px]:w-24"}/>
    )
}