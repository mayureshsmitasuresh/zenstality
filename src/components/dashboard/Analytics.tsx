"use client";

import { useState } from "react";
import { fakeSentimentsByDay } from "../../data/fakeData";
import { BarChart, DoughnutChart, LineChart, Metrics } from "./Chart";
import { DateRangePicker } from "../ui/dateRangePicker";
import {
  FaCalendarAlt,
  FaChartLine,
  FaChartBar,
  FaChartPie,
} from "react-icons/fa"; // Import icons
import ReviewsWidget from "./ReviewsList";
import SuggestionsByCategoryChart from "./SentimentChart";

const Analytics = () => {
  const minDate = new Date("2025-01-01");
  const maxDate = new Date("2025-02-28");

  // State for date range
  const [startDate, setStartDate] = useState<Date | null>(minDate);
  const [endDate, setEndDate] = useState<Date | null>(maxDate);

  // Filter data based on the selected date range
  const filteredData = fakeSentimentsByDay.filter((item) => {
    const itemDate = new Date(item.day);
    return (
      (!startDate || itemDate >= startDate) && (!endDate || itemDate <= endDate)
    );
  });

  return (
    <div className="bg-gray-100 min-h-screen">
      <div>
        <h1 className="italic text-center text-red-700">
          THIS IS JUST DEMO NOT ACTUAL DATA BUT HOW IT GOING TO LOOK LIKE!
        </h1>
      </div>
      <div className="container mx-auto p-8">
        {/* Header */}
        <div className="mb-8 flex flex-col sm:flex-row items-center justify-between">
          <h1 className="text-3xl font-semibold text-blue-800">
            Performance Insights
          </h1>
          <div className="flex items-center">
            <FaCalendarAlt className="mr-2 text-gray-500" />
            <DateRangePicker
              startDate={startDate}
              endDate={endDate}
              onChange={(start, end) => {
                setStartDate(start);
                setEndDate(end);
              }}
              minDate={minDate}
              maxDate={maxDate}
            />
          </div>
        </div>

        {/* Metrics */}
        <div className="mb-8">
          <Metrics data={filteredData} />
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Line Chart */}
          <div className="bg-white p-6 rounded-lg shadow-md lg:col-span-2">
            <div className="flex items-center mb-4">
              <FaChartLine className="mr-2 text-blue-600" />
              <h2 className="text-xl font-semibold">Sentiment Over Time</h2>
            </div>
            <LineChart data={filteredData} />
          </div>

          {/* Doughnut Chart */}
          <div className="bg-white p-6 rounded-lg shadow-md lg:col-span-1">
            <div className="flex items-center mb-4">
              <FaChartPie className="mr-2 text-blue-600" />
              <h2 className="text-xl font-semibold">Sentiment Distribution</h2>
            </div>
            <DoughnutChart data={filteredData} />
          </div>

          {/* Recent reviews */}
          <div className="bg-white lg:col-span-1 rounded-lg shadow-md">
            <ReviewsWidget />
          </div>

          {/* Bar Chart */}
          <div className="bg-white lg:col-span-2 p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <FaChartBar className="mr-2 text-blue-600" />
              <h2 className="text-xl font-semibold">
                Daily Sentiment Comparison
              </h2>
            </div>
            <BarChart data={filteredData} />
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold text-blue-800 mb-4">
            Improvement Suggestions Overview
          </h2>
          <SuggestionsByCategoryChart />
        </div>
      </div>
    </div>
  );
};

export default Analytics;
