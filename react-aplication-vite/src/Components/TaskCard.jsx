import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export function TaskCard( {t} ) {
    
    const {deleteTask} = useContext(TaskContext)

    return (
        <div className="bg-gray-800 text-white p-4 rounded-md">
            <h1 className="text-xl font-bold capitalize">{t.title}</h1>
            <p> {t.id } </p>
            <p className="text-gray-500 text-sm"> {t.description }</p>            
            <button className = "bg-red-500 px-2 py-1 rounded-md mt-4 hover:bg-red-400" onClick={() => deleteTask(t)}> Eliminar </button>
        </div>
    );
}