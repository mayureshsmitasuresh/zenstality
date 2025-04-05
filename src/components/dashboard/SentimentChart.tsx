"use client";

import React, { useEffect, useRef } from "react";
import { Chart, ChartOptions, ChartTypeRegistry } from "chart.js/auto";
import { fakeSuggestions } from "../../data/fakeData"; // Assuming fakeData.ts exists at this path

interface CategoryCounts {
  [category: string]: number;
}

const SuggestionsByCategoryChart = () => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart<
    keyof ChartTypeRegistry,
    number[],
    string
  > | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      const categoryCounts: CategoryCounts = fakeSuggestions.reduce(
        (acc: any, suggestion: any) => {
          acc[suggestion.category] = (acc[suggestion.category] || 0) + 1;
          return acc;
        },
        {}
      );

      const labels = Object.keys(categoryCounts);
      const data = Object.values(categoryCounts);

      const chartOptions: ChartOptions<"bar"> = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: "Number of Suggestions",
            },
          },
          x: {
            title: {
              display: true,
              text: "Category",
            },
          },
        },
        plugins: {
          legend: {
            display: false,
          },
          title: {
            display: true,
            text: "Tailored AI suggestions on what your customers are thinking about you to improve!",
            font: {
              size: 16,
              weight: "bold",
            },
          },
        },
      };

      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      chartInstance.current = new Chart(chartRef.current, {
        type: "bar",
        data: {
          labels: labels,
          datasets: [
            {
              label: "Suggestions",
              data: data,
              backgroundColor: "rgba(54, 162, 235, 0.7)",
              borderColor: "rgba(54, 162, 235, 1)",
              borderWidth: 1,
            },
          ],
        },
        options: chartOptions,
      });
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
        chartInstance.current = null;
      }
    };
  }, []);

  return (
    <div className="bg-white rounded-md shadow-md p-6">
      <canvas ref={chartRef} style={{ width: "100%", height: "300px" }} />
    </div>
  );
};

export default SuggestionsByCategoryChart;
