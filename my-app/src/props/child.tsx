import React from "react"

interface ChildProps {
    color:string;
    onClick:()=>void
}
export const Child = ({color,onClick}:ChildProps)=>(
    <div>
        <div>{color}</div>
        <button onClick={onClick} ></button>
    </div>
)

export const ChildAsFC:React.FC<ChildProps>=({color,onClick})=>{
    return    <div>
        <div>{color}</div>
        <button onClick={onClick} ></button>
    </div>
}

