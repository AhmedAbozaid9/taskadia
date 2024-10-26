import React from "react";
import Task from "./Task";
import { Accordion, AccordionItem } from "@nextui-org/react";

const TasksList = ({ tasks, showCompleted, showDescription }) => {
  const todo = tasks.filter((task) => task.state === "todo");
  const doing = tasks.filter((task) => task.state === "doing");
  const done = tasks.filter((task) => task.state === "done");
  return (
    <div className="flex flex-col  gap-5">
      <Accordion>
        <AccordionItem
          title={
            <h2 className="font-semibold text-xl sm:text-3xl ">
              Todo <span className="text-pastel-pink">({todo.length})</span>
            </h2>
          }
        >
          <div className="flex flex-col gap-3">
            {todo.map((task) => (
              <Task
                key={task.id}
                task={task}
                showDescription={showDescription}
              />
            ))}
          </div>
        </AccordionItem>
        <AccordionItem
          title={
            <h2 className="font-semibold text-xl sm:text-3xl ">
              Doing{" "}
              <span className="text-secondary-purple">({doing.length})</span>
            </h2>
          }
        >
          <div className="flex flex-col gap-3">
            {doing.map((task) => (
              <Task
                key={task.id}
                task={task}
                showDescription={showDescription}
              />
            ))}
          </div>
        </AccordionItem>
        <AccordionItem
          title={
            <h2 className="font-semibold text-xl sm:text-3xl ">
              Done <span className="text-pastel-green">({done.length})</span>
            </h2>
          }
        >
          {!showCompleted && (
            <div className="flex flex-col gap-3">
              {done.map((task) => (
                <Task
                  key={task.id}
                  task={task}
                  showDescription={showDescription}
                />
              ))}
            </div>
          )}
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default TasksList;
