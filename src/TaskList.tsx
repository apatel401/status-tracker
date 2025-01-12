import React from "react";
import { Task } from "./model";
import TaskCard from "./TaskCard";
import { Droppable } from "react-beautiful-dnd";

interface Props {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  completedTasks: Task[];
  setCompletedTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const TaskList: React.FC<Props> = ({
  tasks,
  setTasks,
  completedTasks,
  setCompletedTasks,
}) => {
  return (
    <div className="container">
      <Droppable droppableId="TaskList">
        {(provided, snapshot) => (
          <div
            className={`todos ${snapshot.isDraggingOver ? "dragactive" : ""}`}
            ref={provided.innerRef}
            {...provided.droppableProps}>
            <span className="todos__heading">Active Tasks</span>
            {tasks?.map((task, index) => (
              <TaskCard
                index={index}
                task={task}
                key={task.id}
                tasks={tasks}
                setTasks={setTasks}
              />
            ))}
          </div>
        )}
      </Droppable>
      <Droppable droppableId="TaskRemove">
        {(provided) => (
          <div
            className="todos remove"
            ref={provided.innerRef}
            {...provided.droppableProps}>
            <span className="todos__heading">Completed Tasks</span>
            {completedTasks?.map((task, index) => (
              <TaskCard
                index={index}
                task={task}
                key={task.id}
                tasks={completedTasks}
                setTasks={setCompletedTasks}
              />
            ))}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default TaskList;
