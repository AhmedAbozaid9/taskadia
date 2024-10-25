"use client";
import React, { createContext } from "react";

import { useStopwatch } from "@/hooks/useStopWatch";

import { useTimer } from "@/hooks/useTimer";
import toast from "react-hot-toast";

const TimerContext = createContext(undefined, undefined);

const TimerContextProvider = ({ children }) => {
  const callback = async (time) => {
    toast.success("The session has been saved successfully");
  };

  const stopwatch = useStopwatch(callback);
  const timer = useTimer(callback);

  return (
    <TimerContext.Provider value={{ timer, stopwatch }}>
      {children}
    </TimerContext.Provider>
  );
};

export { TimerContext, TimerContextProvider };
