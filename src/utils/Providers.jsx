"use client";
import React from "react";
import { TimerContextProvider } from "@/contexts/TimerContext";
import { Provider as ReduxProvider } from "react-redux";
import tasksStore from "@/stores/tasks";

const Providers = ({ children }) => {
  return (
    <ReduxProvider store={tasksStore}>
      <TimerContextProvider>{children}</TimerContextProvider>
    </ReduxProvider>
  );
};

export default Providers;
