"use client";
import Image from "next/image";

const brands = [
  { name: "Apple",   image: "/images/apple.jfif"   },
  { name: "Realme",  image: "/images/realme.jpg"   },
  { name: "Poco",    image: "/images/poco.jfif"    },
  { name: "Mi",      image: "/images/mi.png"       },
  { name: "Samsung", image: "/images/samsung.jpg"  },
  { name: "OnePlus", image: "/images/oneplus.png"  },
  { name: "Vivo",    image: "/images/vivo.webp"    },
];

export default function BrandSlider() {
  return (
    <section className="my-10 px-4 sm:px-0">
      <h3 className="text-xl font-bold text-blue-600 text-center mb-4">
        Top Electronics Brands
      </h3>

      <div className="flex gap-4 overflow-x-auto scrollbar-thin scrollbar-thumb-blue-400
                      scroll-snap-x snap-mandatory pb-2">
        {brands.map((b) => (
          <div
            key={b.name}
            className="snap-start flex-shrink-0 min-w-[100px] sm:min-w-[140px] lg:min-w-[170px]
                       bg-white rounded-xl shadow-md border border-gray-200
                       p-3 sm:p-4 flex flex-col items-center hover:shadow-lg transition">
            <div className="relative w-14 h-14 sm:w-20 sm:h-20 mb-2 rounded-full overflow-hidden">
              <Image
                src={b.image}
                alt={b.name}
                fill
                sizes="(max-width: 640px) 56px, (max-width: 1024px) 80px, 96px"
                className="object-cover"
              />
            </div>
            <p className="font-semibold text-sm sm:text-base text-center">{b.name}</p>
            <span className="text-[11px] sm:text-xs text-yellow-600 font-medium mt-1">
              UP TO 80% OFF
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
