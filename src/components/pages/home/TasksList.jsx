import React from "react";
import Task from "./Task";

const TasksList = ({ tasks, showCompleted, showDescription }) => {
  const filteredTasks = tasks.filter((task) => {
    if (showCompleted && task.state === "done") {
      return false;
    }
    return true;
  });
  return (
    <div className="flex flex-col gap-5">
      {filteredTasks.map((task) => (
        <Task key={task.id} task={task} showDescription={showDescription} />
      ))}
    </div>
  );
};

export default TasksList;
