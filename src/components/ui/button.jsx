import React from "react";

export const Button = ({name,variant,color,type="button",className = "", onClick=()=>{}}) =>{
const colors = {
    blue: "primary",
    red: "danger",
    gray: "secondary",
    green: "success",
    dark: "dark",
    white: "light"
};

const variants = {
  normal: "btn-",
  outline:"btn-outline-"
}


const style= `btn ${variants[variant]}${colors[color]} ${className}`

    return (
            <button className={style} type={type} onClick={onClick}>
              {name}
            </button>
    )
}