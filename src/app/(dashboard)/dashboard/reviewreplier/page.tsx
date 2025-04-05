import ReviewText from "@/components/ReviewText";
import React from "react";

const ReviewReplier = () => {
  return (
    <section className="p-8 bg-gray-50 rounded-lg shadow-sm">
      {/* Header */}
      <h2 className="text-3xl font-bold mb-6 text-blue-700">
        AI-Powered Review Responses
      </h2>
      <p className="text-gray-600 mb-8 text-lg">
        Engage with your customers effectively using AI-generated, tailored
        responses. Improve your online reputation, build stronger customer
        relationships, and save time with automated review management.
      </p>

      {/* Review Text Component */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <ReviewText />
      </div>

      {/* Benefits Section */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-4 text-blue-700">
          Why Use AI Review Responses?
        </h3>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>
            <strong>Save Time:</strong> Automate the process of crafting
            high-quality responses to customer reviews.
          </li>
          <li>
            <strong>Improve Customer Satisfaction:</strong> Address customer
            concerns promptly and professionally, showing that you value their
            feedback.
          </li>
          <li>
            <strong>Enhance Online Reputation:</strong> Positive interactions
            with customers can boost your business's online reputation and
            attract new customers.
          </li>
          <li>
            <strong>Data-Driven Insights:</strong> Gain insights into customer
            sentiment and review trends to identify areas for improvement.
          </li>
          <li>
            <strong>Consistency:</strong> Maintain a consistent brand voice and
            tone across all customer interactions.
          </li>
        </ul>
      </div>

      {/* Features Section */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-4 text-blue-700">
          Key Features
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h4 className="text-xl font-semibold mb-2">Sentiment Analysis</h4>
            <p className="text-gray-600">
              Automatically detect the sentiment of reviews (positive, negative,
              or neutral) and tailor responses accordingly.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h4 className="text-xl font-semibold mb-2">
              Customizable Templates
            </h4>
            <p className="text-gray-600">
              Use pre-built templates or create your own to reflect your brand's
              voice and values.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h4 className="text-xl font-semibold mb-2">Real-Time Responses</h4>
            <p className="text-gray-600">
              Generate and publish responses in real-time to keep customers
              engaged.
            </p>
          </div>
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="text-center">
        <h3 className="text-2xl font-semibold mb-4 text-blue-700">
          Ready to Transform Your Customer Engagement?
        </h3>
        <p className="text-gray-600 mb-6">
          Start using AI-powered review responses today and see the difference
          it makes for your business.
        </p>
        <button className="bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors">
          Get Started Now
        </button>
      </div>
    </section>
  );
};

export default ReviewReplier;
