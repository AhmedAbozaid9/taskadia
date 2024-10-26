"use client";

import React, { useState } from "react";
import { Tabs, Tab } from "@nextui-org/react";

import Timer from "./Timer";
import StopWatch from "./StopWatch";
import TimerStatistics from "./TimerStatistics";
import SelectTask from "./SelectTask";
import useLocalStorage from "@/hooks/useLocalStorage";

const Page = () => {
  const [selectedType, setSelectedType] = useState("Timer");
  const [selectedTask, setSelectedTask] = useState(null);
  const [sessions] = useLocalStorage("sessions", []);
  const [totalTime] = useLocalStorage("totalTime", 0);
  const [totalCount] = useLocalStorage("totalCount", 0);

  return (
    <section className="w-full sm:p-6 p-3 flex max-md:flex-col justify-between">
      <div className="flex flex-1 flex-col gap-5 items-center ">
        <SelectTask
          selectedTask={selectedTask}
          setSelectedTask={setSelectedTask}
        />

        <Tabs
          size="sm"
          selectedKey={selectedType}
          onSelectionChange={setSelectedType}
          radius="full"
          className="mx-auto"
          variant="bordered"
        >
          <Tab key="Timer" title="Timer" />
          <Tab key="Stopwatch" title="Stopwatch" />
        </Tabs>
        {selectedType === "Timer" ? (
          <Timer task={selectedTask} />
        ) : (
          <StopWatch task={selectedTask} />
        )}
      </div>
      <div className="bg-neutral-600 max-md:hidden mx-5 w-0.5 h-[calc(100dvh-1rem)" />
      <TimerStatistics
        sessions={sessions}
        totalTime={totalTime}
        totalCount={totalCount}
      />
    </section>
  );
};

export default Page;
