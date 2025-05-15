import Image from "next/image";

const brands = [
  { name: "Apple", image: "/images/apple.jfif", offer: "UP TO 80% OFF" },
  { name: "Realme", image: "/images/realme.jpg", offer: "UP TO 80% OFF" },
  { name: "Poco", image: "/images/poco.jfif", offer: "UP TO 80% OFF" },
  { name: "Mi", image: "/images/mi.png", offer: "UP TO 80% OFF" },
  { name: "Samsung", image: "/images/samsung.jpg", offer: "UP TO 80% OFF" },
  { name: "oneplus", image: "/images/oneplus.png", offer: "UP TO 80% OFF" },
  { name: "vivo", image: "/images/vivo.webp", offer: "UP TO 80% OFF" },
];

export default function BrandSlider() {
  return (
    <section className="my-10">
      <h3 className="text-xl font-semibold mb-4">
        Top <span className="text-blue-500">Electronics Brands</span>
      </h3>
      <div className="flex gap-6 overflow-x-auto scrollbar-thin pb-2">
        {brands.map((brand) => (
          <div
            key={brand.name}
            className="min-w-[160px] bg-white rounded-xl shadow-md border border-gray-200 p-4 flex flex-col items-center justify-center cursor-pointer transition-transform hover:scale-105"
            role="button"
            tabIndex={0}
          >
            <div className="relative w-20 h-20 mb-3 rounded-full overflow-hidden">
              <Image
                src={brand.image}
                alt={brand.name}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <p className="font-bold text-center">{brand.name}</p>
            <span className="text-sm text-yellow-600">{brand.offer}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
