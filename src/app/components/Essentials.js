"use client";
import { useRef } from "react";
import Image       from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const essentials = [
  { name:"Daily Essentials", image:"/images/dailyessentials.jfif" },
  { name:"Vegetables",       image:"/images/vegetables.webp"     },
  { name:"Fruits",           image:"/images/fruits.pjpeg"        },
  { name:"Snacks",           image:"/images/snacks.jpg"          },
  { name:"Juices",           image:"/images/juices.jpg"          },
  { name:"Appliances",       image:"/images/appliances.jfif"     },
  { name:"Dairy",            image:"/images/dairy.jpg"           },
  { name:"Bakery",           image:"/images/bakery.webp"         },
];

export default function EssentialsSlider() {
  const ref = useRef(null);
  const scroll = dir => ref.current?.scrollBy({ left: dir==='left'?-260:260, behavior:"smooth" });

  return (
    <section className="my-10">
      <div className="flex items-center justify-between mb-1 px-1">
  {/* Empty div to take left space */}
  <div className="w-6 sm:w-12" />
  
  {/* Centered text */}
  <h3 className="text-xl font-bold text-blue-600 text-center flex-1">
    Daily Essentials
  </h3>

  {/* Buttons on the right */}
  <div className="space-x-1 hidden sm:flex">
    <button
      onClick={() => scroll("left")}
      className="p-2 bg-gray-100 rounded-full text-gray-600 hover:bg-gray-200"
    >
      <FaChevronLeft />
    </button>
    <button
      onClick={() => scroll("right")}
      className="p-2 bg-gray-100 rounded-full text-gray-600 hover:bg-gray-200"
    >
      <FaChevronRight />
    </button>
  </div>
</div>


      <div ref={ref} className="flex gap-4 overflow-x-auto scroll-snap-x snap-mandatory pb-1">
        {essentials.map(item=>(
          <div key={item.name}
               className="snap-start flex-shrink-0 min-w-[120px] sm:min-w-[140px] bg-white rounded-xl border
                          p-4 flex flex-col items-center hover:shadow-md transition">
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 mb-2 rounded-full overflow-hidden">
              <Image src={item.image} alt={item.name} fill className="object-cover"/>
            </div>
            <p className="text-center text-[13px] sm:text-sm font-semibold">{item.name}</p>
            <span className="text-[11px] sm:text-xs text-green-600 font-medium">UP TO 50% OFF</span>
          </div>
        ))}
      </div>
    </section>
  );
}
