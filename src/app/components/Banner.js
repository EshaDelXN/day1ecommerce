"use client";

import { useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function Banner() {
  const [query, setQuery] = useState("");
  
  // Main categories array
  const mainCategories = [
    "Apple",
    "Accessories",
    "Electronics",
    "Smartwatches",
    "Fitness Bands",
    "Wireless Earbuds",
    "Bluetooth Speakers",
    "decor",
    "furniture",
    "watches",
    "samsung",
    "Daily essentials",
    "Snacks",
    "Drinks"
  ];

  // Popular search tags (could overlap with main categories or be separate)
  const popularTags = [
    "Smartwatches",
    "Fitness Bands", 
    "Wireless Earbuds",
    "Bluetooth Speakers"
  ];

  // Combine all searchable items here
  const searchableItems = [...mainCategories];

  // Filtered suggestions based on current query
  const filteredSuggestions = query
    ? searchableItems.filter((item) =>
        item.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <section className="relative bg-gradient-to-r from-blue-800 to-blue-600 text-white text-center p-8 md:p-12 rounded-xl my-6 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-white blur-xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 rounded-full bg-white blur-xl"></div>
      </div>
      
      <div className="relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-3">SMART WEARABLES</h2>
        <p className="text-lg md:text-xl mb-6">Up to 80% OFF on selected items</p>
        
        <div className="max-w-md mx-auto relative">
          <input
            type="text"
            placeholder="Search products..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full px-5 py-3 pr-12 rounded-full border-0 focus:ring-2 focus:ring-yellow-400 text-blue-700 placeholder-blue-500 shadow-lg transition-all duration-300 focus:shadow-xl bg-white"
          />
          <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-600 hover:text-blue-800 transition-colors">
            <FaSearch className="h-5 w-5" />
          </button>

          {/* Live suggestions dropdown */}
          {filteredSuggestions.length > 0 && (
            <ul className="absolute left-0 right-0 bg-white text-blue-700 rounded-b-lg shadow-lg max-h-48 overflow-auto z-20">
              {filteredSuggestions.map((item, index) => (
                <li
                  key={index}
                  className="cursor-pointer px-4 py-2 hover:bg-yellow-400 hover:text-white"
                  onClick={() => setQuery(item)}
                >
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
        
        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {popularTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setQuery(tag)}
              className="bg-black bg-opacity-20 px-4 py-2 rounded-full hover:bg-opacity-30 transition-all cursor-pointer text-sm font-medium text-white border border-white border-opacity-30 hover:border-opacity-50"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
