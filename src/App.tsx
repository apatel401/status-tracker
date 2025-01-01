import React, { useState } from "react";
import "./App.css";
import InputFeild from "./InputFeild";
import { Task } from "./model";
import TaskList from "./TaskList";

const App: React.FC = () => {
  const [taskName, setTaskName] = useState<string>("");
  const [tasks, setTasks]= useState<Task[]>([])

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if(taskName){
      setTasks([...tasks, {taskName, id: Date.now(), isDone: true}]);
      setTaskName("")
    }
  }

  return (
    <div className="App">
      <span className="heading">Status Tracker</span>
      <InputFeild 
      taskName={taskName} 
      setTaskName={setTaskName}
      handleAdd={handleAdd} />
      <TaskList tasks={tasks} setTasks={setTasks} />
    </div>
  );
};

export default App;
