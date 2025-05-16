"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { categories } from "../data/categories"; // Adjust path if needed

export default function CategoryIcons() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <section className="my-10">
      <h3 className="text-xl font-semibold mb-4 text-blue-500 text-center">
        Shop From Top Categories
      </h3>

      {/* Category icons */}
      <div className="flex gap-6 overflow-x-auto scrollbar-thin pb-2">
        {categories.map((cat) => (
          <div
            key={cat.name}
            onClick={() => setSelectedCategory(cat)}
            className={`min-w-[160px] flex-shrink-0 bg-white rounded-xl shadow-md border border-gray-200 p-4 flex flex-col items-center justify-center cursor-pointer transition-transform hover:scale-105
              ${selectedCategory?.name === cat.name ? "border-blue-500 scale-110" : ""}
            `}
            role="button"
            tabIndex={0}
          >
            <div className="relative w-20 h-20 mb-3 rounded overflow-hidden">
              <Image src={cat.icon} alt={cat.name} layout="fill" objectFit="cover" />
            </div>
            <span className="font-bold text-center text-sm">{cat.name}</span>
          </div>
        ))}
      </div>

      {/* Show products of selected category */}
      {selectedCategory && (
        <div className="mt-8 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {selectedCategory.products.map((prod) => (
            <Link key={prod.id} href={`/product/${prod.id}`} className="block">
              <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center hover:shadow-xl transition cursor-pointer min-h-[300px]">
                {/* Fixed height image container */}
                <div className="relative w-32 h-32 mb-3 rounded overflow-hidden">
                  <Image
                    src={prod.image}
                    alt={prod.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <h4 className="text-lg font-semibold text-center">{prod.name}</h4>
              </div>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}
