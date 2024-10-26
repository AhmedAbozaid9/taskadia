import React from "react";
import Sidebar from "./Sidebar";
import AddTaskButton from "./AddTaskButton";

const Layout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="p-6 flex-1 mx-auto max-w-7xl">{children}</div>
      <AddTaskButton />
    </div>
  );
};

export default Layout;
