import React from "react";

export const Message = ({msg,isShow,textColor})=> {
    return  (
                <p 
                    id="msg"
                    className={"text-center transition " + (isShow ? "opacity-100 " + textColor 
                                 : "opacity-0 " + textColor)}
                >
                    {msg}
                </p>
            );
  }