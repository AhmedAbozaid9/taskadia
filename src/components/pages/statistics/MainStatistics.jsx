"use client";
import React from "react";
import BarChart from "./BarChart";
import { useSelector } from "react-redux";

const MainStatistics = () => {
  const { tasks } = useSelector((state) => state.tasks);
  const taskCounts = tasks.reduce(
    (acc, task) => {
      acc[task.state]++;
      return acc;
    },
    { todo: 0, doing: 0, done: 0 }
  );
  return (
    <section>
      <h1 className="font-semibold text-2xl sm:text-4xl mb-5 sm:mb-8">
        Statistics
      </h1>
      <div className="bg-main-dark-bg rounded-lg p-6">
        <BarChart taskCounts={taskCounts} />
      </div>
    </section>
  );
};

export default MainStatistics;
