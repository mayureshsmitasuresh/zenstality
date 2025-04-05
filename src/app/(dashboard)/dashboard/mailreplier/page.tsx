import MailText from "@/components/MailText"; // Assuming you have a MailText component
import React from "react";

const MailReplier = () => {
  return (
    <section className="p-8 bg-gray-50 rounded-lg shadow-sm">
      {/* Header */}
      <h2 className="text-3xl font-bold mb-6 text-blue-700">
        AI-Powered Email Responses
      </h2>
      <p className="text-gray-600 mb-8 text-lg">
        Engage with your customers effectively using AI-generated, tailored
        email responses. Improve communication, build stronger customer
        relationships, and save time with automated email management.
      </p>

      {/* Mail Text Component */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <MailText />
      </div>

      {/* Benefits Section */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-4 text-blue-700">
          Why Use AI Email Responses?
        </h3>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>
            <strong>Save Time:</strong> Automate the process of crafting
            high-quality responses to customer emails.
          </li>
          <li>
            <strong>Improve Customer Satisfaction:</strong> Address customer
            inquiries and concerns promptly and professionally.
          </li>
          <li>
            <strong>Enhance Communication:</strong> Ensure consistent and
            effective communication with your customers.
          </li>
          <li>
            <strong>Data-Driven Insights:</strong> Gain insights into customer
            inquiries and trends to improve your services.
          </li>
          <li>
            <strong>Consistency:</strong> Maintain a consistent brand voice and
            tone across all email interactions.
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
              Automatically detect the sentiment of emails (positive, negative,
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
              Generate and send responses in real-time to keep customers
              engaged.
            </p>
          </div>
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="text-center">
        <h3 className="text-2xl font-semibold mb-4 text-blue-700">
          Ready to Transform Your Email Communication?
        </h3>
        <p className="text-gray-600 mb-6">
          Start using AI-powered email responses today and see the difference it
          makes for your business.
        </p>
        <button className="bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors">
          Get Started Now
        </button>
      </div>
    </section>
  );
};

export default MailReplier;