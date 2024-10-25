import { useEffect, useReducer } from "react";

let tempInitialTime;

const timerReducer = (state, action) => {
  switch (action.type) {
    case "START":
      return {
        ...state,
        isExpired: false,
        isPaused: false,
        isRunning: true,
        time: action.payload,
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
      };
    case "TICK":
      return state.isRunning ? { ...state, time: state.time - 1 } : state;
    default:
      return state;
  }
};

export const useTimer = (callback) => {
  const [state, dispatch] = useReducer(timerReducer, {
    time: 60,
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

      if (state.time === 0) {
        dispatch({ type: "END" });
        document.getElementById("done-sound").play();
        callback && callback(tempInitialTime - state.time, "Timer");
      }
    }

    return () => clearInterval(timerInterval);
  }, [state.time, callback, state.isRunning]);

  const start = (initialTime) => {
    dispatch({ type: "START", payload: initialTime });
    tempInitialTime = initialTime;
  };
  const pause = () => dispatch({ type: "PAUSE" });
  const resume = () => dispatch({ type: "RESUME" });
  const end = () => {
    dispatch({ type: "END" });
    callback(tempInitialTime - state.time, "Timer");
  };

  return { ...state, start, pause, resume, end };
};
