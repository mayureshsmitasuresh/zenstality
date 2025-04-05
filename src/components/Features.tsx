"use client";

import { motion } from "framer-motion";
import {
  AiOutlineSearch,
  AiOutlineMessage,
  AiOutlineDashboard,
  AiOutlineAreaChart,
} from "react-icons/ai"; // Import icons

const FeaturesSection = () => {
  const features = [
    {
      title: "AI-Powered Review Analysis",
      description: "Gain deep insights into guest sentiment and identify areas for improvement.",
      icon: <AiOutlineSearch size={48} />,
    },
    {
      title: "Intelligent Response Generation",
      description: "Craft personalized, professional responses that strengthen guest relationships.",
      icon: <AiOutlineMessage size={48} />,
    },
    {
      title: "Centralized Review Management",
      description: "Manage reviews from multiple platforms in one intuitive dashboard.",
      icon: <AiOutlineDashboard size={48} />,
    },
    {
      title: "Performance Tracking & Reporting",
      description: "Monitor your reputation's health with clear and concise reports.",
      icon: <AiOutlineAreaChart size={48} />,
    },
  ];

  return (
    <section className="py-16 ">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold text-blue-800 text-center mb-12"
        >
          Experience the Zenstality Difference.
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-lg p-6 shadow-md text-center flex flex-col justify-between items-center"
            >
              <div className="mb-4 text-blue-600">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-blue-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-700">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;