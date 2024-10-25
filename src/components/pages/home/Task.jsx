import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Checkbox,
} from "@nextui-org/react";
import {
  BadgeCheck,
  Edit,
  EllipsisVertical,
  ListTodo,
  Trash,
} from "lucide-react";

import { useDispatch } from "react-redux";
import { deleteTask, editTask } from "@/stores/tasks/tasksSlice";
import toast from "react-hot-toast";
import TaskForm from "@/components/general/TaskFormModal";

const Task = ({ task, showDescription }) => {
  const borderConfig = {
    low: "border-secondary-purple",
    medium: "border-pastel-pink",
    high: "border-pastel-green",
  };
  const [showEditModal, setShowEditModal] = React.useState(false);
  const dispatch = useDispatch();

  const editTaskById = (task) => {
    dispatch(editTask({ id: task.id, task }));
    toast.success("Task updated successfully");
  };
  const deleteTaskById = (id) => {
    dispatch(deleteTask(id));
    toast.success("Task deleted successfully");
  };
  return (
    <div
      className={`group relative overflow-hidden border-2 ${
        borderConfig[task.priority]
      }  px-4 sm:px-6 py-8 rounded-xl transition-transform duration-300 ease-in-out hover:bg-scale-105 hover:shadow-lg`}
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

      <button>
        <Checkbox
          lineThrough
          color="secondary"
          isSelected={task.state === "done"}
          onChange={() =>
            editTaskById({
              ...task,
              state: task.state === "done" ? "doing" : "done",
            })
          }
        >
          <div className="relative z-10">
            <p>{task.title}</p>
          </div>
        </Checkbox>
        {showDescription && task.description && (
          <p className="text-sm opacity-70 mt-2">{task.description}</p>
        )}
      </button>
      <Dropdown className="bg-main-dark-bg" placement="bottom-end">
        <DropdownTrigger className="absolute top-3 right-4 z-30">
          <button className="focus:outline-none">
            <EllipsisVertical size={18} />
          </button>
        </DropdownTrigger>
        <DropdownMenu onClick={(e) => e.stopPropagation()}>
          <DropdownItem onClick={() => setShowEditModal(true)} key="edit task">
            <div className="flex items-center gap-2">
              <Edit size={18} />
              <span>Edit Task</span>
            </div>
          </DropdownItem>

          {task.state === "todo" && (
            <DropdownItem
              onClick={() =>
                editTaskById({
                  ...task,
                  state: "doing",
                })
              }
              key="to do"
            >
              <button className="flex items-center gap-2">
                <BadgeCheck size={18} />
                <span>Change to Doing</span>
              </button>
            </DropdownItem>
          )}
          {task.state !== "todo" && (
            <DropdownItem
              onClick={() =>
                editTaskById({
                  ...task,
                  state: "todo",
                })
              }
              key="not todo"
            >
              <button className="flex items-center gap-2 ">
                <ListTodo size={18} />
                <span>Change to Todo</span>
              </button>
            </DropdownItem>
          )}
          <DropdownItem
            onClick={() => deleteTaskById(task.id)}
            key="delete task"
          >
            <button className="flex items-center gap-2 text-red-500">
              <Trash size={18} />
              <span>Delete Task</span>
            </button>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
      {showEditModal && (
        <TaskForm
          isOpen={showEditModal}
          setIsOpen={setShowEditModal}
          action={editTaskById}
          editValues={task}
        />
      )}
    </div>
  );
};

export default Task;
