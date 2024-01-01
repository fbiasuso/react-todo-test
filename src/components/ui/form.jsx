import React from "react";

export const Form = ({children,className = "", onSubmit=""}) =>{



const style= `d-flex flex-column justify-content-center w-75 mx-auto ${className}`

    return (
            <form className={style} onSubmit={onSubmit}>
              {children}
            </form>
    )
}