"use client";

import { useState } from "react";
import StarRating from "./ui/starsRating";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { WandSparkles } from "lucide-react";

const ReviewText = () => {
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false); // State for copy success message

  // Initialize Gemini API
  const genAI = new GoogleGenerativeAI(
    process.env.NEXT_PUBLIC_GEMINI_API_KEY as string
  );
  const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-lite" });

  const generateResponse = async () => {
    console.log(process.env.NEXT_PUBLIC_GEMINI_API_KEY as string);
    const prompt = `As a professional hotel manager, craft a response to this ${
      rating * 2
    }/10 review: "${review}". 
      Follow these guidelines:
      1. Thank the guest personally that they shared a review online
      2. Address specific feedback by getting the tone of the "${review}"
      3. ${
        rating * 2 < 7
          ? "Apologize and offer solution based on"
          : "Highlight positive aspects"
      }
      4. Keep it under 120 words with human english as a 15 year old person with all professional sounding words only not any fancy ew era word
      5. Sign with "- [Hotel Name] Team"`;

    try {
      setIsLoading(true);
      const result = await model.generateContent(prompt);
      const response = result.response;
      setResponse(response.text());
    } catch (error) {
      console.log(error);
      setResponse("Error generating response. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!review || rating === 0) {
      alert("Please provide both review and rating");
      return;
    }
    await generateResponse();
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(response);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000); // Clear message after 2 seconds
  };

  return (
    <div className="p-1 md:p-4 lg:p-6 max-w-2xl mx-auto">
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-4">Share Customer Experience</h2>
          <textarea
            name="review"
            id="review"
            value={review}
            onChange={(e) => setReview(e.target.value)}
            className="w-full p-4 border rounded-lg shadow-sm h-32"
            placeholder="How was your stay?..."
          />

          <div className="mt-4">
            <StarRating onChange={setRating} />
            <p className="mt-2 text-gray-600">Selected rating: {rating}/10</p>
          </div>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 flex gap-2"
          disabled={isLoading}
        >
          {isLoading ? "Generating Response..." : "Submit Review"}
          <WandSparkles size={20} />
        </button>
      </form>

      {response && (
        <div className="mt-8">
          <form onSubmit={handleSubmit}></form>
          <h3 className="text-lg font-semibold mb-4">Your Response</h3>
          <div className="relative">
            <textarea
              name="reviewResponse"
              id="reviewResponse"
              value={response}
              readOnly
              className="w-full p-4 border rounded-lg bg-gray-50 h-48"
              placeholder="Waiting for response..."
            />
            <button
              type="button"
              onClick={copyToClipboard}
              className="absolute top-2 right-2 bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded-md text-sm"
            >
              Copy
            </button>
            {copySuccess && (
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 text-white">
                Copied!
              </div>
            )}
          </div>
          <button
            type="button"
            onClick={() => handleSubmit}
            className="mt-4 bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700"
            disabled={isLoading}
          >
            Regenerate Response
          </button>
        </div>
      )}
    </div>
  );
};

export default ReviewText;
