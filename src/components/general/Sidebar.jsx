"use client";
import React from "react";
import TaskForm from "./TaskForm";
import { addTask } from "@/stores/tasks/tasksSlice";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

const Sidebar = () => {
  const dispatch = useDispatch();

  const createNewTask = (task) => {
    dispatch(addTask(task));
    toast.success("Task created successfully");
  };
  return <TaskForm createNewTask={createNewTask} />;
};

export default Sidebar;
