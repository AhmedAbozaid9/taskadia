"use client";
import React from "react";
import { useSelector } from "react-redux";
import TasksList from "./TasksList";
import Menu from "./Menu";
import useLocalStorage from "@/hooks/useLocalStorage";

const MainHome = () => {
  const [showCompleted, setShowCompleted] = useLocalStorage(
    "showCompleted",
    true
  );
  const [showDescription, setShowDescription] = useLocalStorage(
    "showDescription",
    true
  );
  const tasks = useSelector((state) => state.tasks);

  return (
    <div>
      <h1 className="font-semibold text-2xl sm:text-4xl ">
        <span className="text-pastel-pink">Welcome</span>, Ahmed 👋
      </h1>
      <h2 className="sm:text-lg opacity-90 mt-2 mb-5 sm:mb-8">
        here&apos;s what you need to do
      </h2>
      <TasksList
        tasks={tasks.tasks}
        showDescription={showDescription}
        showCompleted={showCompleted}
      />
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
