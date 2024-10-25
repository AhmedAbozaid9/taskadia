import React from "react";

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
        <div key={task.id}>
          <p>{task.title}</p>
          {showDescription && <p>{task.description}</p>}
        </div>
      ))}
    </div>
  );
};

export default TasksList;
