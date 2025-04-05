"use client";

import { motion } from "framer-motion";
import { SignedIn } from "@clerk/nextjs";
import { MoveRightIcon } from "lucide-react";
import Link from "next/link";
import ProblemSolutionSection from "./ProblemSolution";
import FeaturesSection from "./Features";
import CallToActionSection from "./Ctc";
import { HotelIcon, StarIcon, MessageSquareCodeIcon } from "lucide-react"; // Example icons

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden py-24 min-h-screen bg-gradient-to-br from-gray-100 via-blue-50 to-blue-100">
      {/* Background SVG Curves (More Expressive) */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <svg
          className="absolute inset-0 -z-10 h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1920 1080"
          fill="none"
        >
          <path
            d="M0 0C354.5 158.5 709 237.7 1063.5 237.7C1418 237.7 1772.5 158.5 1920 0V1080H0V0Z"
            fill="rgba(173,109,244,0.2)"
          />
          <path
            d="M0 1080C354.5 921.5 709 842.3 1063.5 842.3C1418 842.3 1772.5 921.5 1920 1080V0H0V1080Z"
            fill="rgba(109,147,244,0.2)"
            opacity="0.6"
          />
        </svg>
      </div>

      <div className="relative z-10 container mx-auto  px-6 md:px-12">
        <motion.h1
          initial={{ opacity: 0, y: -80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-6 text-center flex flex-col justify-center items-center"
        >
          <HotelIcon className="inline-block mr-2 text-blue-700" size={50} />{" "}
          <div>
            {" "}
            Your Reputation, Elevated.
            <span className="text-blue-700 ml-1">Zenstality</span> for
            Hoteliers.
          </div>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
          className="text-lg text-justify md:text-2xl text-gray-700 mb-10 md:max-w-3xl mx-auto leading-relaxed"
        >
          Tired of juggling guest reviews and feeling overwhelmed?{" "}
          <strong className="font-semibold text-blue-700">Zenstality</strong> is
          your AI-powered partner, designed specifically for the hospitality
          industry to transform guest feedback into a thriving online reputation
          and stronger guest relationships.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center space-x-6 text-justify"
        >
          <Link
            href="/dashboard"
            className="bg-blue-700 hover:bg-blue-900 text-white font-semibold py-4 px-8 rounded-full shadow-md transition-colors duration-300"
          >
            Get Early Access{" "}
            <MoveRightIcon className="inline-block ml-2" size={20} />
          </Link>
          {/* You can add another button here if needed, e.g., for a demo */}
          {/* <Link
            href="/demo"
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-6 rounded-full transition-colors duration-300"
          >
            Request a Demo
          </Link> */}
        </motion.div>

        {/* Small visual cues for trust and value */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 flex  justify-center  items-center space-x-6 text-center"
        >
          <div className="flex flex-col md:flex-row  items-center space-x-2 text-gray-600">
            <StarIcon className="text-yellow-500" size={30} />
            <span>Boost Guest Satisfaction</span>
          </div>
          <div className="flex flex-col md:flex-row items-center space-x-2 text-gray-600">
            <MessageSquareCodeIcon className="text-green-500" size={30} />
            <span>Simplify Review Management</span>
          </div>
        </motion.div>
      </div>

      {/* Sections below the fold */}
      <div className="mt-20">
        <ProblemSolutionSection />
      </div>
      <div className="mt-20">
        <FeaturesSection />
      </div>
      <div className="mt-20">
        <CallToActionSection />
      </div>

      {/* Optional: SignedIn Dashboard Link */}
      {/* <SignedIn>
        <div className="absolute bottom-8 right-8">
          <Link href={"/dashboard"}>
            <button className="flex flex-row gap-2 px-5 py-3 rounded-md shadow-lg text-white bg-indigo-600 hover:bg-indigo-700 transition-all duration-200 ease-in-out">
              Go to Dashboard <MoveRightIcon />
            </button>
          </Link>
        </div>
      </SignedIn> */}
    </section>
  );
};

export default HeroSection;
