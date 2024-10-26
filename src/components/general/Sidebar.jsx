"use client";
import React from "react";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { ChartNoAxesColumn, Clock2, SquareCheckBig } from "lucide-react";
import { Tooltip, Avatar } from "@nextui-org/react";

const Sidebar = () => {
  const pathname = usePathname();

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
    </div>
  );
};

export default Sidebar;
