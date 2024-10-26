"use client";

import { Avatar } from "@nextui-org/react";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Tooltip } from "@nextui-org/react";
import { navigationLinks } from "@/constants/general/navigation";

const MobileTabBar = ({ profileImage }) => {
  const pathname = usePathname();
  return (
    <div className="z-20 flex bg-main-dark-bg fixed items-center justify-around bottom-4 left-0 right-0 w-[90%] mx-auto gap-12 px-8 py-3 rounded-full">
      {navigationLinks.map((link) => (
        <Tooltip key={link.name} content={link.name} placement="top">
          <Link
            href={link.href}
            className={`${
              pathname === link.href && "bg-primary-purple"
            } p-1.5 rounded-full`}
          >
            {link.icon}
          </Link>
        </Tooltip>
      ))}
      <Avatar
        className="min-w-[30px]"
        size="sm"
        showFallback
        src={profileImage}
      />
    </div>
  );
};

export default MobileTabBar;
