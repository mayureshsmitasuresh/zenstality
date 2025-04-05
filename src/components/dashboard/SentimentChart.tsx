"use client";

import { useState } from "react";
import { fakeSuggestions } from "../../data/fakeData";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

interface Suggestion {
  id: number;
  category: string;
  suggestion: string;
}

const AccordionSuggestions = () => {
  const categories: string[] = [...new Set(fakeSuggestions.map((s) => s.category))];
  const [openCategories, setOpenCategories] = useState<{
    [key: string]: boolean;
  }>({});

  const toggleCategory = (category: string) => {
    setOpenCategories({
      ...openCategories,
      [category]: !openCategories[category],
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      {categories.map((category) => (
        <div key={category} className="mb-4">
          <div
            className="flex justify-between items-center cursor-pointer p-3 bg-gray-100 rounded-md"
            onClick={() => toggleCategory(category)}
          >
            <h3 className="font-semibold">{category}</h3>
            {openCategories[category] ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          {openCategories[category] && (
            <ul className="mt-2 list-disc list-inside text-gray-700">
              {fakeSuggestions
                .filter((s) => s.category === category)
                .map((suggestion) => (
                  <li key={suggestion.id} className="mb-1">
                    {suggestion.suggestion}
                  </li>
                ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default AccordionSuggestions;