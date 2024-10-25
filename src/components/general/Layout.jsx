import React from "react";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="p-6 flex-1">{children}</div>
    </div>
  );
};

export default Layout;
