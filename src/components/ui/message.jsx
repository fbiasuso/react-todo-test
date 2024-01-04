import React from "react";

export const Message = ({msg,isShow,textColor})=> {
  
    const opacity =  isShow ? "opacity-100" : "opacity-0";
    const style = `text-center transition ${opacity} ${textColor}`;

    return  (
                <p id="msg" className={style}>
                    {msg}
                </p>
            );
  }