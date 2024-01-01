import React from "react";

export const List = ({name,color,className = "", onClick=null}) =>{
const colors = {
    blue: "primary",
    red: "danger",
    gray: "secondary",
    green: "success",
    dark: "dark",
    white: "light"
};



const style= `list-group list-group-flush bg-dark ${className}`

    return (
            <ul className={style}>
                <div className="d-flex flex-row justify-content-between mb-2">
                <li  className="list-group-item text-light bg-dark border border-light border-top-0 border-end-0 border-start-0">
                    <input className="form-check-input me-1" type="checkbox" name="task" id="task" />
                    <label className="form-check-label stretched-link" htmlFor="task">First checkbox</label>
                    
                </li>
                <button type="button" className="btn btn-outline-danger btn-sm ms-4"> Eliminar </button>
                </div>
                <div className="d-flex flex-row justify-content-between mb-2">
                <li className="list-group-item text-light bg-dark border border-light border-top-0 border-end-0 border-start-0">
                    <input className="form-check-input me-1" type="checkbox" name="task2" id="task2" />
                    <label className="form-check-label stretched-link" htmlFor="task2">Second checkbox</label>
                </li>
                <button type="button" className="btn btn-outline-danger btn-sm ms-4"> Eliminar </button>
                </div>
                <div className="d-flex flex-row justify-content-between mb-2">
                <li className="list-group-item text-light bg-dark border border-light border-top-0 border-end-0 border-start-0">
                    <input className="form-check-input me-1" type="checkbox" name="task3" id="task3" />
                    <label className="form-check-label stretched-link" htmlFor="task3">Tirdth checkbox</label>
                </li>
                <button type="button" className="btn btn-outline-danger btn-sm ms-4 py-(-1)"> Eliminar </button>
                </div>
                    
            </ul>
    )
}