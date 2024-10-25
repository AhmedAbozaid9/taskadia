"use client";

import React, { useEffect, useState } from "react";
import { Tabs, Tab, Divider } from "@nextui-org/react";

import Timer from "./Timer";
import StopWatch from "./StopWatch";
import TimerStatistics from "./TimerStatistics";
import SelectTask from "./SelectTask";

const Page = () => {
  const [selectedType, setSelectedType] = useState("Timer");
  const [sessions, setSessions] = useState();
  const [totalTime, setTotalTime] = useState();
  const [totalCount, setTotalCount] = useState();
  const [isLoading, setIsLoading] = useState(true);

  return (
    <section className="w-full sm:p-6 p-3 flex max-md:flex-col justify-between">
      <div className="flex flex-1 flex-col gap-5 items-center">
        {/*<SelectTask />*/}

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
        {selectedType === "Timer" ? <Timer /> : <StopWatch />}
      </div>
      <Divider orientation="vertical" className="max-md:hidden mx-5" />
      <TimerStatistics
        sessions={sessions}
        totalTime={totalTime}
        totalCount={totalCount}
        isLoading={isLoading}
      />
    </section>
  );
};

export default Page;
