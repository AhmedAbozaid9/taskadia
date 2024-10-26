"use client";
import React from "react";
import { useSelector } from "react-redux";
import TasksList from "./TasksList";
import Menu from "./Menu";
import useLocalStorage from "@/hooks/useLocalStorage";
import Empty from "@/components/general/Empty";
import { useSession } from "next-auth/react";

const MainHome = () => {
  const { data: session } = useSession();

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
        <span className="text-pastel-pink">Welcome</span>,
        {session?.user.name || "user"} 👋
      </h1>
      <h2 className="sm:text-lg opacity-90 mt-2 mb-5 sm:mb-8">
        here&apos;s what you need to do
      </h2>
      {tasks.tasks.length === 0 ? (
        <Empty />
      ) : (
        <TasksList
          tasks={tasks.tasks}
          showCompleted={showCompleted}
          showDescription={showDescription}
        />
      )}
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
