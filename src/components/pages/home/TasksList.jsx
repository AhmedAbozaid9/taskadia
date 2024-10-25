import React from "react";
import Task from "./Task";

const TasksList = ({ tasks, showCompleted, showDescription }) => {
  const filteredTasks = tasks.filter((task) => {
    if (!showCompleted && task.status === "done") {
      return false;
    }
    return !task.completed;
  });
  return (
    <div>
      {filteredTasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TasksList;
