"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, editTask, deleteTask } from "@/stores/tasks/tasksSlice";
import TasksList from "./TasksList";
import TaskForm from "@/components/general/TaskForm";

const MainHome = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const createNewTask = (task) => {
    dispatch(addTask(task));
  };
  const editTaskById = (id, task) => {
    dispatch(editTask({ id, task }));
  };
  const deleteTaskById = (id) => {
    dispatch(deleteTask(id));
  };
  return (
    <div>
      <TaskForm />
      <TasksList tasks={tasks.tasks} />
    </div>
  );
};

export default MainHome;
