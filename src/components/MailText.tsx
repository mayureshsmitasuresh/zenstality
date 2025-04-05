"use client";

import { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

const MailText = () => {
  const [mail, setmail] = useState("");
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
    const prompt = `As a professional hotel manager, craft a concise and professional response to the following email: "${mail}". 
        **Guidelines:**
        1. **Personalized Thank You**: Begin by thanking the guest personally for sharing their feedback or inquiry.
        2. **Tone Alignment**: Match the tone of the email (e.g., empathetic for complaints, enthusiastic for compliments, neutral for inquiries).
        3. **Address Specifics**: Directly address the key points or concerns mentioned in the email.
        4. **Conciseness**: Keep the response under 120 words, using clear and professional language suitable for a 15-year-old to understand.
        5. **Professional Language**: Use formal, professional vocabulary. Avoid slang, jargon, or overly complex terms.
        6. **Sign-Off**: End the response with: "- [Hotel Name] Team".`;

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
    if (!mail) {
      alert("Please provide mail ");
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
    <div className="p-6 max-w-2xl mx-auto">
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-4">Paste Your Mail Here</h2>
          <textarea
            name="mail"
            id="mail"
            value={mail}
            onChange={(e) => setmail(e.target.value)}
            className="w-full p-4 border rounded-lg shadow-sm h-32"
            placeholder="How was your stay?..."
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
          disabled={isLoading}
        >
          {isLoading ? "Generating Response..." : "Submit mail"}
        </button>
      </form>

      {response && (
        <div className="mt-8">
          <form onSubmit={handleSubmit}></form>
          <h3 className="text-lg font-semibold mb-4">Your Response</h3>
          <div className="relative">
            <textarea
              name="mailResponse"
              id="mailResponse"
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

export default MailText;
