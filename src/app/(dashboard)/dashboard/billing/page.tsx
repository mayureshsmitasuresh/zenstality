"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter


const PricingPage = () => {
  const router = useRouter(); // Initialize useRouter

  const [showMonthly, setShowMonthly] = useState(false);
  const [showAnnual, setShowAnnual] = useState(false);

  const handleSurveyClick = () => {
    router.push("/survey"); // Navigate to the survey page
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold text-blue-800 text-center mb-8">
          Pricing Plans
        </h1>
        <p className="text-lg text-gray-700 text-center mb-12">
          Join our early bird list and get 80% off on all plans!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Basic Plan */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4">Basic</h2>
            <p className="text-gray-700 mb-4">
              Essential Reputation Management for small businesses.
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>AI-powered review analysis</li>
              <li>Basic response templates</li>
              <li>Single platform integration</li>
            </ul>
            <div className="mb-4">
              <button
                className="bg-gray-300 rounded-lg p-4 blur-md cursor-not-allowed"
                onClick={() => setShowMonthly(!showMonthly)}
              >
                Monthly: Coming Soon
              </button>
              {showMonthly && <p>Monthly Price: $XX</p>}
            </div>
            <div>
              <button
                className="bg-gray-300 rounded-lg p-4 blur-md cursor-not-allowed"
                onClick={() => setShowAnnual(!showAnnual)}
              >
                Annual: Coming Soon
              </button>
              {showAnnual && <p>Annual Price: $XXX</p>}
            </div>
          </div>

          {/* Advanced Plan */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4">Advanced</h2>
            <p className="text-gray-700 mb-4">
              Enhanced features for growing businesses.
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>Advanced AI sentiment analysis</li>
              <li>AI will train on your data</li>
              <li>Customizable response generation</li>
              <li>Multiple platform reviews integration</li>
              <li>Performance tracking and Weekly reporting</li>
            </ul>
            <div className="mb-4">
              <button
                className="bg-gray-300 rounded-lg p-4 blur-md cursor-not-allowed"
                onClick={() => setShowMonthly(!showMonthly)}
              >
                Monthly: Coming Soon
              </button>
              {showMonthly && <p>Monthly Price: $XX</p>}
            </div>
            <div>
              <button
                className="bg-gray-300 rounded-lg p-4 blur-md cursor-not-allowed"
                onClick={() => setShowAnnual(!showAnnual)}
              >
                Annual: Coming Soon
              </button>
              {showAnnual && <p>Annual Price: $XXX</p>}
            </div>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-white rounded-lg shadow-md p-6 ">
            <h2 className="text-2xl font-semibold mb-4">Enterprise</h2>
            <p className="text-gray-700 mb-4">
              Fully integrated AI solution with local data processing.
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>On-premise AI deployment</li>
              <li>Custom AI model training</li>
              <li>Full system integration</li>
              <li>Dedicated support and maintenance</li>
            </ul>
            <button
              onClick={handleSurveyClick}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg w-full transition-colors duration-300"
            >
              Call Us!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
