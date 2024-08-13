

export default function LabelInput(props){
    const {name, label, containerClasses, ...otherAttrs} = props;

    return(
        <div className={containerClasses}>
            <label htmlFor={name} className="text-sm">
                {label}
            </label>
            <input type="text" 
            name={name} id={name} 
            className="rounded-full w-full p-3 mt-2
            outline outline-1 outline-gray-800 
            focus:outline-2 placeholder:text-gray-700
            placeholder:text-sm"
            {...otherAttrs}/>
        </div>
    )
}