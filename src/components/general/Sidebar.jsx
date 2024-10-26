"use client";
import React from "react";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Tooltip, Avatar } from "@nextui-org/react";
import { navigationLinks } from "@/constants/general/navigation";

const Sidebar = ({ profileImage }) => {
  const pathname = usePathname();

  return (
    <div className="bg-main-dark-bg h-[100dvh] sticky top-0 left-0 p-4 flex flex-col gap-8">
      <div className="flex gap-4 items-center mx-auto">
        <Avatar size="sm" showFallback src={profileImage} />
      </div>
      {navigationLinks.map((link) => (
        <Tooltip key={link.name} content={link.name} placement="right">
          <Link
            href={link.href}
            className={`${
              pathname === link.href && "bg-primary-purple"
            } p-1.5 rounded-md`}
          >
            {link.icon}
          </Link>
        </Tooltip>
      ))}
    </div>
  );
};

export default Sidebar;
