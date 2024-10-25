import React, { useContext } from "react";
import { Select, SelectItem } from "@nextui-org/react";

const SelectTask = () => {
  const { projects, currentProject, setCurrentProject } =
    useContext(ProjectsContext);

  return (
    <Select
      selectedKeys={currentProject}
      onSelectionChange={setCurrentProject}
      size="sm"
      label="Select a project"
      className="max-w-52 py-0"
      classNames={{
        trigger: "bg-transparent data-hover:bg-transparent",
      }}
    >
      {projects?.map((project) => (
        <SelectItem key={project._id} value={project.title}>
          {project.title}
        </SelectItem>
      ))}
    </Select>
  );
};

export default SelectTask;
