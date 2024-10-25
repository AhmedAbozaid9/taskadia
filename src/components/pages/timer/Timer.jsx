import React, { useContext, useState } from "react";
import { Button } from "@nextui-org/react";
import toast from "react-hot-toast";

import { secondsToDisplay } from "@/utils/secondsToDisplay";
import { TimerContext } from "@/contexts/TimerContext";

const Timer = () => {
  const [inputTime, setInputTime] = useState(1);
  const { stopwatch, timer } = useContext(TimerContext);
  const { time, isPaused, isExpired, start, pause, resume, end } = timer;

  const handleInputChange = (value) => {
    if (value > 180) setInputTime(180);
    else if (value < 1) setInputTime(1);
    else setInputTime(value);
  };

  const startTimer = () => {
    if (!stopwatch.isExpired) {
      toast.error("You must stop the timer first");
      return;
    }
    // } else if (!currentProject?.size) {
    //   toast.error("the session will not be saved if you didn't pick a project");
    // }
    start(inputTime * 60);
  };

  return (
    <div className="flex flex-col flex-1 justify-center items-center">
      <div className="text-6xl w-72 h-72 gap-2 p-3 rounded-full border-2 border-[#2F2E35] flex items-center justify-center flex-col">
        {isExpired ? (
          <>
            <input
              value={inputTime}
              onChange={(e) => handleInputChange(e.target.value)}
              type="number"
              className="bg-transparent text-center w-1/2 outline-none"
              min="1"
              max="180"
            />
            <span className="text-lg font-medium text-gray-300">Minutes</span>
          </>
        ) : (
          <div>
            {secondsToDisplay(time).minutes}:{secondsToDisplay(time).seconds}
          </div>
        )}
      </div>
      <div className="flex gap-3 items-center justify-center">
        <Button
          className="bg-primary-purple text-white font-medium my-6 w-32"
          onPress={isExpired ? startTimer : isPaused ? resume : pause}
        >
          {isExpired ? "Start" : isPaused ? "Resume" : "Pause"}
        </Button>
        {!isExpired && (
          <Button
            variant="bordered"
            className="font-medium my-6 w-32 text-white"
            onPress={end}
          >
            End
          </Button>
        )}
      </div>
    </div>
  );
};

export default Timer;
