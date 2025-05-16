"use client";

import Image from "next/image";
import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const essentials = [
  { name: "Daily Essentials", image: "/images/dailyessentials.jfif", offer: "UP TO 50% OFF" },
  { name: "Vegetables", image: "/images/vegetables.webp", offer: "UP TO 50% OFF" },
  { name: "Fruits", image: "/images/fruits.pjpeg", offer: "UP TO 50% OFF" },
  { name: "Snacks", image: "/images/snacks.jpg", offer: "UP TO 50% OFF" },
  { name: "Juices", image: "/images/juices.jpg", offer: "UP TO 50% OFF" },
  { name: "Appliances", image: "/images/appliances.jfif", offer: "UP TO 50% OFF" },
  { name: "Dairy", image: "/images/dairy.jpg", offer: "UP TO 40% OFF" },
  { name: "Bakery", image: "/images/bakery.webp", offer: "UP TO 30% OFF" },
];

export default function EssentialsSlider() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -300 : 300;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="my-10 relative">
  {/* Heading centered */}
  <div className="mb-1">
    <h3 className="text-xl font-bold text-blue-600 text-center">
      Daily Essentials
    </h3>
  </div>

  {/* Scroll buttons aligned right */}
  <div className="flex justify-end mb-1">
    <div className="flex space-x-2">
      <button 
        onClick={() => scroll('left')}
        className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700"
        aria-label="Scroll left"
      >
        <FaChevronLeft />
      </button>
      <button 
        onClick={() => scroll('right')}
        className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700"
        aria-label="Scroll right"
      >
        <FaChevronRight />
      </button>
    </div>
  </div>


      <div 
      ref={scrollRef}
      className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory"


      >
        {essentials.map((item) => (
          <div
            key={item.name}
            className="min-w-[160px] flex-shrink-0 bg-white rounded-xl shadow-sm border border-gray-100 p-4 flex flex-col items-center justify-center cursor-pointer transition-all hover:shadow-md hover:border-blue-200 snap-start"
          >
            <div className="relative w-20 h-20 mb-4 rounded-full overflow-hidden border-4 border-white shadow-inner">
              <Image
                src={item.image}
                alt={item.name}
                layout="fill"
                objectFit="cover"
                className="bg-white p-1"
              />
            </div>
            <p className="font-bold text-gray-800 text-center">{item.name}</p>
            <span className="text-sm font-medium text-green-600 mt-1 bg-green-50 px-2 py-1 rounded-full">
              {item.offer}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}