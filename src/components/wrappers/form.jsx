import React from "react";
import { Button, Message } from "../ui/";

export const Form = ({ msg, setMsg, isShow, setIsShow, setIsError, textColor, setTasksList, tasksList, className = "", }) => {
  const [task, setTask] = React.useState("");
  const [timeoutId, setTimeoutId] = React.useState("")

  const handleChange = (e) => {
    e.preventDefault()
    setTask(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    timeoutId && clearTimeout(timeoutId)

    setTimeoutId(setTimeout(() => {
      setIsShow(false);
    }, 3000));

    if (!task) {
      setIsError(true);
      setIsShow(true);
      setMsg("Error: Debes escribir una tarea para agregarla.");
      return
    }

    if (tasksList && tasksList.find((object) => object.task === task)) {
      setIsError(true);
      setIsShow(true);
      setMsg("Error: Ya existe una tarea igual.");
      return
    }

    setIsError(false);
    setIsShow(true);
    setMsg("Éxito: La tarea se agregó correctamente.");

    const id = crypto.randomUUID();
    setTasksList([...tasksList, {id:id,task:task,checked:false}])
    e.target.reset();
    setTask("");
  }

 /*  const handleOpacity= ()=>{
    setTimeout(() => {
       
      setOpacity("opacity-100")
            
          }, 1000)
  } */

  const style = `d-flex flex-column justify-content-center w-75 mx-auto ${className}`

  return (
    <form className={style} onSubmit={(e) => handleSubmit(e)}>
      <Message msg={msg} isShow={isShow} textColor={textColor}></Message>
      <input className="form-control mb-4" type="text" id="task" name="task" placeholder="Nueva Tarea..." onChange={(e) => handleChange(e)} />
      <Button name="Agregar" type="submit" variant="normal" color="blue" className="w-50 mx-auto" />
    </form>
  );
}