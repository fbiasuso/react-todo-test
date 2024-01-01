import React, {useState} from "react";

import { Form } from "../ui/form";
import { Button } from "../ui/button";
import { List, Title } from "../ui";

export const MainContainer = () =>{

    const [task, setTask] = useState("");
    const [tasksList, setTasksList] = useState({
        id: "",
        task: ""
    });

    const handleSubmit = (e)=>{
        e.preventDefault();
        const id = crypto.randomUUID();
        setTasksList({...tasksList, id:id, task:task})
        e.target.reset();
        setTask("");
    }

    const handleChange = (e)=>{
        e.preventDefault()
        setTask(e.target.value)

    }

    return (
            <main className="bg-dark vh-100 text-light d-flex flex-column justify-content-center align-items-center">
                <Title name="TAREAS" type="h1" className="mb-5"/>
                <div className="w-50 mb-5">
                     <Form onSubmit={(e)=> handleSubmit(e)}>
                        <input className="form-control mb-4" type="text" name="task" placeholder="Nueva Tarea..." onChange={(e)=> handleChange(e)}/>
                       <Button name="Agregar" color="blue" className="w-50 mx-auto"/>
                     </Form>
                </div>
                <div>
                    <Title name="Lista de Tareas" type="h2" />
                    <List />
                </div>
            </main>
    )
}