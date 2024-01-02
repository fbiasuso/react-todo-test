import React, {useState} from "react";


export const List = ({items,className = "", setTasksList=null}) =>{

const style= `list-group list-group-flush bg-dark ${className}`

const handleDelete = (id)=>{
const neWitems = items.filter((object)=> object.id !==  id) 
setTasksList([...neWitems])
}
let deleteId;
    return (
            <ul className={style}>
              { items ? items.map((item)=>
                    <div key={item.id} className="d-flex flex-row justify-content-between mb-2">
                    <li  className="list-group-item text-light bg-dark border border-light border-top-0 border-end-0 border-start-0">
                        <input className="form-check-input me-1" type="checkbox" name="task" id={item.id} />
                        <label className="form-check-label stretched-link" htmlFor={item.id}>{item.task}</label>
                        
                    </li>
                    <button type="button" className="btn btn-outline-danger btn-sm ms-4" onClick={()=> handleDelete(item.id)}> Eliminar </button>
                    </div>
                    
                    ) : <p className="text-center mt-3">No hay tareas.</p>}
            </ul>
    )
}