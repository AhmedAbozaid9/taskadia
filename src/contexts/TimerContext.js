"use client";
import React, { createContext, useContext } from "react";

import { useStopwatch } from "@/hooks/useStopwatch";
import { useTimer } from "@/hooks/useTimer";
import toast from "react-hot-toast";

const TimerContext = createContext(undefined, undefined);

const TimerContextProvider = ({ children }) => {


  const callback = async (time, type) => {

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
