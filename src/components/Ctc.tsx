"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const CallToActionSection = () => {
  return (
    <section className="py-20 ">
      <div className="container mx-auto text-center px-4">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold text-blue-800 mb-6"
        >
          Ready to Embrace Zenstality?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-gray-700 max-w-2xl mx-auto mb-8"
        >
          Join our early bird list and start your journey towards a balanced and
          thriving online reputation. Be the first to experience Zenstality and
          unlock exclusive benefits, including an 80% discount!
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center space-x-4"
        >
          <Link
            href="/dashboard"
            className="bg-blue-700 hover:bg-blue-900 text-white font-semibold py-3 px-6 rounded-full transition-colors duration-300"
          >
            Join The Waitlist
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToActionSection;
