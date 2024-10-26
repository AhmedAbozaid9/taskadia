import React from "react";
import { Select, SelectItem } from "@nextui-org/react";
import { useSelector } from "react-redux";

const SelectTask = ({ selectedTask, setSelectedTask }) => {
  console.log(selectedTask);
  const tasks = useSelector((state) => state.tasks);

  return (
    <Select
      value={selectedTask}
      onSelectionChange={setSelectedTask}
      size="sm"
      label="Select a task"
      className="max-w-52 py-0"
      classNames={{
        trigger: "bg-transparent data-hover:bg-transparent",
      }}
    >
      {tasks.tasks?.map((task) => (
        <SelectItem key={task.id} value={task.title}>
          {task.title}
        </SelectItem>
      ))}
    </Select>
  );
};

export default SelectTask;
