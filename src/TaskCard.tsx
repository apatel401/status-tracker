import React, { useEffect, useRef, useState } from "react";
import { Task } from "./model";
import { AiFillEdit, AiFillDelete, AiOutlineCheckCircle } from "react-icons/ai";
import { MdDone } from "react-icons/md";
type Props = {
  task: Task;
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
};

const TaskCard = ({ task, tasks, setTasks }: Props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTask, setEditTask] = useState<string>(task.taskName);
  const inputRef = useRef<HTMLInputElement>(null);
  //   const [state, dispatch] = useReducer(taskReducer, []);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [edit]);

  const handleEdit = (id: number, e: React.FormEvent) => {
    e.preventDefault();
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, taskName: editTask } : task
      )
    );
    setEdit(false);
  };

  const handleDone = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isDone: !task.isDone } : task
      )
    );
  };
  const handleDlt = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <form className="todos__single" onSubmit={(e) => handleEdit(task.id, e)}>
      {edit ? (
        <div style={{ position: "relative" }}>
          <input
            className="todos__single--text"
            value={editTask}
            ref={inputRef}
            onChange={(e) => setEditTask(e.target.value)}
          />
          <span className="icon done" onClick={(e) => handleEdit(task.id, e)}>
            <AiOutlineCheckCircle />
          </span>
        </div>
      ) : task.isDone ? (
        <s className="todos__single--text">{task.taskName}</s>
      ) : (
        <span className="todos__single--text">{task.taskName}</span>
      )}
      <div>
        <span
          className="icon"
          onClick={() => {
            if (!task.isDone && !edit) {
              setEdit(!edit);
            }
          }}>
          <AiFillEdit />
        </span>
        <span className="icon" onClick={() => handleDlt(task.id)}>
          <AiFillDelete />
        </span>
        <span className="icon" onClick={() => handleDone(task.id)}>
          <MdDone />
        </span>
      </div>
    </form>
  );
};

export default TaskCard;