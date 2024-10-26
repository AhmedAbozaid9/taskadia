"use client";
import React, { useState } from "react";
import TaskForm from "./TaskFormModal";
import { useDispatch } from "react-redux";
import { addTask } from "@/stores/tasks/tasksSlice";
import toast from "react-hot-toast";
import { Button } from "@nextui-org/react";
import { Plus } from "lucide-react";

const AddTaskButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const createNewTask = (task) => {
    dispatch(addTask(task));
    toast.success("Task created successfully");
  };
  return (
    <div>
      <Button
        size="sm"
        onClick={() => setIsOpen(true)}
        isIconOnly
        className="fixed bottom-10 right-10 w-10 h-10 !p-0  bg-primary-purple rounded-full"
      >
        <Plus />
      </Button>
      <TaskForm isOpen={isOpen} setIsOpen={setIsOpen} action={createNewTask} />
    </div>
  );
};

export default AddTaskButton;
