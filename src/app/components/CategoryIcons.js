"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { categories } from "../data/categories"; // Adjust path if needed

export default function CategoryIcons() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <section className="my-10 px-4 sm:px-0">
      <h3 className="text-xl font-semibold mb-4 text-blue-500 text-center">
        Shop From Top Categories
      </h3>

      {/* Category icons */}
      <div className="flex gap-4 overflow-x-auto scrollbar-thin pb-2 scroll-snap-x snap-mandatory">
        {categories.map((cat) => (
          <div
            key={cat.name}
            onClick={() => setSelectedCategory(cat)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") setSelectedCategory(cat);
            }}
            role="button"
            tabIndex={0}
            className={`min-w-[130px] sm:min-w-[160px] flex-shrink-0 bg-white rounded-xl shadow-md border border-gray-200 p-4 flex flex-col items-center justify-center cursor-pointer transition-transform hover:scale-105
              ${selectedCategory?.name === cat.name ? "border-blue-500 scale-110" : ""}
              focus:outline-none focus:ring-2 focus:ring-blue-500
            `}
          >
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 mb-3 rounded overflow-hidden">
              <Image
                src={cat.icon}
                alt={cat.name}
                fill
                sizes="(max-width: 640px) 64px, (max-width: 768px) 80px, 100px"
                className="object-cover"
              />
            </div>
            <span className="font-bold text-center text-sm">{cat.name}</span>
          </div>
        ))}
      </div>

      {/* Show products of selected category */}
      {selectedCategory && (
        <div className="mt-8 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {selectedCategory.products.map((prod) => (
            <Link key={prod.id} href={`/product/${prod.id}`} className="block">
              <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center hover:shadow-xl transition cursor-pointer min-h-[280px]">
                {/* Fixed height image container */}
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 mb-3 rounded overflow-hidden">
                  <Image
                    src={prod.image}
                    alt={prod.name}
                    fill
                    sizes="(max-width: 640px) 112px, (max-width: 768px) 128px, 140px"
                    className="object-contain"
                  />
                </div>
                <h4 className="text-base sm:text-lg font-semibold text-center">{prod.name}</h4>
              </div>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}
