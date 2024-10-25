import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { Edit, EllipsisVertical, Trash } from "lucide-react";

import { useDispatch } from "react-redux";
import { deleteTask } from "@/stores/tasks/tasksSlice";
import toast from "react-hot-toast";

const Task = ({ task, showDescription }) => {
  const dispatch = useDispatch();

  // const editTaskById = (id, task) => {
  //   dispatch(editTask({ id, task }));
  // };
  const deleteTaskById = (id) => {
    dispatch(deleteTask(id));
    toast.success("Task deleted successfully");
  };
  return (
    <div
      className={`group relative overflow-hidden border-2  px-4 py-8 rounded-xl transition-transform duration-300 ease-in-out hover:bg-scale-105 hover:shadow-lg`}
    >
      {task.image && (
        <>
          <img
            src={task.image}
            alt={task.title}
            className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-110"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40" />
        </>
      )}
      <div className="relative z-10">
        <p>{task.title}</p>
        {showDescription && (
          <p className="text-sm opacity-70">{task.description}</p>
        )}
      </div>
      <Dropdown className="bg-main-dark-bg" placement="bottom-end">
        <DropdownTrigger className="absolute top-3 right-4 z-30">
          <button className="focus:outline-none">
            <EllipsisVertical size={18} />
          </button>
        </DropdownTrigger>
        <DropdownMenu aria-label="Static Actions">
          <DropdownItem key="showCompleted">
            <button onClick={() => {}} className="flex items-center gap-2">
              <Edit size={18} />
              <span>Edit Task</span>
            </button>
          </DropdownItem>
          <DropdownItem key="showDescription">
            <button
              onClick={() => deleteTaskById(task.id)}
              className="flex items-center gap-2 text-red-500"
            >
              <Trash size={18} />
              <span>Delete Task</span>
            </button>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default Task;
