"use client";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, editTask, deleteTask } from "@/stores/tasks/tasksSlice";
import TasksList from "./TasksList";
import TaskForm from "@/components/general/TaskForm";
import Menu from "./Menu";

const MainHome = () => {
  const [showCompleted, setShowCompleted] = useState(true);
  const [showDescription, setShowDescription] = useState(true);
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const editTaskById = (id, task) => {
    dispatch(editTask({ id, task }));
  };
  const deleteTaskById = (id) => {
    dispatch(deleteTask(id));
  };
  return (
    <div>
      <h1 className="font-semibold text-2xl sm:text-4xl ">
        <span className="text-pastel-pink">Welcome</span>, Ahmed 👋
      </h1>
      <h2 className="sm:text-lg opacity-90 mt-2 mb-5 sm:mb-8">
        here&apos;s what you need to do
      </h2>
      <TasksList tasks={tasks.tasks} showDescription={showDescription} />
      <Menu
        showCompleted={showCompleted}
        setShowCompleted={setShowCompleted}
        showDescription={showDescription}
        setShowDescription={setShowDescription}
      />
    </div>
  );
};

export default MainHome;
