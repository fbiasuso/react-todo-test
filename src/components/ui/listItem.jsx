import React from "react";

export const ListItem = ({item,handleCheckbox}) => {

    const labelStyle =  `form-check-label stretched-link ${item.checked && "text-primary"}`

    return (
            <li className="list-group-item text-light bg-dark border border-light border-top-0 border-end-0 border-start-0">
                <input 
                    id={item.id} 
                    className="form-check-input me-1" 
                    type="checkbox" 
                    name="task"
                    onChange={(e)=>handleCheckbox(item.id,e.target.checked)}
                    checked={item.checked} 
                />
                <label 
                    className={labelStyle} 
                    htmlFor={item.id}
                >
                    {item.task}
                </label>
            </li>
            );
}