// components/Charts.js

import { Line, Bar, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
  Filler,
  ArcElement,
} from "chart.js";
import { ChartProps, MetricsProps } from "@/lib/types";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export const LineChart = ({ data }: ChartProps) => {
  const chartData = {
    labels: data.map((item) => item.day),
    datasets: [
      {
        label: "Positive Reviews",
        data: data.map((item) => item.positive),
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderWidth: 2,
      },
      {
        label: "Negative Reviews",
        data: data.map((item) => item.negative),
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderWidth: 2,
      },
    ],
  };

  const options: ChartOptions<"line"> = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Positive vs Negative Reviews Over Time",
      },
    },
  };

  return <Line data={chartData} options={options} />;
};

export const BarChart = ({ data }: ChartProps) => {
  const chartData = {
    labels: data.map((item) => item.day),
    datasets: [
      {
        label: "Positive Reviews",
        data: data.map((item) => item.positive),
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
      {
        label: "Negative Reviews",
        data: data.map((item) => item.negative),
        backgroundColor: "rgba(255, 99, 132, 0.6)",
      },
    ],
  };

  const options: ChartOptions<"bar"> = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Daily Positive vs Negative Reviews",
      },
    },
  };

  return <Bar data={chartData} options={options} />;
};

export const Metrics = ({ data }: MetricsProps) => {
  const totalPositive = data.reduce((sum, item) => sum + item.positive, 0);
  const totalNegative = data.reduce((sum, item) => sum + item.negative, 0);
  const averageSentiment =
    (totalPositive / (totalPositive + totalNegative)) * 100;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold"> Sentiment Index %</h3>
        <p className="text-2xl">{averageSentiment.toFixed(2)}%</p>
      </div>
      <div className=" p-6 rounded-lg shadow-md bg-green-300">
        <h3 className="text-lg font-semibold ">Total Positive</h3>
        <p className="text-2xl">{totalPositive}</p>
      </div>
      <div className="bg-red-300 p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold">Total Negative</h3>
        <p className="text-2xl">{totalNegative}</p>
      </div>
    </div>
  );
};

export const DoughnutChart = ({ data }: ChartProps) => {
  const totalPositive = data.reduce((sum, item) => sum + item.positive, 0);
  const totalNegative = data.reduce((sum, item) => sum + item.negative, 0);

  const chartData = {
    labels: ["Positive Reviews", "Negative Reviews"],
    datasets: [
      {
        data: [totalPositive, totalNegative],
        backgroundColor: ["rgba(75, 192, 192, 0.6)", "rgba(255, 99, 132, 0.6)"],
        borderColor: ["rgba(75, 192, 192, 1)", "rgba(255, 99, 132, 1)"],
        borderWidth: 2,
      },
    ],
  };

  const options: ChartOptions<"doughnut"> = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Positive vs Negative Reviews",
      },
    },
  };

  return <Doughnut data={chartData} options={options} />;
};
