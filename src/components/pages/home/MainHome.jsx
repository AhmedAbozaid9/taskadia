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
      <TasksList tasks={tasks.tasks} />
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
