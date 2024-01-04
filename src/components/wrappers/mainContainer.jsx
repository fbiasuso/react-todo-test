import React from "react";
import { Title } from "../ui";
import { Form, List } from "./";

export const MainContainer = () =>{
    const storage = JSON.parse(localStorage.getItem("tasksList"));
    const [tasksList, setTasksList] = React.useState(storage?storage:[]);
    const [isError,setIsError] = React.useState(false)
    const [msg, setMsg] = React.useState("...")
    const [isShow,setIsShow] = React.useState(false)
    const textColor = isError ? "text-danger " : "text-success ";

    React.useEffect(()=>{
        localStorage.setItem("tasksList", JSON.stringify(tasksList));
    },[tasksList])
   
    return (
            <main id="main" className="bg-dark vh-100 text-light d-flex flex-column align-items-center pt-5 overflow-auto">
                <Title 
                    name="TAREAS" 
                    type="h1" 
                    className="mb-5"
                />
                <div className="w-50 mb-5">
                     <Form  
                        msg={msg}
                        setMsg={setMsg}
                        isShow={isShow}
                        setIsError={setIsError}
                        setIsShow={setIsShow}
                        textColor={textColor}
                        setTasksList={setTasksList}
                        tasksList={tasksList} 
                    />
                </div>
                <div>
                    <Title 
                        name="Lista de Tareas" 
                        type="h2" 
                        className="mb-3 mt-4"
                    />
                    <List 
                        items={tasksList}
                        setTasksList={setTasksList}
                    />
                </div>
            </main>
    )
}