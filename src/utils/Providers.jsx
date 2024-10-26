"use client";
import React from "react";
import { TimerContextProvider } from "@/contexts/TimerContext";
import { Provider as ReduxProvider } from "react-redux";
import tasksStore from "@/stores/tasks";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider } from "next-theme";

import { SessionProvider } from "next-auth/react";

const Providers = ({ children }) => {
  return (
    <SessionProvider>
      <ReduxProvider store={tasksStore}>
        <TimerContextProvider>
          <NextUIProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="dark"
              value={{
                light: "light",
                dark: "dark",
              }}
            >
              {children}
            </ThemeProvider>
          </NextUIProvider>
        </TimerContextProvider>
      </ReduxProvider>
    </SessionProvider>
  );
};

export default Providers;
