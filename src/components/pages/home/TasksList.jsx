import React from "react";
import Task from "./Task";

const TasksList = ({ tasks, showCompleted, showDescription }) => {
  const filteredTasks = tasks.filter((task) => {
    if (showCompleted && task.state === "done") {
      return false;
    }
    return true;
  });
  const todo = filteredTasks.filter((task) => task.state === "todo");
  const doing = filteredTasks.filter((task) => task.state === "doing");
  const done = filteredTasks.filter((task) => task.state === "done");
  return (
    <div className="flex flex-col  gap-5">
      <h2 className="font-semibold text-xl sm:text-3xl ">
        Todo <span className="text-pastel-pink">({todo.length})</span>
      </h2>
      <div className="flex flex-col gap-3">
        {todo.map((task) => (
          <Task key={task.id} task={task} showDescription={showDescription} />
        ))}
      </div>
      <h2 className="font-semibold text-xl sm:text-3xl ">
        Doing <span className="text-secondary-purple">({doing.length})</span>
      </h2>
      <div className="flex flex-col gap-3">
        {doing.map((task) => (
          <Task key={task.id} task={task} showDescription={showDescription} />
        ))}
      </div>
      <h2 className="font-semibold text-xl sm:text-3xl ">
        Done <span className="text-pastel-green">({done.length})</span>
      </h2>
      <div className="flex flex-col gap-3">
        {done.map((task) => (
          <Task key={task.id} task={task} showDescription={showDescription} />
        ))}
      </div>
    </div>
  );
};

export default TasksList;
