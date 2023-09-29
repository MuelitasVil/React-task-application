import { TaskCard } from "./TaskCard";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export function TaskList()  {

    const { tasks } = useContext(TaskContext)
    
    if (tasks.length === 0) {
        return (
            <div> 
                <h1>No hay nada</h1>
            </div>
        );
    }

    return (
    <div className="grid grid-cols-4 gap-2">
       {
       tasks.map(
        (t) => ( <TaskCard key = {t.id} t = {t}/> ))
       }
    </div>
    );
}