import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export function TaskForm() {

    const { createTask } = useContext( TaskContext )

    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")

    const handleSummit = (e) => {
        
        e.preventDefault()
        createTask({
            title,
            desc
        }) 
    }

    return(
        <div className="max-w-md mx-auto">
            <form onSubmit={handleSummit} className="bg-slate-900 p-10 mb-4">
            <h1 className = "text-2xl fond-bold text-white mb-3"> Crea tu tarea </h1>
            <input placeholder="Escribe tu tarea"
            onChange = {(e) => setTitle(e.target.value)} 
            className="bg-slate-300 p-3 w-full m-b2"/>
            <input placeholder="escribe tu descripcion"
            onChange = {(e) => setDesc(e.target.value)}
            className="bg-slate-300 p-3 w-full m-b2"/>
            <button
            className="bg-indigo-500 p-3 text-white">Boton</button>
            </form>
        </div>
            
    );
}