"use client";

import { motion } from "framer-motion";

const ProblemSolutionSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-semibold text-blue-800 mb-4"
          >
            Navigating the Noise of Online Reviews?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-700 max-w-2xl mx-auto text-justify"
          >
            In the fast-paced world of hospitality, managing your online
            reputation can feel overwhelming. Missed opportunities, negative
            feedback, and inconsistent responses can impact your brand's image
            and guest loyalty. Zenstality provides the clarity and control you
            need.
          </motion.p>
        </div>

        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-3xl font-semibold text-blue-800 mb-4"
          >
            Find Your Balance with Zenstality.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-lg text-gray-700 max-w-2xl mx-auto text-justify"
          >
            Zenstality uses advanced AI to analyze reviews, provide actionable
            insights, and generate thoughtful responses, allowing you to focus
            on creating exceptional guest experiences.
          </motion.p>
        </div>

        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-semibold text-blue-800 mb-4"
          >
            Tired of Generic AI Responses?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-700 max-w-2xl mx-auto text-justify"
          >
            In the personalized world of hospitality, one-size-fits-all
            solutions fall short. You need AI that understands *your* unique
            hotel and your brand voice, your specific guest concerns, and your
            individual approach to service. Zenstality is designed to move
            beyond generic outputs.
          </motion.p>
        </div>

        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-3xl font-semibold text-blue-800 mb-4"
          >
            Unlock Tailored AI Insights with Zenstality.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-lg text-gray-700 max-w-2xl mx-auto text-justify"
          >
            Our vision is to empower your hotel with AI that truly understands
            you. By learning from your specific data – past guest feedback,
            internal guidelines, and unique service offerings – Zenstality
            delivers AI-powered analysis and response suggestions that are
            finely tuned and authentically aligned with your hotel's identity.
            Experience the power of AI that's built around *your* business.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;
