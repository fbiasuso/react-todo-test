import React from "react";
import { Button } from "../ui/button";
import { ListItem } from "../ui/listItem";

export const List = ({ items, setTasksList, className = "" }) => {

    const style = `list-group list-group-flush bg-dark ${className}`

    const handleCheckbox = (id,checked) =>{
        setTasksList(items.map(task => task.id === id ? ({...task, checked}): task))
    } 
    
    const handleDelete = (id) => {
        const neWitems = items.filter((object) => object.id !== id)
        setTasksList([...neWitems])
    }
    return (
        <ul className={style}>
            {items.length !== 0 ? items.map((item) =>
                <div key={crypto.randomUUID()} className="d-flex flex-row justify-content-between mb-2">
                    <ListItem item={item} handleCheckbox={handleCheckbox} />
                    <Button name="Eliminar" variant="outline" color="red" onClick={() => handleDelete(item.id)} className="btn-sm ms-4" />
                </div>

            ) : <p className="text-center mt-3">No hay tareas.</p>}
        </ul>
    )
}