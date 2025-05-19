"use client";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function Banner() {
  const [query, setQuery] = useState("");

  const searchableItems = [
    "Apple", "Samsung", "Accessories", "Electronics", "Smartwatches",
    "Fitness Bands", "Wireless Earbuds", "Bluetooth Speakers",
    "Decor", "Furniture", "Watches", "Daily Essentials", "Snacks", "Drinks"
  ];

  const suggestions = query
    ? searchableItems.filter(i =>
        i.toLowerCase().includes(query.toLowerCase()))
    : [];

  return (
    <section className="relative rounded-xl overflow-hidden my-6 
                        bg-gradient-to-r from-blue-800 to-blue-600
                        text-white text-center px-4 py-12 sm:py-16 sm:px-16">
      {/* pretty blobs */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-28 h-28 sm:w-40 sm:h-40 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-36 h-36 sm:w-52 sm:h-52 bg-white rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 space-y-6 max-w-2xl w-full mx-auto px-2 sm:px-0">
        <h2 className="font-extrabold text-2xl sm:text-4xl md:text-5xl leading-tight">
          SMART WEARABLES
        </h2>
        <p className="text-base sm:text-lg md:text-xl">
          Up to 80% OFF on selected items
        </p>

        {/* search box */}
        <div className="relative">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products…"
            className="w-full rounded-full pl-5 pr-12 py-3
                       text-white placeholder-blue-300
                       bg-white/10 shadow-lg
                       focus:ring-2 focus:ring-yellow-400 outline-none
                       text-sm sm:text-base
                       transition-colors duration-200"
          />
          <FaSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70" />

          {/* suggestions */}
          {suggestions.length > 0 && (
            <ul className="absolute left-0 right-0 mt-1 bg-white text-blue-700 rounded-md shadow-lg
                           max-h-48 overflow-auto z-20 text-sm sm:text-base">
              {suggestions.map((item) => (
                <li
                  key={item}
                  onMouseDown={() => setQuery(item)}
                  className="px-4 py-2 hover:bg-yellow-400 hover:text-white cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}
