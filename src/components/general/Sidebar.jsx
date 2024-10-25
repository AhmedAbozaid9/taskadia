"use client";
import React, { useState } from "react";
import TaskForm from "./TaskFormModal";
import { addTask } from "@/stores/tasks/tasksSlice";
import { useDispatch } from "react-redux";
import { usePathname } from "next/navigation";
import toast from "react-hot-toast";
import Link from "next/link";
import {
  ChartNoAxesColumn,
  Clock2,
  SquareCheckBig,
  SquarePlus,
} from "lucide-react";
import { Tooltip, Avatar } from "@nextui-org/react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const dispatch = useDispatch();

  const createNewTask = (task) => {
    dispatch(addTask(task));
    toast.success("Task created successfully");
  };
  return (
    <div className="bg-main-dark-bg h-[100dvh] sticky top-0 left-0 p-4 flex flex-col gap-8">
      <div className="flex gap-4 items-center mx-auto">
        <Avatar
          size="sm"
          showFallback
          src="https://images.unsplash.com/broken"
        />
      </div>
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
      <button
        onClick={() => setIsOpen(true)}
        className={`mt-auto p-1.5 rounded-md`}
      >
        <Tooltip content="Add new Task" placement="right">
          <SquarePlus size={24} />
        </Tooltip>
      </button>
      <TaskForm isOpen={isOpen} setIsOpen={setIsOpen} action={createNewTask} />
    </div>
  );
};

export default Sidebar;
