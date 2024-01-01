import React from "react";

export const Button = ({name,color,className = "", onClick=null}) =>{
const colors = {
    blue: "primary",
    red: "danger",
    gray: "secondary",
    green: "success",
    dark: "dark",
    white: "light"
};


const style= `btn btn-${colors[color]} ${className}`

    return (
            <button className={style} onClick={onClick}>
              {name}
            </button>
    )
}