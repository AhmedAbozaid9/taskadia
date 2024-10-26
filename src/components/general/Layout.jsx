import React from "react";
import Sidebar from "./Sidebar";
import AddTaskButton from "./AddTaskButton";
import MobileTabBar from "./MobileTabBar.jsx";

const Layout = ({ children }) => {
  const profileImage = "";
  return (
    <div className="sm:flex">
      <div className="max-sm:hidden">
        <Sidebar profileImage={profileImage} />
      </div>
      <div className="sm:hidden">
        <MobileTabBar profileImage={profileImage} />
      </div>

      <div className="p-6 flex-1 mx-auto max-w-7xl">{children}</div>
      {/* just extra space for mobile tab bar  */}
      <div className="sm:hidden h-32"></div>
      <AddTaskButton />
    </div>
  );
};

export default Layout;
