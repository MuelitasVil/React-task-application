import { TaskList } from "./Components/TaskList"
import { TaskForm } from "./Components/TaskForm";

export function App() {
  return (
    <main className = "bg-zinc-900 h-screen">
      <div className = "container">
      <TaskForm/>
      <TaskList/>
    </div>
    </main>
    
  );
}