import React from "react";
import { Task } from "./model";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
type Props = {
  task: Task;
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
};
const TaskCard = ({ task, tasks, setTasks }: Props) => {
 console.log(tasks, setTasks)
    return (
    <form className="todos__single">
      <span className="todos__single--text">{task.taskName}</span>
      <div>
        <span className="icon">
          <AiFillEdit />
        </span>
        <span className="icon">
          <AiFillDelete />
        </span>
        <span className="icon">
          <MdDone />
        </span>
      </div>
    </form>
  );
};

export default TaskCard;
