"use client";
import React from "react";
import TaskForm from "./TaskForm";
import { addTask } from "@/stores/tasks/tasksSlice";
import { useDispatch } from "react-redux";
import { usePathname } from "next/navigation";
import toast from "react-hot-toast";
import Link from "next/link";
import { ChartNoAxesColumn, Clock2, SquareCheckBig } from "lucide-react";
import { Tooltip } from "@nextui-org/react";

const Sidebar = () => {
  const pathname = usePathname();
  const dispatch = useDispatch();

  const createNewTask = (task) => {
    dispatch(addTask(task));
    toast.success("Task created successfully");
  };
  return (
    <div className="bg-main-dark-bg h-[100dvh] sticky top-0 left-0 p-4 flex flex-col gap-8">
      <Tooltip content="Tasks" placement="right">
        <Link
          href="/"
          className={`${
            pathname === "/" && "bg-primary-purple"
          } p-1.5 rounded-md`}
        >
          <SquareCheckBig size={24} />
        </Link>
      </Tooltip>
      <Tooltip content="Track time" placement="right">
        <Link
          href="/timer"
          className={`${
            pathname === "/timer" && "bg-primary-purple"
          } p-1.5 rounded-md`}
        >
          <Clock2 size={24} />
        </Link>
      </Tooltip>
      <Tooltip content="Statistics" placement="right">
        <Link
          href="/statistics"
          className={`${
            pathname === "/statistics" && "bg-primary-purple"
          } p-1.5 rounded-md`}
        >
          <ChartNoAxesColumn size={24} />
        </Link>
      </Tooltip>
      <div className={`mt-auto p-1.5 rounded-md`}>
        <TaskForm createNewTask={createNewTask} />
      </div>
    </div>
  );
};

export default Sidebar;
