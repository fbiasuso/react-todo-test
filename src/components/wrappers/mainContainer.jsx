import React from "react";
import { Form } from "../ui/form";
import { Button } from "../ui/button";
import { List, Title } from "../ui";

export const MainContainer = () =>{

    const handleSubmit = (e)=>{
        e.preventDefault()

    }

    const handleChange = (e)=>{
        e.preventDefault()

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