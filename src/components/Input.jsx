import { useId } from "react";

function Input({type = "text", placeholder='', label}){
    const id = useId()
    return(
        <div className="flex flex-col gap-2">
            <label 
                className="font-medium" 
                htmlFor={id}
            >{label}</label>
            <input
                className="border border-gray-300 p-1 pl-2 pr-2 rounded-xl placeholder:text-gray-300"
                type={type} 
                placeholder={placeholder} 
                id={id}
            />
        </div>
    )
}

export default Input;