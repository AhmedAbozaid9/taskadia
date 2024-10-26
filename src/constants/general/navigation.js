import React from "react";
import { ChartNoAxesColumn, Clock2, SquareCheckBig } from "lucide-react";

export const navigationLinks = [
  {
    name: "Tasks",
    href: "/",
    icon: <SquareCheckBig size={24} />,
  },
  {
    name: "Timer",
    href: "/timer",
    icon: <Clock2 size={24} />,
  },
  {
    name: "Statistics",
    href: "/statistics",
    icon: <ChartNoAxesColumn size={24} />,
  },
];
