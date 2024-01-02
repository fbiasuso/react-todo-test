import React, {useState,useEffect} from "react";

import { Form } from "../ui/form";
import { Button } from "../ui/button";
import { List, Title } from "../ui";

export const MainContainer = () =>{

    const [task, setTask] = useState("");
    const [tasksList, setTasksList] = useState("");
    const [isError,setIsError] = useState(false)
    const [msg, setMsg] = useState("...")
    const [isShow,setIsShow] = useState(false)
    const [timeoutId,setTimeoutId] = useState("")

    const textColor = isError ? "text-danger " : "text-success ";
    
    const handleSubmit = (e)=>{
        e.preventDefault();
        timeoutId && clearTimeout(timeoutId)
        
        setTimeoutId(setTimeout(() => {
            setIsShow(false);
          }, 5000));

        if(!task){
            setIsError(true);
            setIsShow(true);
            setMsg("Error: Debes escribir una tarea para agregarla.");
            return
        }
        
        if(tasksList &&  tasksList.find((object)=> object.task === task)){
            setIsError(true);
            setIsShow(true);
            setMsg("Error: Ya existe una tarea igual.");
            return
        }

        setIsError(false);
        setIsShow(true);
        setMsg("Éxito: La tarea se agregó correctamente.");

        const id = crypto.randomUUID();
        setTasksList([...tasksList, {id:id, task:task}])
        e.target.reset();
        setTask("");
        
    }

    const handleChange = (e)=>{
        e.preventDefault()
        setTask(e.target.value)

    }

    return (
            <main id="main" className="bg-dark vh-100 text-light d-flex flex-column align-items-center pt-5 overflow-auto">
                <Title name="TAREAS" type="h1" className="mb-5"/>
                <div className="w-50 mb-5">
                     <Form onSubmit={(e)=> handleSubmit(e)}>
                        <p id="msg" className={"text-center transition "+ (isShow ? "opacity-100 "+textColor : "opacity-0 "+textColor)}>{msg}</p>
                        <input className="form-control mb-4" type="text" id="task" name="task" placeholder="Nueva Tarea..." onChange={(e)=> handleChange(e)}/>
                       <Button name="Agregar" color="blue" className="w-50 mx-auto"/>
                     </Form>
                </div>
                <div>
                    <Title name="Lista de Tareas" type="h2" className="mb-3 mt-4" />
                    <List items={tasksList} setTasksList={setTasksList}/>
                </div>
            </main>
    )
}