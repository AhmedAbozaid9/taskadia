import { useEffect, useReducer } from "react";

const timerReducer = (state, action) => {
  switch (action.type) {
    case "START":
      return {
        ...state,
        isExpired: false,
        isPaused: false,
        isRunning: true,
        time: 0,
      };
    case "PAUSE":
      return { ...state, isPaused: true, isRunning: false };
    case "RESUME":
      return { ...state, isPaused: false, isRunning: true };
    case "END":
      return {
        ...state,
        isRunning: false,
        isExpired: true,
        time: 0,
      };
    case "TICK":
      return state.isRunning ? { ...state, time: state.time + 1 } : state;
    default:
      return state;
  }
};

export const useStopwatch = (callback) => {
  const [state, dispatch] = useReducer(timerReducer, {
    time: 0,
    isRunning: false,
    isPaused: false,
    isExpired: true,
  });

  useEffect(() => {
    let timerInterval;

    if (state.isRunning) {
      timerInterval = setInterval(() => {
        dispatch({ type: "TICK" });
      }, 1000);

      if (state.time === 10800) {
        dispatch({ type: "END" });
        callback && callback(state.time, "Stopwatch");
      }
    }

    return () => clearInterval(timerInterval);
  }, [state.time, callback, state.isRunning]);

  const start = () => dispatch({ type: "START" });
  const pause = () => dispatch({ type: "PAUSE" });
  const resume = () => dispatch({ type: "RESUME" });
  const end = () => {
    dispatch({ type: "END" });
    callback && callback(state.time, "Stopwatch");
  };

  return { ...state, start, pause, resume, end };
};
