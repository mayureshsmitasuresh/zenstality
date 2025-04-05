"use client";

import { fakeReviews } from "../../data/fakeData";
import { motion, AnimatePresence } from "framer-motion";

const ReviewsWidget = () => {
  const getRatingColor = (rating: number) => {
    // Normalize the rating to a value between 0 and 1
    const normalizedRating = (rating - 1) / 4;

    // Interpolate between red (255, 0, 0) and green (0, 255, 0)
    const red = Math.round(255 * (1 - normalizedRating));
    const green = Math.round(255 * normalizedRating);

    return `${red}, ${green}, 0, 0.15`; // RGB values as a comma-separated string
  };

  return (
  <div className="p-4 ">
      <h2 className="text-xl text-center font-semibold mb-4">Recent Reviews</h2>
      <div className="bg-white rounded-lg shadow-lg border-2 border-gray-200 overflow-y-auto scroll-smooth max-h-[400px]">
      <AnimatePresence>
        {fakeReviews.map((review) => (
          <motion.div
            key={review.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="border-b border-gray-200 py-3 last:border-b-0 bg-opacity-20 p-2"
            style={{
              backgroundColor: `rgb(${getRatingColor(review.rating)})`,
            }}
          >
            <div className="flex justify-between items-center mb-1">
              <span className="font-semibold">Rating: {review.rating}/5</span>
              <span className="text-sm text-gray-500">{review.date}</span>
            </div>
            <p className="text-gray-700">{review.text}</p>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  </div>
  );
};

export default ReviewsWidget;