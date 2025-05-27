import { useId } from "react"

function Checkbox({label}){
    const id = useId()
    return (
        <div className="flex gap-2 items-center">
            <input type="checkbox" id={id}/>
            <label htmlFor={id} className="font-medium text-sm">{label}</label>
        </div>
    )
}

export default Checkbox