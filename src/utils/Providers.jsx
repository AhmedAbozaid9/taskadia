import { TimerContextProvider } from "@/contexts/TimerContext";

const Providers = ({ children }) => {
  return <TimerContextProvider>{children}</TimerContextProvider>;
};

export default Providers;
