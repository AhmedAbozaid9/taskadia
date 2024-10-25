"use client";

import React, { useEffect, useState } from "react";
import { Tabs, Tab, Divider } from "@nextui-org/react";

import Timer from "@/components/timer/Timer";
import StopWatch from "@/components/timer/StopWatch";
import TimerStatistics from "@/components/timer/TimerStatistics";
import SelectProject from "@/components/timer/SelectProject";
import { useSession } from "next-auth/react";

const Page = () => {
  const { data: session } = useSession();

  const [selectedType, setSelectedType] = useState("Timer");
  const [sessions, setSessions] = useState();
  const [totalTime, setTotalTime] = useState();
  const [totalCount, setTotalCount] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`/api/sessions/${session?.user.id}`);
      setSessions(data.sessions);
      setTotalTime(data.totalTime);
      setTotalCount(data.totalCount);
      setIsLoading(false);
    })();
  }, [session]);

  return (
    <section className="w-full sm:p-6 p-3 flex max-md:flex-col justify-between">
      <div className="flex flex-1 flex-col gap-5 items-center">
        <SelectProject />

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
