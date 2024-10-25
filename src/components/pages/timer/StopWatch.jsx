import React, { useContext } from "react";
import { Button } from "@nextui-org/react";
import toast from "react-hot-toast";

import { secondsToDisplay } from "@/utils/secondsToDisplay";
import { TimerContext } from "@/contexts/TimerContext";

const StopWatch = () => {
  const { timer, stopwatch } = useContext(TimerContext);
  const { time, isPaused, isExpired, start, pause, resume, end } = stopwatch;

  const startStopwatch = () => {
    if (!timer.isExpired) {
      toast.error("You must stop the timer first");
      return;
    }
    // } else if (!currentProject?.size) {
    //   toast.error("the session will not be saved if you didn't pick a project");
    // }
    start();
  };
  return (
    <div className="flex flex-col flex-1 justify-center items-center">
      <div className="text-6xl w-72 h-72 gap-2 p-3 rounded-full border-2 border-[#2F2E35] flex items-center justify-center flex-col">
        <div>
          {secondsToDisplay(time).minutes}:{secondsToDisplay(time).seconds}
        </div>
      </div>
      <div className="flex gap-3 items-center justify-center">
        <Button
          className="bg-primary-purple font-medium my-6 w-32 text-white"
          onPress={isExpired ? startStopwatch : isPaused ? resume : pause}
        >
          {isExpired ? "Start" : isPaused ? "Resume" : "Pause"}
        </Button>
        {!isExpired && (
          <Button
            variant="bordered"
            className="font-medium my-6 w-32 text-white"
            onPress={() => end()}
          >
            End
          </Button>
        )}
      </div>
    </div>
  );
};

export default StopWatch;
