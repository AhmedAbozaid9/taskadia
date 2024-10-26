import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = ({ taskCounts }) => {
  const data = {
    labels: ["To Do", "Doing", "Done"],
    datasets: [
      {
        label: "Task Counts",
        data: [taskCounts.todo, taskCounts.doing, taskCounts.done],
        backgroundColor: ["#E074ED", "#ED74BD", "#B8ECED"],
        borderColor: ["#E074ED", "#ED74BD", "#B8ECED"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 1,
        },
      },
    },
  };

  return (
    <div className="max-w-[800px]">
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
