import React from "react";

const TasksList = ({ tasks }) => {
  console.log(tasks);
  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id}>{task.title}</div>
      ))}
    </div>
  );
};

export default TasksList;
