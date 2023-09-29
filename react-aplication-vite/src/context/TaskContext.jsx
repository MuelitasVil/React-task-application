import { createContext, useState, useEffect } from "react";
import { task } from "../Information/Task";

export const TaskContext = createContext()

export function TaskContextProvider(props) {
    
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        setTasks(task)
    }, [])
  
    
    function createTask(task) {
    
        const newTask = {
          title : task.title,
          id : tasks.length,
          description : task.desc
        }
        
        setTasks([...tasks, newTask ])
      }
    
      function deleteTask(Deltask) {
    
        console.log(tasks)
        console.log(Deltask)
        setTasks(tasks.filter((t) => t.id !== Deltask.id))
    
      }

    return(
        <TaskContext.Provider
        value={{
            tasks,
            createTask,
            deleteTask        
            }}>
            {props.children}
        </TaskContext.Provider>
    ); 
}