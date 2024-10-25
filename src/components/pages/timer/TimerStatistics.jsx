import React from "react";
import { Skeleton } from "@nextui-org/react";

const TimerStatistics = ({ sessions, totalTime, totalCount, isLoading }) => {
  return (
    <div className="flex-1 flex flex-col gap-5 ">
      <div className="flex gap-5 justify-center">
        <div className="p-5 flex-1 bg-main-dark-bg rounded-md">
          <p className="text-secondary-text text-sm">Total time</p>
          <div className="text-large font-medium py-2 flex items-center gap-2">
            {Math.round(totalTime / 3600) || 0}
            <span>Hrs</span>
          </div>
        </div>
        <div className="p-5 flex-1 bg-main-dark-bg rounded-md">
          <p className="text-secondary-text text-sm">Total sessions</p>
          <div className="text-large font-medium py-2 flex items-center gap-2">
            {totalCount || 0}
            <span>sessions</span>
          </div>
        </div>
      </div>
      <p className="font-medium">Recent sessions</p>
      <div className=" flex flex-col gap-3 md:overflow-y-scroll md:h-80 md:pr-2">
        {isLoading ? (
          <>
            <Skeleton className="rounded-md">
              <div className="w-full h-16" />
            </Skeleton>
            <Skeleton className="rounded-md">
              <div className="w-full h-16" />
            </Skeleton>
          </>
        ) : (
          <>
            {sessions.map((session) => (
              <div
                key={session._id}
                className="flex justify-between items-center rounded-md bg-main-dark-bg p-4"
              >
                <div className="flex flex-col justify-between">
                  <p className="font-medium">{session.project?.title}</p>
                  <p className="py-1 text-secondary-text text-xs">
                    {new Date(session.date).getFullYear()}
                  </p>
                </div>
                <span>{Math.round(session.time / 60)} Mins</span>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default TimerStatistics;
