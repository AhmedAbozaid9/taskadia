import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { CheckCheck, Ellipsis, LogIn, LogOut, Text } from "lucide-react";

const Menu = ({
  showCompleted,
  setShowCompleted,
  showDescription,
  setShowDescription,
}) => {
  const loggedIn = false;
  return (
    <Dropdown className="bg-main-dark-bg" placement="bottom-end">
      <DropdownTrigger className="absolute top-6 right-6">
        <button className="focus:outline-none">
          <Ellipsis />
        </button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem key="showCompleted">
          <button
            onClick={() => setShowCompleted((prev) => !prev)}
            className="flex items-center gap-2"
          >
            <CheckCheck size={18} />
            <span>{showCompleted ? "Show Completed" : "Hide Completed"}</span>
          </button>
        </DropdownItem>
        <DropdownItem key="showDescription">
          <button
            onClick={() => setShowDescription((prev) => !prev)}
            className="flex items-center gap-2"
          >
            <Text size={18} />
            <span>
              {showDescription ? "Hide Description" : "Show Description"}
            </span>
          </button>
        </DropdownItem>
        <DropdownItem key="edit">
          {" "}
          <button onClick={() => {}} className="flex items-center gap-2">
            {loggedIn ? (
              <span className="flex items-center gap-2 text-red-500">
                <LogOut size={18} />
                <span>Log Out</span>
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <LogIn size={18} />
                <span>Log In</span>
              </span>
            )}
          </button>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default Menu;
